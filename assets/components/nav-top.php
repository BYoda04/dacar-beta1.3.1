<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--STYLES Global-->
    <link rel="stylesheet" href="./assets/styles/global.css">
    <!--STYLES NAV TOP-->
    <link rel="stylesheet" href="./assets/styles/styles-nav-top.css">
    <!--STYLES HOME-->
    <link rel="stylesheet" href="./assets/styles/home.css">
    <!--STYLES SETTINGS-->
    <link rel="stylesheet" href="./assets/styles/settings.css">
    <!--STYLES ACCOUNT-->
    <link rel="stylesheet" href="./assets/styles/account.css">
    <!--STYLES DATA-->
    <link rel="stylesheet" href="./assets/styles/data.css">
    <!--STYLES VIEW-->
    <link rel="stylesheet" href="./assets/styles/view.css">
    <!-- CSS BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <!--BOOTSTRAP ICONS-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <?php include_once './assets/includes/user.php'; ?>
    <title>Document</title>
</head>
<body>
    <nav class="navbar fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom"></a>
            <button class="navbar-toggler btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <?php
                            if ($user->getRol() !== 3) {
                                echo '<li class="nav-item">
                                <form class="col-md-4" action="" method="POST">
                                    <input type="number" class="form-control" name="section" style="display: none;" value="1">
                                    <button type="submit" class="nav-link">Inicio</button>
                                </form>
                            </li>'; 
                            } else {
                                     
                            }
                        ?>
                        <?php
                            if ($user->getRol() !== 3) {
                                echo '<li class="nav-item">
                                <form class="col-md-4" action="" method="POST">
                                    <input type="number" class="form-control" name="section" style="display: none;" value="2">
                                    <button type="submit" class="nav-link">Datos</button>
                                </form>
                            </li>'; 
                            } else {
                                     
                            }
                        ?>
                        <?php
                            if ($user->getRol() !== 1) {
                                
                            } else {
                                echo '<li class="nav-item">
                                <form class="col-md-4" action="" method="POST">
                                    <input type="number" class="form-control" name="section" style="display: none;" value="3">
                                    <button type="submit" class="nav-link">Cuentas</button>
                                </form>
                            </li>';      
                            } 
                        ?>
                        <?php
                            if ($user->getRol() !== 3) {
                                echo '<li class="nav-item">
                                <form class="col-md-4" action="" method="POST">
                                    <input type="number" class="form-control" name="section" style="display: none;" value="4">
                                    <button type="submit" class="nav-link">Ajustes</button>
                                </form>
                            </li>'; 
                            } else {
                                     
                            }
                        ?>
                        <li class="nav-item">
                            <a class="nav-link" href="./assets/includes/logout.php">salir</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>