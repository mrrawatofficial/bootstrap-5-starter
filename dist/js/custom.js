function pageTransition() {
	var tl = gsap.timeline();

	tl.to(".transition li", {
		duration: 0.5,
		scaleX: 1,
		transformOrigin: "top left",
	});
	tl.to(".transition li", {
		duration: 0.5,
		scaleX: 0,
		transformOrigin: "top right",
		delay: 0.1,
	});
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}

barba.init({
	sync: true,
	transitions: [
		{
			async leave(data) {
				const done = this.async();
				pageTransition();
				await delay(500);
				done();
			},
		},
	],
});
