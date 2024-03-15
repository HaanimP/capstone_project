<template>
  <NavbarComp />
  <div class="background">
    <div class="video-container-left">
      <div id="vimeo-player-left" style="position:relative; width:100%; height:0px; padding-bottom:56.250%"></div>
      <div class="text-overlay-left">
        <h1 class="greeting">السلام عليكم<br>Hello</h1>
      </div>
    </div>
    <div class="image-container-right">
      <img src="https://i.ibb.co/cN7x6bJ/background-7.jpg" alt="Background Image" class="background-image">
      <div class="text-overlay-right">
        <h1 class="slogan">Elevate your style</h1>
      </div>
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
    const optionsLeft = {
      id: 923649758, 
      width: '640',
      loop: true,
      controls: false,
    };

    const playerLeft = new Vimeo.Player('vimeo-player-left', optionsLeft);
    playerLeft.ready().then(() => {
      console.log('Player Left is ready');
      playerLeft.play().then(() => {
        console.log('Player Left is playing');
      }).catch((error) => {
        console.error('Error playing Player Left:', error);
      });
    }).catch((error) => {
      console.error('Error initializing Player Left:', error);
    });
  }
}
</script>

<style scoped>
.background {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-container-left,
.image-container-right {
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
}

.video-container-left {
  left: 0;
}

.image-container-right {
  right: 0;
}

.text-overlay-left,
.text-overlay-right {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 1;
}

.text-overlay-left {
  top: 20%; /* Adjusted top position for greeting */
  color: #fff;
}

.text-overlay-right {
  top: 30%; /* Adjusted top position for slogan */
  color: #000; /* Adjust text color for better visibility on the image */
}

.greeting,
.slogan {
  font-family: "Dancing Script", cursive;
  font-weight: 900; /* Increase font weight */
  font-size: 4rem; /* Increase font size */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.push {
  padding-top: 10rem;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .greeting, .slogan {
    font-size: 3rem; /* Adjust font size for smaller screens */
  }
}
</style>