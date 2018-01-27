//$(document).ready(function(){
//  var input_field = document.querySelectorAll('.input-group');
//  for (let i = 0; i < input_field.length; i++){
//    input_field[i].addEventListener('focusin', (e) => {
//      if (e.target.type == 'text') {
//        input_field[i].classList.add('active-input'); 
//      }
//    });
//    input_field[i].addEventListener('focusout', (e) => {
//      if(!e.target.value){
//        input/_field[i].classList.remove('active-input');
//      }
//    });
//  }
//});

$(document).ready(function(){
  var input_field = document.querySelectorAll('.input-group');
  for (let i = 0; i < input_field.length; i++){
    input_field[i].addEventListener('focusin', (e) => {
      if (e.target.type == 'text') {
        input_field[i].classList.add('active-input'); 
      }
    });
    input_field[i].addEventListener('focusout', (e) => {
      if(!e.target.value){
        input_field[i].classList.remove('active-input');
      }
    });
  }
});


$(function() {
  $('.dropdown ul li').on('click', function() {
    var label = $(this).parent().parent().children('label');
    label.attr('data-value', $(this).attr('data-value'));
    label.html($(this).html());

    $(this).parent().children('.selected').removeClass('selected');
    $(this).addClass('selected');
  });
});

//$(function() {
//  $('.dropdown').on('click', function() {
//	  $('.dropdown ul li').addClass('select-option');
//	  if($('.dropdown ul li').is('selected')){
//		  $('.dropdown ul li').removeClass('select-option');
//	  }
//  });
//});

//$(function() {
//  $('.form-btn').on('click', function() {
//    
//    $('.form-personal-info').addClass('rem');
//  });
//});
