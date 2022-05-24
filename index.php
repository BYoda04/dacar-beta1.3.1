
<?php

include_once 'assets/includes/user.php';
include_once 'assets/includes/user_session.php';

$userSession = new UserSession();
$user = new User();

if(isset($_SESSION['user'])){
    //echo "Hay sesión";
    $user->setUser($userSession->getCurrentUser());
    if(isset($_POST['section'])){
        $section = $_POST['section'];
        if ($section == 4) {
            include_once 'assets/pages/settings.php';
        }else  if ($section == 3) {
            if ($user->getRol() == 1) {
                include_once 'assets/pages/account.php';
            } else {
                include_once 'assets/pages/home.php';
            }
        } else if ($section == 2) {
            include_once 'assets/pages/data.php';
        } elseif ($section == 1) {
            include_once 'assets/pages/home.php';
        }
    } else {
        include_once 'assets/pages/home.php';
    }
    /* header("location:./index-graphics.php"); */
}else if(isset($_POST['username']) && isset($_POST['password'])){
    //echo "Validación de login";

    $userForm = $_POST['username'];
    $passForm = $_POST['password'];

    if($user->userExists($userForm, $passForm)){
        //echo "usuario validado";
        $userSession->setCurrentUser($userForm);
        $user->setUser($userForm);

        if ($user->getRol() > 1) {
            include_once 'assets/pages/home-sup.php';
        } else {
            include_once 'assets/pages/home.php';
        }
        
        /* header("location:./index-graphics.php"); */
        /* include_once 'rol-prueba.php';  */
    }else{
        //echo "nombre de usuario y/o password incorrecto";
        $errorLogin = "Nombre de usuario y/o password es incorrecto";
        include_once 'assets/pages/login.php';
    }

}else{
    //echo "Login";
    include_once 'assets/pages/login.php';
}


?>