<template>
  <div id="app">
    <header class="header">
      <nav>
        <ul>
          <li><a href="#about-section" @click="scrollToSection('#about-section')">About</a></li>
          <li><a href="#projects-section" @click="scrollToSection('#projects-section')">Projects</a></li>
          <li><a href="#skills-section" @click="scrollToSection('#skills-section')">Skills</a></li>
          <li><a href="#contact-section" @click="scrollToSection('#contact-section')">Contact</a></li>
        </ul>
      </nav>
    </header>

    <HeroSection id="hero-section" class="section-card hero-section" />
    <AboutSection id="about-section" class="section-card about-section" />
    <ProjectsSection id="projects-section" class="section-card projects-section" />
    <SkillsSection id="skills-section" class="section-card skills-section" />
    <ContactSection id="contact-section" class="section-card contact-section" />
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: 'App',
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
  },
  mounted() {
    gsap.from('.section-card', {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: 'power4.out',
    });

    window.addEventListener('wheel', this.handleWheel);
  },
  unmounted() {
    window.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    scrollToSection(id) {
      const target = document.querySelector(id);
      if (target) {
        gsap.to(window, {
          scrollTo: {
            y: target.offsetTop - 80,
            autoKill: false,
          },
          duration: 1,
          ease: 'power2.out',
        });
      }
    },
    handleWheel(event) {
      if (event.deltaY > 0) {
        gsap.to(window, {
          scrollTo: '+=200',
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(window, {
          scrollTo: '-=200',
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(135deg, #2e0550, #0e0d20);
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transition: background 0.3s ease;
}

.header nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header nav ul li {
  margin: 0 20px;
}

.header nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
}

.header nav ul li a:hover {
  color: #ffcc00;
  transform: scale(1.1);
}

.hero-section {
  padding: 50px 20px;
  text-align: center;
  background-color: #f8f8f8;
  color: #333;
  margin-top: 80px;
}

.section-card {
  padding: 50px 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #121212;
  color: #fff;
  margin: 0; /* No margin between sections */
}

.section-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.section-card h2 {
  font-size: 3rem;
}

.section-card p {
  font-size: 1.2rem;
  margin-top: 20px;
  line-height: 1.8;
}

html {
  scroll-behavior: unset;
}

@media (max-width: 768px) {
  .section-card h2 {
    font-size: 2.5rem;
  }

  .section-card p {
    font-size: 1rem;
  }
}
</style>
s