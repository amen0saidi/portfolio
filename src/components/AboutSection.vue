<template>
    <section class="about-section" ref="aboutSection">
      <div class="container">
        <h2 ref="aboutTitle">About Me</h2>
        <p ref="aboutDescription">
          I am a passionate front-end and back-end developer skilled in various technologies, including Vue.js, Django, and Flutter. I strive to create efficient, user-friendly, and scalable web applications.
        </p>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    name: 'AboutSection',
    setup() {
      const aboutSection = ref(null);
      const aboutTitle = ref(null);
      const aboutDescription = ref(null);
  
      // GSAP animation on mounted
      onMounted(() => {
        gsap.from(aboutTitle.value, {
          duration: 1.5,
          opacity: 0,
          y: -50,
          ease: 'power4.out',
        });
  
        gsap.from(aboutDescription.value, {
          duration: 1.5,
          opacity: 0,
          y: 50,
          delay: 0.5,
          ease: 'power4.out',
        });
      });
  
      return { aboutSection, aboutTitle, aboutDescription };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap'); /* Import fonts */
  
  .about-section {
    height: 100vh; /* Full page height */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(135deg, #2e0550, #0e0d20); /* Dark gradient similar to hero section */
    background-size: 200% 200%;
    color: #fff;
    text-align: center;
    padding: 0 20px;
    border-radius: 12px; /* Rounded corners for a soft look */
    box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* Soft orange glow */
    overflow: hidden; /* Prevent overflow */
  }
  
  .about-section h2 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0), 0 0 15px rgba(255, 255, 255, 0.5); /* Soft glowing effect */
    font-family: 'Pacifico', cursive; /* Beachy font */
  }
  
  .about-section p {
    font-size: 1.2rem;
    margin-top: 20px;
    color: #fff;
    font-family: 'Poppins', sans-serif; /* Clean and modern font */
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5); /* Soft glowing text */
  }
  
  .buttons {
    margin-top: 40px;
  }
  
  .btn {
    padding: 12px 30px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #ff7e5f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn:hover {
    background-color: #feb47b; /* Lighter summer color on hover */
  }
  
  /* Make sure text is responsive */
  @media (max-width: 768px) {
    .about-section h2 {
      font-size: 2.5rem;
    }
  
    .about-section p {
      font-size: 1rem;
    }
  
    .btn {
      font-size: 1rem;
      padding: 10px 20px;
    }
  }
  </style>
  