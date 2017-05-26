function test() {
	document.getElementsByTagName('p')[0].style.color="#00f3f3";
}
$(document).ready(function() {
	$('.block').on('click', function() {
		$(this).addClass('active');
	});
});