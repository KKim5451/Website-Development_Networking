$(document).ready(function() { //slick function
	$(".fade").slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		fade: true,
	});

	$("#jdom a").click(function() { //show more or less function
		console.log($(this).prev());
		$(this).prev().toggleClass("hide");
		if ($(this).prev().attr("class") != "hide") {
			$(this).text('Show less');
		} else {
			$(this).text('Show more');
		}
	});
});