// Save actual config file as a .env

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN');
});

// Put your campus prefix here
window.CAMPUS = 'hr-rpp';
