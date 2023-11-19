// D O M

const welcomeButton = document.querySelector("#bienvenida")
const skillsButton = document.querySelector("#conocimientos")
const projectsButton = document.querySelector("#proyectos")
const contactButton = document.querySelector("#contacto")


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

// FUNCIONES DE BOTONES

const buttonWindowLocation = (boton, ancla) => {
  boton.onclick = () => {
  window.location.hash = ancla
  }
  }
  
  buttonWindowLocation(welcomeButton, "bienvenida")
  buttonWindowLocation(skillsButton, "conocimientos")
  buttonWindowLocation(projectsButton, "proyectos")
  buttonWindowLocation(contactButton, "contacto")