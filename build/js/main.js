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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXJkIHBhcnR5XHJcbiAqL1xyXG4vLz0gLi4vLi4vYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkuanNcclxuXHJcblxyXG4vKlxyXG4gKiBDdXN0b21cclxuICovXHJcbi8vPSBwYXJ0aWFscy9hcHAuanNcclxuXHJcbmZ1bmN0aW9uIGZvcm0oKSB7XHJcblxyXG5cdCQoXCIjbWFpbkxvZ2luXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNtb2RhbExvZ2luXCIpLnRvZ2dsZUNsYXNzKCdfaGlkZGVuJyk7XHJcblx0XHR4ID0gJCgnI0Zvcm1zIC5mb3JtLWxvZ2luJyk7XHJcblx0XHRpbnB1dHMoeCk7XHJcblx0fSk7XHJcblx0JChcIiNtb2RhbENsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNtb2RhbExvZ2luXCIpLnRvZ2dsZUNsYXNzKCdfaGlkZGVuJyk7XHJcblx0XHR4ID0gJCgnI21haW5Gb3JtcyAuZm9ybS1sb2dpbicpO1xyXG5cdFx0aW5wdXRzKHgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cclxuXHQkKFwiI2J1dHRvbkxvZ2luXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNGb3Jtc1wiKS5hdHRyKCdzdGF0ZScsICdpc0xvZ2luJyk7XHJcblx0XHR4ID0gJCgnI0Zvcm1zIC5mb3JtLWxvZ2luJyk7XHJcblx0XHRpbnB1dHMoeCk7XHJcblx0fSk7XHJcblx0JChcIiNidXR0b25SZW1lbWJlcmVkXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNGb3Jtc1wiKS5hdHRyKCdzdGF0ZScsICdpc0xvZ2luJyk7XHJcblx0XHR4ID0gJCgnI0Zvcm1zIC5mb3JtLWxvZ2luJyk7XHJcblx0XHRpbnB1dHMoeCk7XHJcblx0fSk7XHJcblx0JChcIiNidXR0b25TaWdudXBcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiI0Zvcm1zXCIpLmF0dHIoJ3N0YXRlJywgJ2lzU2lnbnVwJyk7XHJcblx0XHR4ID0gJCgnI0Zvcm1zIC5mb3JtLXNpZ251cCcpO1xyXG5cdFx0aW5wdXRzKHgpO1xyXG5cdH0pO1xyXG5cdCQoXCIjYnV0dG9uUmVjb3ZlclwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIjRm9ybXNcIikuYXR0cignc3RhdGUnLCAnaXNSZWNvdmVyJyk7XHJcblx0XHR4ID0gJCgnI0Zvcm1zIC5mb3JtLXJlY292ZXInKTtcclxuXHRcdGlucHV0cyh4KTtcclxuXHR9KTtcclxuXHJcblx0JChcIiNtYWluYnV0dG9uTG9naW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiI21haW5Gb3Jtc1wiKS5hdHRyKCdzdGF0ZScsICdpc0xvZ2luJyk7XHJcblx0XHR4ID0gJCgnI21haW5Gb3JtcyAuZm9ybS1sb2dpbicpO1xyXG5cdFx0aW5wdXRzKHgpO1xyXG5cdH0pO1xyXG5cdCQoXCIjbWFpbmJ1dHRvblJlbWVtYmVyZWRcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiI21haW5Gb3Jtc1wiKS5hdHRyKCdzdGF0ZScsICdpc0xvZ2luJyk7XHJcblx0XHR4ID0gJCgnI21haW5Gb3JtcyAuZm9ybS1sb2dpbicpO1xyXG5cdFx0aW5wdXRzKHgpO1xyXG5cdH0pO1xyXG5cdCQoXCIjbWFpbmJ1dHRvblNpZ251cFwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIjbWFpbkZvcm1zXCIpLmF0dHIoJ3N0YXRlJywgJ2lzU2lnbnVwJyk7XHJcblx0XHR4ID0gJCgnI21haW5Gb3JtcyAuZm9ybS1zaWdudXAnKTtcclxuXHRcdGlucHV0cyh4KTtcclxuXHR9KTtcclxuXHQkKFwiI21haW5idXR0b25SZWNvdmVyXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIiNtYWluRm9ybXNcIikuYXR0cignc3RhdGUnLCAnaXNSZWNvdmVyJyk7XHJcblx0XHR4ID0gJCgnI21haW5Gb3JtcyAuZm9ybS1yZWNvdmVyJyk7XHJcblx0XHRpbnB1dHMoeCk7XHJcblx0fSk7XHJcblxyXG59XHJcbmZ1bmN0aW9uIGlucHV0cyh4KSB7XHJcblx0Y29uc29sZS5sb2coeCk7XHJcblx0eC52YWxpZGF0ZSgpO1xyXG5cdCQoJy5pbnB1dCcsIHgpLm9uKCdrZXl1cCBibHVyJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHgudmFsaWQoKSkge1xyXG5cdFx0XHQkKCcuZm9ybS1zdWJtaXQnLCB4KS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJy5mb3JtLXN1Ym1pdCcsIHgpLnByb3AoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuLy9cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXsgXHJcblx0dmFyIHggPSAkKFwiI21haW5Gb3JtcyAuZm9ybS1sb2dpblwiKTtcclxuXHRpbnB1dHMoeCk7XHJcblx0Zm9ybSgpO1xyXG59KTsiXSwiZmlsZSI6Im1haW4uanMifQ==
