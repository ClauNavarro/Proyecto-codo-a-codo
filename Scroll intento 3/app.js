var carouselItems = document.querySelectorAll('.carousel-item');
    var carouselButtons = document.querySelectorAll('.carousel-controls button');

    function selectSlide(index) {
    carouselItems.forEach(function(item) {
        item.classList.remove('active');
    });

    carouselButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    carouselItems[index].classList.add('active');
    carouselButtons[index].classList.add('active');
    }


    // La parte del formulario

    function validarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var telefono = document.getElementById('telefono').value;
        var mensaje = document.getElementById('mensaje').value;
    
        // Validar que todos los campos estén completos
        if (nombre === '' || email === '' || telefono === '' || mensaje === '') {
        alert('Por favor, complete todos los campos.');
          return false; // Evita que el formulario se envíe
        }
    
        // Validar formato de correo electrónico
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!email.match(emailRegex)) {
        alert('Ingrese una dirección de correo electrónico válida.');
          return false; // Evita que el formulario se envíe
        }
    
       // Validar formato de número de teléfono (10 o más dígitos)
      var telefonoRegex = /^\d{8,}$/; // Ejemplo: 12345670 (al menos 8 dígitos)
    if (!telefono.match(telefonoRegex)) {
        alert('Ingrese un número de teléfono válido (al menos 8 dígitos sin contar el codigo de area).');
        return false; // Evita que el formulario se envíe
    }
    
        // Otras validaciones y lógica de envío del formulario...
    
        return true; // Permite el envío del formulario si pasa todas las validaciones
    }
