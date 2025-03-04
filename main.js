// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 15, density: { enable: true, value_area: 800 } },
        color: { value: '#6e56cf' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: false,
            animation: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            animation: { enable: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6e56cf',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// Terminal typing effect
new TypeIt('#terminal-text', {
    speed: 50,
    waitUntilVisible: true
})
.type('Hello, I\'m Bensen.', {delay: 3})
.type(' <a href="/resume.pdf" target="_blank" class="resume-link">Here\'s my resume</a>', {delay: 3})
.break()
.type('> Wageslave at my parents\' Chinese restaurant', {delay: 3})
.break()
.type('> YuGiOh Blue-Eyes Brick Dragon player (before the new structure deck)', {delay: 3})
.break()
.type('> I build funny simulations and experiments using ML', {delay: 10})
.break()
.type('> I build battlebots with a team and sometimes they survive', {delay: 10})
.go();

// Bouncing Marie animation
const bouncer = document.getElementById('bouncing-marie');
const imageSize = 200; // Match the CSS size
let x = Math.random() * (window.innerWidth - imageSize);
let y = Math.random() * (window.innerHeight - imageSize);
let dx = 1.5;  // Slower speed
let dy = 1.5;  // Slower speed

function animateBounce() {
    // Update position
    x += dx;
    y += dy;

    // Boundary checking
    if (x <= 0 || x >= window.innerWidth - imageSize) {
        dx = -dx;
    }
    if (y <= 0 || y >= window.innerHeight - imageSize) {
        dy = -dy;
    }

    // Keep within bounds
    x = Math.max(0, Math.min(x, window.innerWidth - imageSize));
    y = Math.max(0, Math.min(y, window.innerHeight - imageSize));

    // Apply new position with centered offset
    bouncer.style.transform = `translate(${x}px, ${y}px)`;

    // Continue animation
    requestAnimationFrame(animateBounce);
}

// Start the animation when the page loads
window.addEventListener('load', () => {
    animateBounce();
});

// Handle window resize
window.addEventListener('resize', function() {
    x = Math.min(x, window.innerWidth - imageSize);
    y = Math.min(y, window.innerHeight - imageSize);
});