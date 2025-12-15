// ============================================================
// Archivo: main.js
// Proyecto: Conservar Sostenible
// Evidencia: GA7-220501096-AA4-EV03
// Módulo: Frontend
// Autora: Julie Dayanne Bohórquez Chacón
// Fecha: 2025
// Descripción: Funciones principales de interacción del sitio.
// ============================================================


/* ============================================================
   CONFIGURACIÓN DEL SLIDER (Swiper.js)
   Carrusel que muestra imágenes de manera automática,
   con navegación lateral y comportamiento adaptable.
============================================================ */
const swiper = new Swiper(".myswiper", {
  loop: true, // Hace que el carrusel vuelva al inicio al terminar
  autoplay: {
    delay: 3000, // Cambia de imagen cada 3 segundos
    disableOnInteraction: false, // Sigue funcionando aunque el usuario interactúe
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 3, // Número de imágenes visibles
  spaceBetween: 20, // Espacio entre las imágenes
  centeredSlides: true, // Centra el slide activo
  grabCursor: true, // Cambia el cursor indicando que se puede arrastrar
  speed: 800, // Velocidad de transición entre imágenes

  // Responsividad del slider (se adapta al tamaño de pantalla)
  breakpoints: {
    0: {
      slidesPerView: 1, // En celulares muestra 1 imagen
    },
    768: {
      slidesPerView: 2, // En tablets muestra 2
    },
    1024: {
      slidesPerView: 3, // En pantallas grandes muestra 3
    }
  }
});


/* ============================================================
   AMPLIAR IMÁGENES DEL SLIDER (MODAL)
   Permite que al hacer clic en una imagen esta se abra grande.
============================================================ */

// Obtener elementos del modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

// Seleccionar todas las imágenes del carrusel
const images = document.querySelectorAll(".swiper-slide img");

// Abrir el modal al hacer clic en una imagen
images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block"; // Mostrar modal
    modalImg.src = img.src; // Cargar imagen seleccionada
    modalImg.alt = img.alt;
  });
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


/* ============================================================
   MODAL LOGIN / REGISTRO
   Muestra una ventana emergente para iniciar sesión o registrarse
============================================================ */

// Botón del menú para abrir el login
const loginBtn = document.getElementById("login-btn");

// Contenedor del modal
const loginModal = document.getElementById("login-modal");

// Botón cerrar del modal
const loginClose = document.querySelector(".login-close");

// Abrir modal al hacer clic en "Inicio de sesión"
loginBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Evita recargar página
  loginModal.style.display = "flex"; // Muestra el modal
});

// Cerrar modal haciendo clic en la X
loginClose.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Cerrar modal haciendo clic fuera de la ventana
window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});


/* ============================================================
   TABS DEL LOGIN / REGISTRO
   Cambia entre los formularios "Iniciar sesión" y "Registrarse".
============================================================ */

// Botones superiores de las pestañas
const tabBtns = document.querySelectorAll(".tab-btn");

// Formularios asociados a cada pestaña
const tabContents = document.querySelectorAll(".tab-content");

// Evento para cambiar entre pestañas
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    // Quitar "active" de todos los botones y formularios
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    // Activar solo la pestaña seleccionada
    btn.classList.add("active");
    document.getElementById(`${btn.dataset.tab}-form`).classList.add("active");
  });
});


