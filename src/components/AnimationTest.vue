<template>
    <div ref="box" class="box">
      Animate Me!
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    name: 'AnimationTest',
    setup() {
      const box = ref(null);
  
      onMounted(() => {
        // Simple animation that moves the element 300px to the right
        gsap.to(box.value, { x: 300, duration: 2 });
      });
  
      return { box };
    }
  };
  </script>
  
  <style scoped>
  .box {
    width: 100px;
    height: 100px;
    background-color: #42a5f5;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
  }
  </style>
  