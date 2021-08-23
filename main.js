$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	$(".scroll-top").click(function () {
		$("html, body").animate({
			scrollTop: 0,
		}, 100);
		return false;
	});

});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() < 99) {
			$(".scroll-btn").fadeIn();
		} else {
			$(".scroll-btn").fadeOut();
		}
	});
});

$(document).ready(function () {
	$(".menu-toggler").on("click", function () {
		$(this).toggleClass("open");
		$(".top-nav").toggleClass("open");

		if (this.classList.contains("open")) {
			console.log("a")
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "scroll";
		}
	});

	$(".top-nav .nav-link").on("click", function () {
		$(".menu-toggler").removeClass("open");
		$(".top-nav").removeClass("open");
	});

	$("nav a[href*=\"#\"]").on("click", function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 100,

		});

		$("#up").on("click", function () {
			$("html, body").animate({
				scrollTop: 0,
			}, 2000);

		});
		AOS.init({
			easing: "ease",
			duration: 1800,
		});
	});
});
