$(document).ready(function(){
  $("#designIcon").click(function(){
      $(".design-a").hide().toggle();
      $("#designIcon").slideUp();    
          });
  $(".design-a").click(function(){
      $("#designIcon").slideDown();
      $(".design-a").hide();
  })
  
  
  $("#devIcon").click(function(){
      $(".design-b").hide().toggle();
      $("#devIcon").slideUp();    
          });
      $(".design-b").click(function(){
          $("#devIcon").slideDown();
          $(".design-b").hide();
      });
  
 
  $("#productIcon").click(function(){
      $(".design-c").hide().toggle();
      $("#productIcon").slideUp();    
          });
      $(".design-c").click(function(){
          $("#productIcon").slideDown();
          $(".design-c").hide();
      });
});  


$(document).ready(function(){
  $('.card0').mouseover(function (){
      $('.project').show();
  }); 
  $('.card0').mouseout(function(){
      $('.project').hide();
  });

  $('.card1').mouseover(function (){
      $('.project2').show();
  }); 
  $('.card1').mouseout(function(){
      $('.project2').hide();
  });

  $('.card2').mouseover(function (){
      $('.project3').show();
  }); 
  $('.card2').mouseout(function(){
      $('.project3').hide();
  });

  $('.card3').mouseover(function (){
      $('.project4').show();
  }); 
  $('.card3').mouseout(function(){
      $('.project4').hide();
  });

  $('.card4').mouseover(function (){
      $('.project5').show();
  }); 
  $('.card4').mouseout(function(){
      $('.project5').hide();
  });

  $('.card5').mouseover(function (){
      $('.project6').show();
  }); 
  $('.card5').mouseout(function(){
      $('.project6').hide();
  });

  $('.card6').mouseover(function (){
      $('.project7').show();
  }); 
  $('.card6').mouseout(function(){
      $('.project7').hide();
  });
  
  $('.card7').mouseover(function (){
      $('.project8').show();
  }); 
  $('.card7').mouseout(function(){
      $('.project8').hide();
  });
});

function contact(form){
  var name = document.forms["contacts"]["name"].value;
  var email = document.forms["contacts"]["email"].value;
  var message = document.forms["contacts"]["message"].value;
  alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
  }

