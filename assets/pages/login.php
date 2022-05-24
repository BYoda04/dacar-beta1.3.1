<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--STYLES LOGIN DACARTELECOM-->
    <link rel="stylesheet" href="./assets/styles/styles-login.css">
    <!-- CSS BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>DACARTELECOM</title>
</head>
<body>
    <div class='container-fluid justify-content-center align-items-center father'>
        <form class="col-md-4" action="" method="POST">
            <div class="mb-3 row justify-content-center align-items-center">
                <img src="./assets/img/dacartelecom-logo.webp" alt="dacartelecom">
            </div>
            <div class="mb-3 row justify-content-center align-items-center">
                <div class="col-10">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" name="username">
                </div>
            </div>
            <div class="mb-3 row justify-content-center align-items-center">
                <div class="col-10">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
            </div>
            <div class="mb-3 row justify-content-center align-items-center">
                <div class="col-3 justify-content-center align-items-center">
                    <button type="submit" class="btn btn-primary">Iniciar</button>
                </div>
            </div>
            <div class="mb-3 row justify-content-center align-items-center">
                <div class="col-10">
                    <?php
                        if(isset($errorLogin)){
                            echo $errorLogin;
                        }
                    ?>
                </div>
            </div>
        </form>
    </div>
</body>

    <!-- JavaScript BOOTSTRAP -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</html>