function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var startPos = window.pageYOffset;
    var startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }

        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPos, targetPos, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) {
            requestAnimationFrame(animationScroll);
        }
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}

const spotlightScroll = document.querySelector('.spotlight-scroll');
const wwaScroll = document.querySelector('.wwa-scroll');
const wwdScroll = document.querySelector('.wwd-scroll');
const wwdiScroll = document.querySelector('.wwdi-scroll');

spotlightScroll.addEventListener('click', function() {
    smoothScroll('.wwa-container', 1000);
});

wwaScroll.addEventListener('click', function() {
    smoothScroll('.wwd-container', 1000);
});

wwdScroll.addEventListener('click', function() {
    smoothScroll('.wwdi-container', 1000);
});

wwdiScroll.addEventListener('click', function() {
    smoothScroll('.spotlight-container', 1000);
});