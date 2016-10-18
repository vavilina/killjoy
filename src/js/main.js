/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js

function form() {

	var x = $('#mainForms .form-login');
		console.log(x);
		inputs(x);
	$("#mainLogin").click(function() {
		$("#modalLogin").toggleClass('_hidden');
		x = $('#Forms .form-login');
	});
	$("#modalClose").click(function() {
		$("#modalLogin").toggleClass('_hidden');
		x = $('#mainForms .form-login');
	});
	

	$("#buttonLogin").click(function() {
		$("#Forms").attr('state', 'isLogin');
		x = $('#Forms .form-login');
		inputs(x);
		console.log(x);
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
		console.log(x);
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
		console.log(x);
	});
	$("#mainbuttonRecover").click(function() {
		$("#mainForms").attr('state', 'isRecover');
		x = $('#mainForms .form-recover');
		inputs(x);
	});

}
function inputs(x) {
	$('.form-input input', x).keyup(function() {

		var empty = false;
		$('.form-input input', x).each(function() {
			if ($(this).val().length == 0) {
				empty = true;
			}
		});

		if (empty) {
			$('.form-submit', x).prop('disabled', true);
		} else {
			$('.form-submit', x).prop('disabled', false);
		}
	});
}

$(document).ready(function(){
	form();
	inputs();
});