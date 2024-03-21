<template>
  <NavbarComp />
  <section class="background">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12 col-xl-4">
          <div class="card shadow-lg" style="border-radius: 15px;">
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img src="https://i.ibb.co/VvCrV0p/profile.jpg" class="rounded-circle img-fluid" style="width: 100px;" />
              </div>
              <div v-if="user">
              <h4 class="mb-2">Welcome, {{ user.firstName }} {{ user.lastName }}</h4>
              <p class="text-muted mb-4">Email: {{ user.email }}</p>
            </div>
            <div v-else>
    <p>Loading user information...</p>
  </div>
              <div class="d-flex justify-content-between text-center mt-5 mb-2">
                <div>
                  <p class="mb-2 h5">3</p>
                  <p class="text-muted mb-0">Products in Cart</p>
                </div>
                <div class="px-3">
                  <p class="mb-2 h5">$500</p>
                  <p class="text-muted mb-0">Total Spent</p>
                </div>
                <div>
                  <p class="mb-2 h5"><i class="fa-solid fa-ranking-star"></i></p>
                  <p class="text-muted mb-0">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComp/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import { mapState } from 'vuex';

export default {
  name: 'ProfileView',
  components: {
    NavbarComp,
    FooterComp
  },
  computed: {
  ...mapState(['user']), // Use mapState to map the 'user' state from Vuex store
  }
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

.container {
  background-image: url("https://i.ibb.co/BcYFfTg/login-image.jpg");
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
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

.container .card {
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white background */
  border-radius: 15px;
  min-width: 400px; /* Prevents the image from being too small */
  min-height: 100px; 
  
}

.container h4 {
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
}

.container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #B76E79;
  min-width: 120px; /* Prevents the image from being too small */
  min-height: 120px; 
}

.container p {
  font-weight: 500;
  color: #555;
  margin-bottom: 0;
}
</style>