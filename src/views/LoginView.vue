<template>
  <NavbarComp/>
  <div>
    <h1>Login</h1>

    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="loginUser">
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button><br><br>
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
  name: 'LoginView',
  components:{
    NavbarComp,
    FooterComp
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);

      const newUser = {
        userID: this.generateUserID(),
        firstName: this.firstName, 
        lastName: this.lastName, 
        emailAdd: this.email,
      };

      this.$store.dispatch('addUser', newUser);

      this.email = '';
      this.password = '';
    },
    generateUserID() {
      return Math.floor(Math.random() * 1000) + 1;
    }
  }
};
</script>

<style scoped>
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
