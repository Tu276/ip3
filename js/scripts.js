{
    
}
$('.main').click(function () {
    $(this).children('.hide').slideToggle(1000);
    
    $(this).children('.show').toggle(2000);
  });
  



$(".card").hover(function () {
    $(this).children(".card-1").fadeToggle(1000, "linear");
  });

  


$("button").click(function (getDetails) {
    var client = document.getElementById('nameDetail').value;
    alert(' Dear ' + client + ' Thank you for reaching out. We will get back to you within 24 hours max.' + ' Delani Studio Team ');
    getDetails.preventDefault();
  });