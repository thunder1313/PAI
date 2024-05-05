<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <header><a href="index.php">Index</a></header>
    <?php require_once("funkcje.php");
    if ($_SESSION['zalogowany'] != 1) {
        header("Location: index.php");
    }

    echo $_SESSION['zalogowanyImie'];

    if (isset($_POST["send"])) {
        $currentDir = getcwd();
        $uploadDirectory = "/UserPhotos/";
        $fileName = $_FILES['myfile']['name'];
        $fileSize = $_FILES['myfile']['size'];
        $fileTmpName = $_FILES['myfile']['tmp_name'];
        $fileType = $_FILES['myfile']['type'];

        if ($fileName != "" and ($fileType == 'image/png' or $fileType == 'image/jpeg' or $fileType == 'image/JPEG' or $fileType == 'image/PNG')) {
            $uploadPath = $currentDir . $uploadDirectory . $fileName;
            if (move_uploaded_file($fileTmpName, $uploadPath))
                echo "Uploading photo successful";
        }
    }
    ?>

    <form method="POST" action="index.php">
        <button type='submit' value='wyloguj' name="wyloguj">log out</button>
    </form>

    <form action='user.php' method='POST' enctype='multipart/form-data'>
        <h2>Upload photo</h2>
        <input name="myfile" type="file" name="send"></input>
        <button type='submit' name="send">Send</button>
    </form>

    <img src="UserPhotos/sandworm.jpg" alt="piesek" width=400>
</body>

</html>
