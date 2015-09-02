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

// videos
(function () {
	var sl = $('.js-videos');
	if (sl.length) {
		sl.slick({
			dots: true,
			arrows: false
		});
	};
}());

// select
(function () {
	var select = $('.js-select');
	if (select.length) {
		select.each(function () {
			var _this = $(this);
			_this.on('change', function () {
			    var optionSelected = _this.find('option:selected').text();
			    _this.next().html(optionSelected);
			    _this.parent().addClass('is-active');
			});
		});
	};
}());

// search
(function () {
	var btn = $('.js-btn-search'),
		search = $('.js-search');
	btn.on('click', function () {
		search.slideToggle();
		return false;
	});
}());

// search
(function () {
	var btn = $('.js-category');
	btn.on('click', function () {
		var _this = $(this);
		_this.toggleClass('is-active');
		_this.next().slideToggle();
		return false;
	});
}());
	
});