var resturl = 'https://gateway.marvel.com',
    publicApiKey = '9ea47c833597c96fb78db63c9cd1b398',
    ts = function() { return new Date().getTime(); };
function Hero() {

}


$(document).ready( function () {
  $('.header-bar .title').addClass('animate-ready');
  $('.get-heroes').on('click', function () {
    var tsNow = ts();
    $.get(resturl+'/v1/public/characters?apikey='+publicApiKey+'&ts='+tsNow+'&hash='+$.md5(tsNow+publicApiKey))
  });
  $('.get-heroes').on('click', function () {
    console.log('heroes')
  });
})
