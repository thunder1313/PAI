<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset="UTF-8" />
</head>

<body>
    <header> <a href="user.php">User</a></header>
    <h1>Nasz system</h1>
    <form method="POST" action="logowanie.php">
        <table>
            <tr>
                <td>Login: <input type="text" name="name"></td>
            </tr>
            <tr>
                <td>Password: <input type="password" name="password"></td>
            </tr>
            <tr>
                <td><input type="submit" name="send" value="Log in"/></td>
            </tr>
        </table>
    </form>

    <h2>Create cookie:</h2>
    <form method="GET" action="cookie.php">
        <input type="number" name="czas">
        <input type="submit" name="utworzCookie" value="Create cookie">
    </form>


    <?php
    if (isset($_POST["wyloguj"])) {
        $_SESSION['zalogowanyImie'] = '';
        $_SESSION['zalogowany'] = 0;
    }
    ?>
    <h2>Created cookie:</h2>
    <?php
    if (isset($_COOKIE['ciacho'])) {
        echo $_COOKIE['ciacho'];
    }
    ?>
</body>

</html>
