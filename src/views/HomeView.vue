<template>
  <div class="background">
     <NavbarComp />
    
    <div class="container">

      <div class=" push ">

        <div class="col-3  pt-5">
            <h1 class="greeting">السلام عليكم<br>
            Hello</h1>
            <h1 class="slogan">Elevate your style</h1>
        </div>
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
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Damion&family=Dancing+Script:wght@400..700&family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');
.greeting{
  font-family: "Dancing Script", cursive;
  font-weight: 800;
  font-style: bolder;
  font-size: 3rem;
}
.slogan {
  font-family: "Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-size: 3rem;
  color: black; 
}
.push{
  padding-top: 10rem;
}
.background{
  background-image: url('https://i.ibb.co/cN7x6bJ/background-7.jpg');
  height: 800px;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .greeting, .slogan {
    font-size: 2rem; /* Adjust font size for smaller screens */
  }

  .push {
    padding-top: 5rem; /* Reduce padding on top for smaller screens */
  }
}

/* Further adjustments for very small screens */
@media (max-width: 480px) {
  .greeting {
    font-size: 1.8rem;
  }

  .slogan {
    font-size: 1.5rem; /* Even smaller to ensure it fits and looks good */
  }

  .push {
    padding-top: 3rem; /* Less padding for very small screens */
  }
}
</style>