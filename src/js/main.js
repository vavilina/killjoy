/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js


/*
 * Custom
 */
//= partials/app.js

function filter() {
	$(".button-filter").click(function() {
		$("#picture").attr('filter', $(this).attr("id"));
	});
}