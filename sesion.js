function validateForm() {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;

      // Validación de correo electrónico con expresión regular
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        displayErrorMessage("Correo electrónico no válido");
        return false;
      }

      // Validación de contraseña
      if (password.length < 8) {
        displayErrorMessage("La contraseña debe tener más de 8 caracteres");
        return false;
      }

      // Si todo es válido, se enviará el formulario
      return true;
    }

    function displayErrorMessage(message) {
      var errorMessageElement = document.getElementById('error-message');
      errorMessageElement.innerHTML = message;
    }
