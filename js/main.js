$(document).ready(function () {
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
});
