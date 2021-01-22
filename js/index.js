// start of nav code
$(document).ready(function(){
    $("#btn_signup").click(function(){
      $("#exampleModalCenter").modal({backdrop: "static"});
    });
    $("#btn_login").click(function(){
      $("#exampleModalCenter").modal({backdrop: "static"});
    });

    $("#createaccount").click(function(){
      $("#createaccount").addClass('active');
      $("#login").removeClass('active');

    });

    $("#login").click(function(){
      $("#login").addClass('active');
      $("#createaccount").removeClass('active');

    });
    $("#modal_login").click(function(){
      $("#secondnav").css("display","flex");
      $("#btn_nav").css("display","none");
      var txt=$("#email").val();
      $("#name_navbar").append("Hello "+txt);
      $("#exampleModalCenter .close").click()


    });
});
// end of nav code
// $('body').scrollspy({ target: '#navbar-example' })

(window).scroll(function(){
  
var fixd= $('#navbar-example').offset().top
var windowScroll = $(window).scrollTop()
if(windowScroll > fixd){
  $('#navbar-example').addClass('fixed')
}else{
  $('#navbar-example').removeClass('fixed')
}
});
 