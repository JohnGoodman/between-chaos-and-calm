$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			.fromTo(".section.two",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
			.fromTo(".section.three", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
			.fromTo(".section.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: ".sections",
				triggerHook: "onLeave",
				duration: "300%"
			})
			.setPin(".sections")
			.setTween(wipeAnimation)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});