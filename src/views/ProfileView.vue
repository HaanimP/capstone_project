<template>
    <NavbarComp />
    <div class="background">
    <div class="container-fluid">
        <h2>Profile</h2>
        <img src="https://i.ibb.co/VvCrV0p/profile.jpg">
        <h3>Name:</h3>
        <h3> Email:</h3>
    </div>
</div>
<FooterComp/>
</template>
<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  name: 'ProfileView',
  components:{
    NavbarComp,
    FooterComp
  },
}
</script>
<style scoped>
.background {
  background-image: url("https://i.ibb.co/BcYFfTg/login-image.jpg");
  height: 100vh; 
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.container-fluid {
  background: rgba(255, 255, 255, 0.9);
  width: 80%; 
  max-width: 600px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 
}

.container-fluid h2 {
  font-weight: 600;
  color: #333; 
  margin-bottom: 15px; 
}

.container-fluid img {
  width: 150px; 
  height: 150px; 
  object-fit: cover; 
  border-radius: 50%; 
  border: 3px solid #B76E79; 
}

.container-fluid h3 {
  font-weight: 500;
  color: #555; 
  width: 100%; 
  text-align: center; 
}
</style>
