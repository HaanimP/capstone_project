<template>
  <NavbarComp/><br><br>
  <div class="background">
    <div class="container">
      <div class="text">Sign Up</div>
      <form @submit.prevent="signup">
        <div class="data">
          <label for="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" v-model="firstName">
        </div>
        <div class="data">
          <label for="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" v-model="lastName">
        </div>
        <div class="data">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" v-model="email">
        </div>
        <div class="data">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="password">
        </div>
        <div class="data">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="password" id="confirmPassword" v-model="confirmPassword">
        </div>
        <div class="btn">
          <button type="submit">Sign Up </button>
        </div>
        <div class="signup-link">Already a member?
          <router-link to="/login">Login now </router-link>
        </div><br>
        <div class="row">
          <router-link to="/login">
            <button>Back</button>
          </router-link>
        </div>
      </form>
    </div>
  </div><br><br>
  <FooterComp/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';

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
      confirmPassword: '',
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post('https://capstone-project-h6pk.onrender.com/users/register', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        });
        console.log('Signup successful');
        // Optionally, redirect the user to the login page after successful signup
        this.$router.push('/login');
      } catch (error) {
        console.error('Signup error:', error);
        // Handle signup error, e.g., display an error message to the user
      }
    }
  }
}
</script>

<style scoped>
.background {
  background-image: url("https://i.ibb.co/ZTDK63D/cap-back.jpg");
  height: 100vh; 
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.container {
  background: #fff;
  width: 100%;
  max-width: 400px; /* Adjusted width */
  padding: 30px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 8px; 
}

.container .text {
  font-size: 28px; 
  font-weight: bold;
  text-align: center;
  color: #B76E79;
  margin-bottom: 20px; 
}

.container form {
  margin-top: 0; 
}

.container form .data {
  display: flex;
  flex-direction: column;
  margin: 10px 0; /* Adjusted margin */
}

form .data label {
  font-size: 16px; 
  margin-bottom: 5px;
  color: #333; 
}

form .data input {
  font-size: 16px; 
  padding: 10px;
  border: 1px solid #ccc; 
  border-radius: 4px; 
}

form .data input:focus {
  border-color: #B76E79;
  outline: none; 
  box-shadow: 0 0 0 2px rgba(183, 110, 121, 0.2); 
}

form .btn button {
  background-color: #B76E79; 
}

.signup-link {
  text-align: center;
}

@media (max-width: 480px) {
  .container {
    padding: 20px; 
    width: calc(100% - 40px); 
  }
}
</style>