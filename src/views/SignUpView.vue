<template>
    <NavbarComp/>
    <div class="background">
      <h1>Sign Up</h1>
  
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <form @submit.prevent="registerUser">
              <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" v-model="firstName" required>
              </div>
              <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" v-model="lastName" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" required>
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
              </div>
              <button type="submit" class="btn btn-primary">Sign Up</button><br><br>
            </form>
          </div>
        </div>
      </div>
  
      <div class="row">
        <router-link to="/admin">
          <button>Back</button>
        </router-link>
      </div>
    </div>
    <FooterComp/>
  </template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
export default {
  name: 'SignUpView',
  components: {
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async registerUser() {
      if(this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      console.log('Registering user:', this.firstName, this.lastName, this.email);
      
      const newUser = {
        userID: this.generateUserID(),
        firstName: this.firstName, 
        lastName: this.lastName, 
        emailAdd: this.email,
      };

      // Here you would typically send newUser to your backend to register the new user
      // this.$store.dispatch('addUser', newUser);

      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    },
    generateUserID() {
      return Math.floor(Math.random() * 1000) + 1;
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url("https://i.ibb.co/BcYFfTg/login-image.jpg");
  height: 600px;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}
.container {
  max-width: 600px;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}
</style>