
// Throw pieces

TweenMax.staggerTo('.piece', 2.5, {
	cycle: {
		x: random,
		y: random	
	},
	delay: .5,
	ease: Elastic.easeInOut
}, .03);

// Draggable

var s = 25;

Draggable.create('.piece', {
	throwProps: true,
	snap: {
		x: function(endValue) {
			return Math.round(endValue / s) * s;
		},
		y: function(endValue) {
			return Math.round(endValue / s) * s;
		}
	}
});

// Helpers

function random() {
	return (Math.random() * 4 - 2) * 60;
}

// Balloon Animation

 /* 
 / If you experience any performance issues you can comment out the code below (read the comments for more info)
*/

TweenMax.to('#balloon-innards', 4, {
	attr: {
		transform: 'matrix(1, 0, 0, 1, 0, 60)'
	},
	repeat: -1,
	yoyo: true,
	ease: Power1.easeInOut
});