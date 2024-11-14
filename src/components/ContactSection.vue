<template>
    <section class="contact-section" ref="contactSection">
      <div class="container">
        <h2 ref="contactTitle">Contact</h2>
        <p>Feel free to reach out via email or through my LinkedIn profile.</p>
        <div class="contact-links">
          <p>
            <strong>Email:</strong>
            <a href="mailto:amen66saidi@gmail.com">amen66saidi@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/amen-allah-saidi-4b68a8313" target="_blank">linkedin.com/in/amen-allah-saidi-4b68a8313</a>
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    name: 'ContactSection',
    setup() {
      const contactSection = ref(null);
      const contactTitle = ref(null);
  
      // GSAP animation on mounted
      onMounted(() => {
        gsap.from(contactTitle.value, {
          duration: 1.5,
          opacity: 0,
          y: -50,
          ease: 'power4.out',
        });
  
        gsap.from('.contact-links p', {
          duration: 1.5,
          opacity: 0,
          y: 50,
          stagger: 0.3,
          ease: 'power4.out',
        });
      });
  
      return { contactSection, contactTitle };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap'); /* Import fonts */
  
  .contact-section {
    background: linear-gradient(135deg, #2e0550, #0e0d20); /* Warm summer gradient */
    background-size: 200% 200%;
    height: auto;
    padding: 80px 20px;
    text-align: center;
    color: #fff;
    border-radius: 12px; /* Rounded corners */
    box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* Soft orange glow */
  }
  
  .contact-section h2 {
    font-size: 3rem;
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0), 0 0 15px rgba(255, 255, 255, 0.5);
    font-family: 'Pacifico', cursive;
    margin-bottom: 40px;
  }
  
  .contact-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
    font-size: 1.2rem;
  }
  
  .contact-links p {
    background-color: #333;
    padding: 15px;
    border-radius: 12px;
    color: #fff;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  }
  
  .contact-links a {
    color: #00bcd4;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .contact-links a:hover {
    color: #fff;
  }
  
  /* Make sure text is responsive */
  @media (max-width: 768px) {
    .contact-section h2 {
      font-size: 2.5rem;
    }
  
    .contact-links p {
      padding: 12px;
    }
  
    .contact-links a {
      font-size: 1rem;
    }
  }
  </style>
  
  
  