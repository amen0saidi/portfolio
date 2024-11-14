<template>
    <section class="skills-section" ref="skillsSection">
      <div class="container">
        <h2 ref="skillsTitle">Skills</h2>
        <ul class="skills-list">
          <li class="skill-item">
            <strong>Programming Languages:</strong> Python, JavaScript, Java, C++, Dart
          </li>
          <li class="skill-item">
            <strong>Frameworks and Libraries:</strong> Django, Django REST framework, Vue.js, Vuetify, Flutter
          </li>
          <li class="skill-item">
            <strong>Tools:</strong> Postman, Jira, Figma, Android Studio
          </li>
          <li class="skill-item">
            <strong>Databases:</strong> MySQL, PostgreSQL
          </li>
          <li class="skill-item">
            <strong>Languages:</strong> French (good), English (excellent), Arabic (native)
          </li>
        </ul>
      </div>
    </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'SkillsSection',
  setup() {
    const skillsSection = ref(null);
    const skillsTitle = ref(null);

    // GSAP animation on mounted
    onMounted(() => {
      gsap.from(skillsTitle.value, {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: 'power4.out',
      });

      gsap.from('.skill-item', {
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: 'power4.out',
      });
    });

    return { skillsSection, skillsTitle };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap'); /* Import fonts */

.skills-section {
  background: linear-gradient(135deg, #2e0550, #0e0d20);  /* Warm summer gradient */
  background-size: 200% 200%;
  height: auto;
  padding: 80px 20px;
  text-align: center;
  color: #fff;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* Soft orange glow */
}

.skills-section h2 {
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0), 0 0 15px rgba(255, 255, 255, 0.5);
  font-family: 'Pacifico', cursive;
  margin-bottom: 40px;
}

.skills-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: scale(1.05);
}

.skill-item strong {
  color: #c9e2f2;
}

/* Make sure text is responsive */
@media (max-width: 768px) {
  .skills-section h2 {
    font-size: 2.5rem;
  }

  .skill-item {
    padding: 15px;
  }

  .skill-item strong {
    font-size: 1rem;
  }
}
</style>
