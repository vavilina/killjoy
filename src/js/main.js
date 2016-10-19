/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js

function form() {

	$("#mainLogin").click(function() {
		$("#modalLogin").toggleClass('_hidden');
		x = $('#Forms .form-login');
		inputs(x);
	});
	$("#modalClose").click(function() {
		$("#modalLogin").toggleClass('_hidden');
		x = $('#mainForms .form-login');
		inputs(x);
	});
	

	$("#buttonLogin").click(function() {
		$("#Forms").attr('state', 'isLogin');
		x = $('#Forms .form-login');
		inputs(x);
	});
	$("#buttonRemembered").click(function() {
		$("#Forms").attr('state', 'isLogin');
		x = $('#Forms .form-login');
		inputs(x);
	});
	$("#buttonSignup").click(function() {
		$("#Forms").attr('state', 'isSignup');
		x = $('#Forms .form-signup');
		inputs(x);
	});
	$("#buttonRecover").click(function() {
		$("#Forms").attr('state', 'isRecover');
		x = $('#Forms .form-recover');
		inputs(x);
	});

	$("#mainbuttonLogin").click(function() {
		$("#mainForms").attr('state', 'isLogin');
		x = $('#mainForms .form-login');
		inputs(x);
	});
	$("#mainbuttonRemembered").click(function() {
		$("#mainForms").attr('state', 'isLogin');
		x = $('#mainForms .form-login');
		inputs(x);
	});
	$("#mainbuttonSignup").click(function() {
		$("#mainForms").attr('state', 'isSignup');
		x = $('#mainForms .form-signup');
		inputs(x);
	});
	$("#mainbuttonRecover").click(function() {
		$("#mainForms").attr('state', 'isRecover');
		x = $('#mainForms .form-recover');
		inputs(x);
	});

}
function inputs(x) {
	console.log(x);
	x.validate();
	$('.input', x).on('keyup blur', function () {
		if (x.valid()) {
			$('.form-submit', x).prop('disabled', false);
		} else {
			$('.form-submit', x).prop('disabled', 'disabled');
		}
	});
}
//
$(document).ready(function(){ 
	var x = $("#mainForms .form-login");
	inputs(x);
	form();
});