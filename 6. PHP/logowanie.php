<?php session_start(); ?>
<?php
require('funkcje.php');

if (isset($_POST["send"])) {
    if ($_POST['name'] == $osoba1->login && $_POST['password'] == $osoba1->haslo) {
        $_SESSION['zalogowanyImie'] = $osoba1->imieNazwisko;
        $_SESSION['zalogowany'] = 1;
        header("Location: user.php");
    } else if ($_POST['name'] == $osoba2->login && $_POST['password'] == $osoba2->haslo) {
        $_SESSION['zalogowanyImie'] = $osoba2->imieNazwisko;
        $_SESSION['zalogowany'] = 1;
        header("Location: user.php");
    } else {
        $_SESSION['zalogowanyImie'] = '';
        $_SESSION['zalogowany'] = 0;
        header("Location: index.php");
    }
}
