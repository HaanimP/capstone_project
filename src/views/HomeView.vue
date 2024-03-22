<template>
  <NavbarComp />
  <div class="background" id="background-video">
    <div class="text-overlay">
      <h1 class="greeting animate__animated animate__swing">السلام عليكم<br>Hello</h1>
      <h1 class="slogan animate__animated animate__bounceIn">Elevate your style</h1>
    </div>
  </div>
  <SpinnerComp v-if="videoLoading" />
  <FooterComponent/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComponent from '@/components/FooterComp.vue';
import SpinnerComp from '@/components/Spinner.vue'; 
import 'animate.css';

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComponent,
    SpinnerComp 
  },
  data() {
    return {
      videoLoading: true, 
    };
  },
  mounted() {
    const options = {
      id: 923711458,
      width: '1280',
      height: '720',
      loop: true,
      autoplay: true,
      controls: false,
      background: true
    };

    const player = new Vimeo.Player('background-video', options);
    player.ready().then(() => {
      this.videoLoading = false; // Hide spinner when video is ready
      console.log('Background video is ready');
    }).catch((error) => {
      this.videoLoading = false; // Consider hiding spinner on error as well
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