<template>
  <NavbarComp />
  <div class="background" id="background-video">
    <div class="text-overlay">
      <h1 class="greeting">السلام عليكم<br>Hello</h1>
      <h1 class="slogan">Elevate your style</h1>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComponent from '@/components/FooterComp.vue';

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComponent
  },
  mounted() {
    const options = {
      id: 923711458, // Background video ID
      width: '1280', // Set the width to 1280px for a 16:9 aspect ratio
      height: '720', // Set the height to 720px for a 16:9 aspect ratio
      loop: true,
      autoplay: true,
      controls: false,
      background: true
    };

    const player = new Vimeo.Player('background-video', options);
    player.ready().then(() => {
      console.log('Background video is ready');
    }).catch((error) => {
      console.error('Error initializing background video:', error);
    });
  }
}
</script>

<style scoped>
.background {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 1;
}

.greeting,
.slogan {
  font-family: "Dancing Script", cursive;
  font-weight: 900;
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #fff; /* Adjust text color */
}

@media (max-width: 768px) {
  .background {
    padding-bottom: 177.77%; /* Maintain 9:16 aspect ratio */
  }

  .text-overlay {
    width: 100%;
  }

  .greeting, .slogan {
    font-size: 3rem;
  }
}

@media (max-width: 992px) {
  .background {
    padding-bottom: 56.25%; /* Maintain 16:9 aspect ratio for tablets */
  }
}
</style>