var resturl = 'https://gateway.marvel.com',
    publicApiKey = '9ea47c833597c96fb78db63c9cd1b398';


$(document).ready( function () {
  $('.header-bar .title').addClass('animate-ready');
  $('.get-heroes').on('click', function () {
    var tsNow = new Date().getTime();
    $.get(resturl+'/v1/public/characters?apikey='+publicApiKey+'&ts='+tsNow+'&hash='+$.md5(tsNow+publicApiKey+'bcbfcbd6dd943cc121715ddc01a4468bba140d09'))
  });
  $('.get-heroes').on('click', function () {
    console.log('heroes')
  });
})
