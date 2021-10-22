<?php 
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");

    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    $errors = array();
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (empty($_POST['userName'])) {
            $errors[] = 'Name is empty';
        } else {
            $name = $_POST['userName'];
        }

        if (empty($_POST['userPhone'])) {
            $errors[] = 'Phone is empty';
        } else {
            $phone = $_POST['userPhone'];
        }
        
        if (empty($_POST['userReason'])) {
            $errors[] = 'Reason is empty';
        } else {
            $reason = $_POST['userReason'];
        }

        if (empty($errors)) {
            $date = date('j, F Y h:i A');

            $emailBody = "
              <html>
              <head>
                <title>$name is contacting you</title>
              </head>
              <body style=\"background-color:#fafafa;\">
                <div style=\"padding:20px \">
                Date: <span style=\"color:#888\">$date</span>
                <br />
                Name: <span style=\"color:#888\">$name</span>
                <br />
                Phone: <span style=\"color:#888\">$phone</span>
                <br />
                Order: <span style=\"color:#888\">Оставил заявку на $reason недвижимости</span>
                </div>
              </body>
              </html>  
            ";

            $headers = 'From: <info@kluchi-nedvizhimost48.ru>' . "\r\n" .
            "Reply-To: $name" . "\r\n" .
            "MIME-Version: 1.0\r\n" .
            "Content-Type: text/html; UTF-8\r\n";

            $to = 'oloff@list.ru';
            $subject = "kluchi-nedvizhimost48.ru contact form";

            if (mail($to, $subject, $emailBody, $headers)) {
                $sent = true;
            }
        }
    }
    ?>

    <?php if (!empty($errors)) : ?>

    {
        "status": "fail",
        "error": <?php echo json_encode($errors) ?>
    }

    <?php endif; ?>

    <?php if ($sent === true) : ?>

        {
            "status": "success",
            "message": "Your data was successfully submitted"
        }

    <?php endif; ?>