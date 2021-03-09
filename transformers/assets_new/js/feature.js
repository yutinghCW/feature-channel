$(function () {
	$(".header-slider").slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
        prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon icon-right"></i></button>',
	});
    $('.member > .user-btn').click(function(){
        $(this).siblings('.slide-down-block').slideToggle();
    })
});
