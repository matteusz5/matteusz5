// script.js - JavaScript for Interactive Learning Platform

function loadModule(moduleUrl) {
  $('#module-content').load(moduleUrl, function(response, status, xhr) {
    if (status == "error") {
      $('#module-content').html("<p>Error loading module: " + xhr.status + " " + xhr.statusText + "</p>");
    } else {
      $('#module-content').removeClass('hidden');
      $('#quiz-section').removeClass('hidden');
    }
  });
}

function toggleTheme() {
  const currentTheme = $('body').css('background-color');
  if (currentTheme === 'rgb(43, 43, 43)') { // Dark mode
    $('body').css({ background: '#ffffff', color: '#2B2B2B' });
    $('.nav-bar').css({ background: '#f3f3f3', color: '#2B2B2B' });
    $('.module-container').css({ background: '#f9f9f9' });
    $('.theme-toggle').css({ color: '#2B2B2B' });
  } else { // Light mode
    $('body').css({ background: '#2B2B2B', color: '#f3f3f3' });
    $('.nav-bar').css({ background: '#1F4E79', color: '#ffffff' });
    $('.module-container').css({ background: '#1F1F1F' });
    $('.theme-toggle').css({ color: '#ffffff' });
  }
}

function checkQuizAnswer() {
  const selectedOption = $('input[name="question1"]:checked').val();
  if (selectedOption == "1") {
    alert("Correct! Track Changes is used to track who made changes to a document.");
  } else {
    alert("Incorrect. Please try again.");
  }
}
