// Translation

var translator = new Translator({
  persist: false,
  languages: ["de", "en", "es"],
  defaultLanguage: "en",
  detectLanguage: true,
  filesLocation: "/i18n",
});

translator.load();

function toDeutsch(event) {
  translator.load("de");
}

function toEnglish(event) {
  translator.load("en");
}

function toEspanhol(event) {
  translator.load("es");
}

// Date Picker
$(document).ready(function () {
  $("#daterange").daterangepicker(
    {
      startDate: moment().add(10, "days"),
      endDate: moment().add(40, "days"),
      minDate: moment(),
      maxYear: parseInt(moment().format("YYYY"), 10) + 1,
    },
    function (start, end, label) {}
  );
});

// Header Scroll
window.onscroll = function () {
  scrollFunction();
  changeColor();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "80px";
  } else {
    document.getElementById("header").style.height = "150px";
  }
}

function changeColor() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor =
      "rgba(63, 184, 175, 0.85)";
    document.getElementById("header").style.marginTop = "0";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
    document.getElementById("header").style.marginTop = "20px";
  }
}

// Mobile Navigation
$("#openNav").on("click", function () {
  $("#mobileNav").css("width", "100%");
});

$("#closeNav").on("click", function () {
  $("#mobileNav").css("width", "0%");
});

$("#mobilelinkabout").on("click", function () {
  $("#mobileNav").css("width", "0%");
});

$("#mobilelinksurroundings").on("click", function () {
  $("#mobileNav").css("width", "0%");
});

$("#mobilelinkcontact").on("click", function () {
  $("#mobileNav").css("width", "0%");
});
