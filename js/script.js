$(document).ready(function(){
	$("#login-create").hide();
	$("#form3").hide();
	
    $("#loginInsert").click(function(){
        $("#form1").hide();
		$("#form2").fadeIn("slow");
		$("#form3").hide();
    });
	
    $("#loginUpdate").click(function(){
        $("#form1").hide();
		$("#form2").hide();
		$("#form3").fadeIn("slow");
    });
	
    $(".voltar").click(function(){
        $("#form1").fadeIn("slow");
		$("#form2").hide();
		$("#form3").hide();
    });
});