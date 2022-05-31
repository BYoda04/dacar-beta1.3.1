<?php require_once './assets/components/nav-top.php' ?>

    </nav>
    <section class="home">

        <div class="row measurer">
            <div class="alert alert-danger align-items-center display" role="alert" id="alert">
                <div>
                    <ion-icon name="warning-outline"></ion-icon>
                    Rellena todos los campos
                </div>
            </div>
            <form class="col-8 needs-validation" action="" method="POST" id="change-password" novalidate>
                <input type="text" class="form-control" style="display: none;" value="@<?php echo $user->getUserName();  ?>" name="userName">
                <div class="mb-3">
                    <label for="lastPassword" class="form-label">Contraseña Actual</label>
                    <input type="password" class="form-control" id="lastPassword" name="lastPassword" required>
                </div>
                <div class="mb-3">
                    <label for="newPassword" class="form-label">Nueva Contraseña</label>
                    <input type="password" class="form-control" id="newPassword" name="newPassword" required>
                </div>
                <div class="mb-3">
                    <label for="repeatPassword" class="form-label">Valida tu Nueva Contraseña</label>
                    <input type="password" class="form-control" id="repeatPassword" name="repeatPassword" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    

<?php require_once './assets/components/footer.php' ?>