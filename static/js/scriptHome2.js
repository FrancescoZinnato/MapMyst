$(document).ready(function(){
	$('#dropbuilder').on('click', function(e){
  if($('#sceltaBuilder').css("display") == "none"){
    $('#sceltaBuilder').css({
     'display': 'block',
     'left': e.pageX-5+'px',
     'top': e.pageY-5+'px',
     'z-index': '9999'
    })
  }else{
    $('#sceltaBuilder').css({
    'display': 'none',
    'z-index': '-9999'
  })
  }
});

$('#sceltaBuilder').on('mouseleave', function(){
  $('#sceltaBuilder').css({
    'display': 'none',
    'z-index': '-9999'
  })
});
})