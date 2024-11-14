<template>
    <section class="projects-section" ref="projectsSection">
      <div class="container">
        <h2 ref="projectsTitle">Professional Experience</h2>
        <div class="projects-list">
          <!-- Professional experience details -->
          <div class="project-card">
            <h3>Tunisie Telecom</h3>
            <p><strong>Intern (Introduction)</strong><br>
               15-07-2022 to 15-08-2022</p>
            <ul>
              <li>Learning the work environment and teamwork.</li>
              <li>Introduction to cloud computing concepts.</li>
              <li>Understanding the operation of the central server.</li>
            </ul>
          </div>
  
          <div class="project-card">
            <h3>Rayen Soft</h3>
            <p><strong>Intern (Advanced Training)</strong><br>
               25-07-2023 to 25-08-2023</p>
            <ul>
              <li>Backend development with Django and frontend with Vue.js for an e-commerce website.</li>
              <li>Managing the backlog and following Scrum methodologies.</li>
            </ul>
          </div>
  
          <div class="project-card">
            <h3>Rayen Soft</h3>
            <p><strong>Intern (Final Year Project)</strong><br>
               15-02-2024 to 15-03-2024</p>
            <ul>
              <li>Design and development of a social assistance web application.</li>
              <li>User management, authentication, and registration.</li>
              <li>Category management, help requests, service offers, and comments.</li>
              <li>Event announcements.</li>
              <li>Using Jira for task tracking and Figma for design.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'ProjectsSection',
  setup() {
    const projectsSection = ref(null);
    const projectsTitle = ref(null);

    // GSAP animation on mounted
    onMounted(() => {
      gsap.from(projectsTitle.value, {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power4.out',
      });

      gsap.from('.project-card', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power4.out',
      });
    });

    return { projectsSection, projectsTitle };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap'); /* Import fonts */

.projects-section {
  background: linear-gradient(135deg, #2e0550, #0e0d20);  /* Warm summer gradient */
  background-size: 200% 200%;
  height: auto;
  padding: 80px 20px;
  text-align: center;
  color: #fff;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* Soft orange glow */
}

.projects-section h2 {
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0), 0 0 15px rgba(255, 255, 255, 0.5);
  font-family: 'Pacifico', cursive;
}

.projects-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.project-card {
  background-color: #333;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 80%;
  text-align: left;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7); /* Hover effect */
}

.project-card h3 {
  font-size: 2rem;
  color: #c9e2f2;
}

.project-card p {
  font-size: 1.1rem;
  color: #aaa;
  margin-top: 10px;
}

.project-card ul {
  font-size: 1rem;
  color: #ddd;
  margin-top: 10px;
  list-style: inside;
}

/* Make sure text is responsive */
@media (max-width: 768px) {
  .projects-section h2 {
    font-size: 2.5rem;
  }

  .project-card {
    width: 90%;
  }

  .project-card h3 {
    font-size: 1.5rem;
  }

  .project-card p {
    font-size: 1rem;
  }

  .project-card ul {
    font-size: 0.9rem;
  }
}
</style>
