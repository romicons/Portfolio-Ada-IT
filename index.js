// FUNCIÓN PARA DESPLEGAR Y CERRAR EL MENÚ MOBILE

var bOpen = true;

$(function() {
  $('.nav_mobile').prepend('<div class="top"/>' +
                     '<div class="mid"/>' +
                     '<div class="bot"/>' );
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
    bOpen = !bOpen; // cambiar el estado del menu
    $(".hamb").toggleClass("active"); // remover la clase activa de la hamburguesa
    document.querySelector(".nav_mobile").classList.remove("nav_animation");
    var targetSectionId = $(this).attr('href');
    var t = 0;
    $(".nav_container ul").animate({ top: "23%" });
    $(".nav_container ul > li").each(function(){
      $(this).delay(t += Math.random() * 111).fadeOut().animate({ margin: "1%" });
    });
    $(".top, .mid, .bot").delay(555).animate({ height: "0", top: "0" });
    $("main, footer").delay(777).fadeIn().removeClass("grow").addClass("grow");
    setTimeout(function() {
      $('html, body').animate({
        scrollTop: $(targetSectionId).offset().top
      }, 'slow');
    }, 1200); 
  }
});

// FUNCIÓN DE ANIMACIÓN DEL NAV MOBILE Y SUS BOTONES

function effect(doOpen, barsTiming) {
  $(".hamb").toggleClass("active");
  if (doOpen) {
      $("main, footer").css('pointer-events', 'none').fadeOut();

      var top = -25;
      $(".top, .mid, .bot").each(function (n) {
          $(this).fadeIn().animate({ height: "50.333%", top: `${top}%` }, barsTiming[n], 'easeOutBounce');
          top += 50;
      });

      var t = 0;
      $(".nav_container ul").removeAttr("style").delay(333).animate({ top: "37%" });
      $(".nav_container ul > li").removeAttr("style").each(function () {
          $(this).delay(111 + (t += Math.random() * (t / 3 + 111))).fadeIn().animate({ margin: "7%" });
      });

      setTimeout(function () {
          $("main, footer").css('pointer-events', 'auto');
      }, 1200);
  } else {
      var t = 0;
      $(".nav_container ul").animate({ top: "23%" });
      $(".nav_container ul > li").each(function () {
          $(this).delay(t += Math.random() * 111).fadeOut().animate({ margin: "1%" });
      });
      $(".top,.mid,.bot").delay(555).animate({ height: "0", top: "0" });
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

  // FUNCIÓN PARA QUE AL DAR ERROR DURANTE EL ENVÍO SE DESPLIEGUEN LOS CAMPOS DE ERROR
  
  function formularioEsValido() {
    var nameInput = document.getElementById('name');
    var lastnameInput = document.getElementById('lastname');
    var emailInput = document.getElementById('email');
    var textareaInput = document.getElementById('textarea');

    ocultarMensajeError(nameInput);
    ocultarMensajeError(lastnameInput);
    ocultarMensajeError(emailInput);
    ocultarMensajeError(textareaInput);

    var esValido = true;

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

// FUNCIÓN DE MOSTRAR U OCULTAR LOS MENSAJES DE ERROR 

  function mostrarMensajeError(campo, mensaje) {
    var mensajeError = document.getElementById(`${campo.id}-error`);
    mensajeError.textContent = mensaje;
  }

  function ocultarMensajeError(campo) {
    var mensajeError = document.getElementById(`${campo.id}-error`);
    mensajeError.textContent = "";
  }
});