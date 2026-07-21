<?php
// 1. Seguridad de cabeceras CORS restrictivo)
// Cambia el * por el dominio exacto en producción (ej. https://syesoftware.com)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// 2. Rechazar cualquier método que no sea POST de inmediato
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// 3. Capturar el JSON enviado desde React
$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit;
}

// 4. Validación de reCAPTCHA v3 
/*
$recaptcha_secret = 'TU_CLAVE_SECRETA_AQUI';
$verify_response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptcha_secret . '&response=' . $data['recaptchaToken']);
$response_data = json_decode($verify_response);

if (!$response_data->success || $response_data->score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Verificación de seguridad fallida"]);
    exit;
}
*/

// 5. Sanitización estricta de las variables
$nombre = filter_var(trim($data['nombre']), FILTER_SANITIZE_STRING);
$apellido = filter_var(trim($data['apellido']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$empresa = filter_var(trim($data['empresa']), FILTER_SANITIZE_STRING);
$mensaje = htmlspecialchars(trim($data['mensaje']));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Email inválido"]);
    exit;
}

// 6. Preparar el envío del correo (Usando la plantilla HTML)
$to = "diego.delgado@qualtop.com"; // Correo destino interno
$subject = "Nueva solicitud de contacto: $nombre $apellido";

// Para enviar correos HTML, se debe establecer la cabecera Content-type
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: $nombre <$email>" . "\r\n";
$headers .= "Reply-To: $email" . "\r\n";

// Cuerpo del correo interno (Para ustedes)
$cuerpo_interno = "
    <h2>Nuevo mensaje desde la Landing Page</h2>
    <p><strong>Nombre:</strong> $nombre $apellido</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Empresa:</strong> $empresa</p>
    <p><strong>Mensaje:</strong><br/>$mensaje</p>
";

// 7. Enviar correo interno
$mail_interno = mail($to, $subject, $cuerpo_interno, $headers);

// 8. Auto-respuesta al cliente (Usando el HTML generado en el archivo)
if ($mail_interno) {
    $auto_subject = "¡Hemos recibido tu solicitud! - SYE Software";
    $auto_headers  = "MIME-Version: 1.0" . "\r\n";
    $auto_headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
    $auto_headers .= "From: SYE Software <no-reply@syesoftware.com>" . "\r\n";

    // Cargar la plantilla HTML
    $plantilla_path = __DIR__ . '/plantilla_correo_sye.html';
    if (file_exists($plantilla_path)) {
        $html_template = file_get_contents($plantilla_path);
        // Reemplazar la variable {{nombre}} en el HTML
        $html_template = str_replace('{{nombre}}', $nombre, $html_template);
        
        // Enviar auto-respuesta
        mail($email, $auto_subject, $html_template, $auto_headers);
    }

    echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error al enviar el correo"]);
}
?>