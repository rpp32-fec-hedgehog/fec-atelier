// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN');
});

// Put your campus prefix here
window.CAMPUS = 'hr-rpp32';
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader('Authorization', 'GITHUB_API_TOKEN');
// });

module.exports = {
  API_KEY: 'GITHUB_API_TOKEN'
}
