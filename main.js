// ===========================
// Particle System
// ===========================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        const numParticles = Math.floor((this.canvas.width * this.canvas.height) / 12000);
        this.particles = [];
        for (let i = 0; i < numParticles; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (const particle of this.particles) {
            particle.update(this.mouse, this.canvas);
            particle.draw(this.ctx);
        }
        this.connectParticles();
        requestAnimationFrame(() => this.animate());
    }

    connectParticles() {
        const maxDist = 120;
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDist) {
                    const opacity = (1 - dist / maxDist) * 0.15;
                    this.ctx.strokeStyle = `rgba(108, 99, 255, ${opacity})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

class Particle {
    constructor(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.density = (Math.random() * 30) + 1;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update(mouse, canvas) {
        // Float
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x != null && mouse.y != null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                const dirX = dx / dist;
                const dirY = dy / dist;
                this.x -= dirX * force * this.density * 0.4;
                this.y -= dirY * force * this.density * 0.4;
            }
        }
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ===========================
// Typing Effect
// ===========================
class TypingEffect {
    constructor(element, texts, typeSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
        this.element = element;
        this.texts = texts;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.pauseTime = pauseTime;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }

    type() {
        const currentText = this.texts[this.textIndex];

        if (this.isDeleting) {
            this.charIndex--;
            this.element.textContent = currentText.substring(0, this.charIndex);
        } else {
            this.charIndex++;
            this.element.textContent = currentText.substring(0, this.charIndex);
        }

        let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            delay = 500;
        }

        setTimeout(() => this.type(), delay);
    }
}

// ===========================
// Counter Animation
// ===========================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;

            if (isDecimal) {
                counter.textContent = current.toFixed(3);
            } else {
                counter.textContent = Math.floor(current);
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = isDecimal ? target.toFixed(3) : target;
            }
        }

        requestAnimationFrame(update);
    });
}

// ===========================
// Scroll Reveal
// ===========================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal');
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.dataset.delay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        this.elements.forEach(el => this.observer.observe(el));
    }
}

// ===========================
// Skill Bar Animation
// ===========================
class SkillBarAnimation {
    constructor() {
        this.fills = document.querySelectorAll('.skill-fill');
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
            });
        }, { threshold: 0.5 });

        this.fills.forEach(fill => this.observer.observe(fill));
    }
}

// ===========================
// Custom Cursor
// ===========================
class CustomCursor {
    constructor() {
        this.dot = document.getElementById('cursor-dot');
        this.ring = document.getElementById('cursor-ring');
        if (!this.dot || !this.ring) return;
        if (window.matchMedia('(hover: none)').matches) return;

        this.dotX = 0;
        this.dotY = 0;
        this.ringX = 0;
        this.ringY = 0;

        document.addEventListener('mousemove', (e) => {
            this.dotX = e.clientX;
            this.dotY = e.clientY;
        });

        // Scale on hover over interactive elements
        const interactives = document.querySelectorAll('a, button, .btn, .skill-chip, .course-tag, .nav-link');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.ring.style.transform = 'scale(1.5)';
                this.ring.style.opacity = '0.3';
                this.dot.style.transform = 'scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                this.ring.style.transform = 'scale(1)';
                this.ring.style.opacity = '0.5';
                this.dot.style.transform = 'scale(1)';
            });
        });

        this.animate();
    }

    animate() {
        this.dot.style.left = this.dotX - 3 + 'px';
        this.dot.style.top = this.dotY - 3 + 'px';

        this.ringX += (this.dotX - this.ringX) * 0.15;
        this.ringY += (this.dotY - this.ringY) * 0.15;
        this.ring.style.left = this.ringX - 18 + 'px';
        this.ring.style.top = this.ringY - 18 + 'px';

        requestAnimationFrame(() => this.animate());
    }
}

// ===========================
// Navigation
// ===========================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.sections = document.querySelectorAll('.section, .hero-section');

        this.bindEvents();
        this.setupScrollSpy();
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            // Navbar background
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            // Scroll progress
            this.updateScrollProgress();
        });

        // Hamburger
        this.hamburger.addEventListener('click', () => {
            this.hamburger.classList.toggle('active');
            this.mobileMenu.classList.toggle('active');
        });

        // Mobile nav links close menu
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.mobileMenu.classList.remove('active');
            });
        });
    }

    updateScrollProgress() {
        const scrollProgress = document.getElementById('scroll-progress');
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }

    setupScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    this.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('data-section') === id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });

        this.sections.forEach(section => observer.observe(section));
    }
}

// ===========================
// Magnetic Buttons
// ===========================
class MagneticButtons {
    constructor() {
        this.btns = document.querySelectorAll('.btn');
        this.btns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    }
}

// ===========================
// Tilt Effect for Cards
// ===========================
class TiltEffect {
    constructor() {
        // Only on desktop
        if (window.matchMedia('(hover: none)').matches) return;

        this.cards = document.querySelectorAll('.glass-card');
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / centerY * -3;
                const rotateY = (x - centerX) / centerX * 3;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

// ===========================
// Initialize Everything
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Particle System
    const canvas = document.getElementById('particle-canvas');
    if (canvas) new ParticleSystem(canvas);

    // Typing Effect
    const typingEl = document.getElementById('typing-text');
    if (typingEl) {
        new TypingEffect(typingEl, [
            '数据科学与大数据技术',
            'Data Science & Big Data',
            'NLP / LLM 研究者',
            '全栈开发者',
            '数学建模爱好者'
        ], 80, 40, 2500);
    }

    // Counter Animation - trigger when hero is visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                heroObserver.unobserve(entry.target);
            }
        });
    });
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) heroObserver.observe(heroStats);

    // Scroll Reveal
    new ScrollReveal();

    // Skill Bars
    new SkillBarAnimation();

    // Custom Cursor
    new CustomCursor();

    // Navigation
    new Navigation();

    // Magnetic Buttons
    new MagneticButtons();

    // Tilt Effect
    new TiltEffect();

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
