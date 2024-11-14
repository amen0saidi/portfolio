<template>
    <div class="experience-card" ref="card">
      <h3>{{ experience.title }}</h3>
      <p>{{ experience.description }}</p>
      <p class="duration">{{ experience.duration }}</p>
      <a :href="experience.link" target="_blank">View More</a>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    name: 'ExperienceCard',
    props: ['experience'],
    setup() {
      const card = ref(null);
  
      onMounted(() => {
        // GSAP animation to fade and slide up the cards
        gsap.from(card.value, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2
        });
      });
  
      return { card };
    }
  };
  </script>
  
  <style scoped>
  .experience-card {
    padding: 2rem;
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #ddd;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .experience-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
  
  .experience-card h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .experience-card p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .experience-card .duration {
    font-size: 0.9rem;
    color: #888;
  }
  
  .experience-card a {
    text-decoration: none;
    color: #0066cc;
    font-weight: 500;
    transition: color 0.3s ease;
  }
  
  .experience-card a:hover {
    color: #004a99;
  }
  </style>
  