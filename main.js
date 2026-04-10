// Main JavaScript file for the academic portfolio website

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.getElementById('filterButtons');
const experienceTimeline = document.getElementById('experienceTimeline');
const reviewerList = document.getElementById('reviewerList');
const avatar = document.getElementById('avatar');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    renderExperience(experience);
    renderReviewerService(reviewerService);
    setupFilterListeners();
    handleAvatarError();
});

// Render projects grid
function renderProjects(projectsData) {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card" data-category="${project.category}">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.links.github ? `
                    <a href="${project.links.github}" class="project-link" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-1.334-.433-.178-.179-.729.027-1.011.091-.125.319-1.011.319-1.011s.513.103.846.155c.328.051.652.078.652.078.232-1.623.937-2.547 1.703-3.015-2.367-.269-4.854-1.185-4.854-1.185-.395-.158-.158-.981-.158-.981.319-.08.655-.121.655-.121.601.042 1.096.613 1.096.613.639-.218 1.336-.218 1.975 0 .001-.001.638-.594 1.096-.613.001-.001.495-.571 1.096-.613 0 0 .336.041.655.121 0 0 .158.823-.158.981 0 0-2.487.916-4.854 1.185.766.468 1.471 1.392 1.703 3.015 0 0 .324-.027.652-.078.333-.052.846-.155.846-.155.206.282.462 1.036.027 1.011.344.299.655.829.762 1.604.685.307 2.422-.837 3.492-.997.765.468 1.47 1.392 1.703 3.015.652-.027.977-.052.977-.052.261.282.519 1.036.074 1.011-.344.299-.655.829-.762 1.604.107.775.418 1.305.762 1.604.685.307 2.422-.837 3.492-.997.766.468 1.471 1.392 1.703 3.015 0 0 .324-.027.652-.078.333-.052.846-.155.846-.155.206.282.462 1.036.027 1.011.344.299.655.829.762 1.604.685.307 2.422-.837 3.492-.997.765.468 1.47 1.392 1.703 3.015 0 0 .324-.027.652-.078.333-.052.846-.155.846-.155.206.282.462 1.036.027 1.011.344.299.655.829.762 1.604z"/>
                        </svg>
                        Code
                    </a>
                ` : ''}
                ${project.links.demo ? `
                    <a href="${project.links.demo}" class="project-link" target="_blank" rel="noopener">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Demo
                    </a>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Render experience timeline
function renderExperience(experienceData) {
    if (!experienceTimeline) return;
    
    experienceTimeline.innerHTML = experienceData.map(item => `
        <div class="timeline-item">
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-organization">${item.organization}</p>
            <p class="timeline-date">${item.date}</p>
            <p class="timeline-description">${item.description}</p>
        </div>
    `).join('');
}

// Render reviewer service list
function renderReviewerService(reviewerData) {
    if (!reviewerList) return;
    
    reviewerList.innerHTML = reviewerData.map(item => `
        <div class="reviewer-item">
            <h3 class="reviewer-name">${item.name}</h3>
            <p class="reviewer-detail">${item.detail}</p>
        </div>
    `).join('');
}

// Setup filter button listeners
function setupFilterListeners() {
    if (!filterButtons) return;
    
    const buttons = filterButtons.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });
}

// Filter projects by category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Handle avatar image error (use placeholder if not found)
function handleAvatarError() {
    if (!avatar) return;
    
    avatar.onerror = function() {
        // Create a placeholder avatar using SVG
        this.src = 'data:image/svg+xml,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                <rect width="140" height="140" fill="#f3f4f6"/>
                <circle cx="70" cy="55" r="30" fill="#d1d5db"/>
                <ellipse cx="70" cy="115" rx="45" ry="30" fill="#d1d5db"/>
            </svg>
        `);
    };
}

// Smooth scroll for anchor links (if needed in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subtle animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
