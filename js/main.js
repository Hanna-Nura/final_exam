$(document).ready(function () {
  $("#subscribe-button").on("click", function () {
    $(".subscribe-popup").css("display", "flex").hide().fadeIn();
  });
  $(".subscribe-popup__overlay").on("click", function () {
    $(".subscribe-popup").fadeOut();
  });
});

// test on main page

$(document).ready(function () {
  $("#test-form").on("submit", function () {
    const questions = $(this).serializeArray();
    let result = 0;
    questions.forEach(function (question) {
      if (question.name === "question1" && question.value === "C") {
        result = result + 1;
      }

      if (question.name === "question2" && question.value === "B") {
        result = result + 1;
      }

      if (question.name === "question3" && question.value === "B") {
        result = result + 1;
      }

      if (question.name === "question4" && question.value === "B") {
        result = result + 1;
      }

      if (question.name === "question5" && question.value === "B") {
        result = result + 1;
      }

      if (question.name === "question6" && question.value === "D") {
        result = result + 2;
      }

      if (question.name === "question7" && question.value === "A") {
        result = result + 2;
      }

      if (question.name === "question8" && question.value === "D") {
        result = result + 1;
      }

      if (question.name === "question9" && question.value === "A") {
        result = result + 2;
      }

      if (question.name === "question10" && question.value === "A") {
        result = result + 1;
      }

      if (question.name === "question11" && question.value === "D") {
        result = result + 2;
      }

      if (question.name === "question12" && question.value === "C") {
        result = result + 2;
      }

      if (question.name === "question13" && question.value === "D") {
        result = result + 3;
      }

      if (question.name === "question14" && question.value === "D") {
        result = result + 3;
      }

      if (question.name === "question15" && question.value === "D") {
        result = result + 3;
      }

      if (question.name === "question16" && question.value === "C") {
        result = result + 3;
      }
      if (question.name === "question17" && question.value === "A") {
        result = result + 2;
      }

      if (question.name === "question18" && question.value === "B") {
        result = result + 3;
      }

      if (question.name === "question19" && question.value === "C") {
        result = result + 3;
      }

      if (question.name === "question20" && question.value === "B") {
        result = result + 3;
      }
    });
    let level = "";
    if (result < 10) {
      level = "Elementary";
    } else if (result < 20) {
      level = "Pre-Intermediate/Intermediate";
    } else if (result < 30) {
      level = "Intermediate/Upper-Intermediate";
    } else if (result < 35) {
      level = "Upper-Intermediate/Advanced";
    } else {
      level = "Advanced";
    }

    alert("Your level is " + level);

    $(this)[0].reset();
    return false;
  });
});

$(document).ready(function () {
  $("#vocabulary-test").on("submit", function () {
    const questions = $(this).serializeArray();
    let result = 0;
    questions.forEach(function (question) {
      if (
        question.name === "answer1" &&
        question.value.toLowerCase() === "exploring"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer2" &&
        question.value.toLowerCase() === "sightseeing"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer3" &&
        question.value.toLowerCase() === "skyscraper"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer4" &&
        question.value.toLowerCase() === "icon"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer5" &&
        question.value.toLowerCase() === "featured"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer6" &&
        question.value.toLowerCase() === "granted"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer7" &&
        question.value.toLowerCase() === "included"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer8" &&
        question.value.toLowerCase() === "entire"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer9" &&
        question.value.toLowerCase() === "skyline"
      ) {
        result = result + 1;
      }

      if (
        question.name === "answer10" &&
        question.value.toLowerCase() === "landmarks"
      ) {
        result = result + 1;
      }
    });
    alert(
      "You passed the test with the following result: " +
        (result / 10) * 100 +
        "%"
    );

    $(this)[0].reset();
    return false;
  });
});

// burger menu

$(document).ready(function () {
  $(".burger-menu").on("click", function () {
    $(".mobile-menu").fadeIn();
  });
  $(".mobile-menu__close").on("click", function () {
    $(".mobile-menu").fadeOut();
  });
});
