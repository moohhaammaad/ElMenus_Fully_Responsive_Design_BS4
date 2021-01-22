function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function myFunction2() {
  var x = document.getElementById("myTopnav2");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function () {
  $("#btn_signup").click(function () {
    $("#exampleModalCenter").modal({ backdrop: "static" });
  });
  $("#btn_login").click(function () {
    $("#exampleModalCenter").modal({ backdrop: "static" });
  });

  $("#createaccount").click(function () {
    $("#createaccount").addClass("active");
    $("#login").removeClass("active");
  });

  $("#login").click(function () {
    $("#login").addClass("active");
    $("#createaccount").removeClass("active");
  });
  $("#modal_login").click(function () {
    $("#myTopnav").css("display", "block");
    $("#myTopnav2").css("display", "none");
    var txt = $("#email").val();
    $("#name_navbar").append("Hi " + txt + " <i class='fa fa-caret-down'></i>");
    $("#exampleModalCenter .close").click();
  });

  $("#btn_hide").click(function () {
    $("#hide2,#hide3,#hide4,#hide5").toggle(2000);
  });

  $("#changepass").click(function () {
    $("#changepass").addClass("active_btn");
    $("#changeemail").removeClass("active_btn");
    $("#addressbook").removeClass("active_btn");
  });

  $("#changeemail").click(function () {
    $("#changeemail").addClass("active_btn");
    $("#changepass").removeClass("active_btn");
    $("#addressbook").removeClass("active_btn");
  });

  $("#addressbook").click(function () {
    $("#addressbook").addClass("active_btn");
    $("#changepass").removeClass("active_btn");
    $("#changeemail").removeClass("active_btn");
  });

  var modal = document.getElementById("id01");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  $("#cancel-btn").click(function () {
    modal.style.display = "none";

    $("#orderContainer").html("");

    $("#orderContainer").html(
      `
      <div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Well done!</strong> Your order will be canceled shortly. <a href="#" class="alert-link">Click here to discover more restaurants again.</a>.
      </div>
          `
    );
  });

});
