head.ready(function() {

// slider
(function () {
	var sl = $('.js-sl');
	if (sl.length) {
		sl.slick({
			rows: 2,
			slidesPerRow: 4,
			slidesToShow: 1,
			arrows: false,
			dots: true
		});
	};
}());

// slider
(function () {
	var sl = $('.js-slider');
	if (sl.length) {
		sl.slick({
			slidesToShow: 5
		});
	};
}());
	
});