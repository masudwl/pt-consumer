const currentDate = new Date(); 
document.getElementById('c-date').innerHTML = currentDate; 

$(function(){
    $.scrollUp();
    $("#main_header").sticky({topSpacing:0});
    $('#main_menu').slicknav();

  });

