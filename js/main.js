$(document).ready(function () {
  //Слайдер
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    keyboard: {
      enabled: true,
    },

    effect: "coverflow",
  });

  var reviewSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  //Модальное окно
  var menuButton = $(".menu-button");

  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialogue = $(".modal__dialogue");

    modalOverlay.addClass("modal__overlay--visible");
    modalDialogue.addClass("modal__dialogue--visible");
  }

  function closeModal(event) {
    var modalOverlay = $(".modal__overlay");
    var modalDialogue = $(".modal__dialogue");

    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialogue.removeClass("modal__dialogue--visible");
  }

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  //Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is required",
        },
        search: {
          required: "Please enter information for search",
        },
      },
    });
  });

  AOS.init();
});
