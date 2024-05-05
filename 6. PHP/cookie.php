<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset="UTF-8" />
</head>

<body>
    <header>
        <a href="user.php">User</a>
        <a href="index.php">wstecz</a>
    </header>
    <h1>Nasz system</h1>
    <form method="POST" action="logowanie.php">
        <table>
            <tr>
                <td>Login: <input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Hasło: <input type="password" name="password"></td>
            </tr>
            <tr>
                <td><input type="submit" name="send" /></td>
            </tr>
        </table>
    </form>

    <?php
    if (isset($_GET["utworzCookie"])) {
        setcookie("ciacho", "mniam mniam", time() + $_GET['czas'], "/");
        echo "Cookie set";
    }
    ?>
</body>

</html>
