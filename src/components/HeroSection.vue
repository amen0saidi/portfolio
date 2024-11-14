<template>
  <div class="hero-section" ref="heroSection">
    <h1 ref="heroTitle">Welcome to My Portfolio</h1>
    <p ref="heroDescription">
      Dive into a world of innovation and creativity. Discover my journey through cutting-edge projects, a diverse set of skills, and my passion for technology. Let's build the future together.
    </p>
  </div>
</template>

<script>
import { gsap } from 'gsap'; // Import GSAP

export default {
  name: 'HeroSection',
  mounted() {
    // GSAP Animations for title and description
    gsap.from(this.$refs.heroTitle, {
      duration: 1.5,
      opacity: 0,
      y: -100,
      ease: 'power4.out',
    });

    gsap.from(this.$refs.heroDescription, {
      duration: 1.5,
      opacity: 0,
      y: 100,
      delay: 0.5,
      ease: 'power4.out',
    });

    // GSAP Animation for background movement
    gsap.to(this.$refs.heroSection, {
      duration: 4,
      backgroundPosition: '200% 0%',
      ease: 'linear',
      repeat: -1, // Infinite loop
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap'); /* Import fonts */

.hero-section {
  height: 100vh; /* Full page height */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #2e0550, #0e0d20); /* Warm summer gradient colors */
  background-size: 200% 200%;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.5); /* Soft orange glow */
  overflow: hidden; /* Prevent overflow */
}

.hero-section h1 {
  font-size: 4rem;
  margin: 0;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0), 0 0 15px rgba(255, 255, 255, 0.5); /* Reduced glow */
  font-family: 'Pacifico', cursive; /* Beachy, handwritten style font */
}

.hero-section p {
  font-size: 1.8rem;
  margin-top: 20px;
  color: #fff;
  font-family: 'Poppins', sans-serif; /* Clean and modern font */
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5); /* Reduced glow */
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
  .hero-section h1 {
    font-size: 2.5rem;
  }
  .hero-section p {
    font-size: 1.2rem;
  }
  .btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
</style>
