// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Rolagem suave
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

// Sombra no header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// ========== ANIMAÇÕES DE SCROLL ==========

// Função para observar elementos e adicionar animações
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Adicionar classes de animação aos elementos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    
    // Animar título e parágrafo da seção About
    const aboutTitle = document.querySelector('.about h2');
    const aboutText = document.querySelector('.about p');
    
    if (aboutTitle) {
        aboutTitle.classList.add('fade-in');
        observer.observe(aboutTitle);
    }
    
    if (aboutText) {
        aboutText.classList.add('fade-in');
        observer.observe(aboutText);
    }
    
    // Animar cards dos cursos
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        card.classList.add('scale-in');
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Animar seção Team
    const teamTitle = document.querySelector('.team h2');
    if (teamTitle) {
        teamTitle.classList.add('fade-in');
        observer.observe(teamTitle);
    }
    
    // Animar membros da equipe
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member, index) => {
        if (index % 2 === 0) {
            member.classList.add('slide-left');
        } else {
            member.classList.add('slide-right');
        }
        member.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(member);
    });
    
    // Animar seção Join
    const joinTitle = document.querySelector('.join h2');
    const joinText = document.querySelector('.join p');
    const joinButton = document.querySelector('.join-button');
    
    if (joinTitle) {
        joinTitle.classList.add('fade-in');
        observer.observe(joinTitle);
    }
    
    if (joinText) {
        joinText.classList.add('fade-in');
        joinText.style.transitionDelay = '0.2s';
        observer.observe(joinText);
    }
    
    if (joinButton) {
        joinButton.classList.add('scale-in');
        joinButton.style.transitionDelay = '0.4s';
        observer.observe(joinButton);
    }
    
    // Animar seção Contact
    const contactTitle = document.querySelector('.contact h2');
    if (contactTitle) {
        contactTitle.classList.add('fade-in');
        observer.observe(contactTitle);
    }
    
    // Animar itens de contato
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('scale-in');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
    
    // Animar footer
    const footerSections = document.querySelectorAll('.footer-section');
    footerSections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(section);
    });
});

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroText && scrolled < window.innerHeight) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Adicionar efeito de hover suave nos cards
const cards = document.querySelectorAll('.course-card, .team-member');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Efeito de typing no parágrafo do hero
const heroText = document.querySelector('.hero-content p');
if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    heroText.style.opacity = '1';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Velocidade da digitação (50ms por letra)
        }
    };
    
    // Iniciar o efeito após 1 segundo
    setTimeout(typeWriter, 1000);
}
