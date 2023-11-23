// FUNCIÓN PARA INTERCAMBIAR ENTRE EL MODO OSCURO Y EL MODO DÍA

document.addEventListener('DOMContentLoaded', function () {
  var buttonSun = document.getElementById('button_sun');
  var body = document.body;

  var isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    body.classList.add('dark-mode');
  }
  buttonSun.addEventListener('click', function () {
    buttonSun.classList.toggle('animate');
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    body.classList.toggle('dark-mode');
  });
});

// FUNCIÓN PARA DESPLEGAR Y CERRAR EL MENÚ MOBILE

var bOpen = true;

$(function() {
  $('.hamb').click(function(){
    effect(bOpen,["slow","slow","slow"]);
    bOpen = !bOpen;
    if (!bOpen) {
      document.querySelector(".nav_mobile").classList.add("nav_animation")
    }
    setTimeout(() => {
      if (bOpen) {
        document.querySelector(".nav_mobile").classList.remove("nav_animation")
      }
    }, 1500)
  });
});

// FUNCIÓN CERRAR EL MENÚ MOBILE AL ELEGIR UNA SECCIÓN

$('.nav-item').click(function() {
  if (!bOpen) {
    bOpen = !bOpen;
    $(".hamb").toggleClass("active");

    var t = 0;
    var targetSectionId = $(this).attr('href');

    $(".nav_container ul > li").each(function() {
      $(this).delay(t += Math.random() * 50).fadeOut().animate({ margin: "1%" });
    });
    setTimeout(function() {
      $(".nav_container").animate({ height: "0" }, 100, function() {
        document.querySelector(".nav_mobile").classList.remove("nav_animation");
        $("main, footer").delay(300).fadeIn().removeClass("grow").addClass("grow");
        setTimeout(function() {
          $('html, body').animate({
            scrollTop: $(targetSectionId).offset().top
          }, 400);
        }, 500);
      });
    }, t + 100);
  }
});
// FUNCIÓN DE MOSTRAR U OCULTAR LOS MENSAJES DE ERROR
function mostrarMensajeError(campo, mensaje) {
    var mensajeError = document.getElementById(`${campo.id}-error`);
    mensajeError.textContent = mensaje;
  };

function ocultarMensajeError(campo) {
    var mensajeError = document.getElementById(`${campo.id}-error`);
    mensajeError.textContent = "";
  };

// FUNCIÓN PARA QUE AL DAR ERROR DURANTE EL ENVÍO SE DESPLIEGUEN LOS CAMPOS DE ERROR
function formularioEsValido() {
    let nameInput = document.getElementById('name');
    let lastnameInput = document.getElementById('lastname');
    let emailInput = document.getElementById('email');
    let textareaInput = document.getElementById('textarea');

    ocultarMensajeError(nameInput);
    ocultarMensajeError(lastnameInput);
    ocultarMensajeError(emailInput);
    ocultarMensajeError(textareaInput);

    let esValido = true;

    if (!nameInput.checkValidity()) {
      mostrarMensajeError(nameInput, "Por favor, ingresa tu nombre.");
      esValido = false;
    }

    if (!lastnameInput.checkValidity()) {
      mostrarMensajeError(lastnameInput, "Por favor, ingresa tu apellido.");
      esValido = false;
    }

    if (!emailInput.checkValidity()) {
      mostrarMensajeError(emailInput, "Por favor, ingresa un correo electrónico válido.");
      esValido = false;
    }

    if (!textareaInput.checkValidity()) {
      mostrarMensajeError(textareaInput, "Por favor, ingresa tu mensaje.");
      esValido = false;
    }

    return esValido;
  }


// FUNCIÓN DE ANIMACIÓN DEL NAV MOBILE Y SUS BOTONES

function effect(doOpen, barsTiming) {
  $(".hamb").toggleClass("active");
  if (doOpen) {
      $("main, footer").css('pointer-events', 'none').fadeOut();
      var t = 0;
      $(".nav_container").removeAttr("style").delay(333).animate({ height: "100vh" });
      $(".nav_container ul > li").removeAttr("style").each(function () {
          $(this).delay(111 + (t += Math.random() * (t / 3 + 111))).fadeIn().animate({ margin: "10%" });
      });
      setTimeout(function () {
          $("main, footer").css('pointer-events', 'auto');
      }, 1500);
  } else {
      var t = 0;
      $(".nav_container").animate({ height: "0" });
      $(".nav_container ul > li").each(function () {
          $(this).delay(t += Math.random() * 111).fadeOut().animate;
      });
      $("main, footer").delay(777).fadeIn().removeClass("grow").addClass("grow");
  }
}

// FUNCIÓN VENTANA MODAL AL VALIDAR EL FORMULARIO

var modal = document.getElementById("modal_window");
var boton = document.getElementById("submit_button");
var span = document.getElementsByClassName("close_button")[0];

boton.addEventListener("click", function (event) {
  if (formularioEsValido()) {
    modal.style.display = "block";
  } else {
    event.preventDefault();
  }
});

span.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById("modal_window");
  var boton = document.getElementById("submit_button");
  var span = document.getElementsByClassName("close_button")[0];

  boton.addEventListener("click", function (event) {
    if (formularioEsValido()) {
      modal.style.display = "block";
    } else {
      event.preventDefault();
    }
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  var campos = document.querySelectorAll("#name, #lastname, #email, #textarea");
  campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
      ocultarMensajeError(campo);
    });
  });
});
