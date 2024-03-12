<template>
  <NavbarComp/>
  <div class="background">

    <div class="container">
      <div class="text">Login</div>
      <form action="#">
        <div class="data">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
        </div>
        <div class="data">
            <label for="password">Password</label>
            <input type="password" name="password" id="password">
        </div>
        <div class="forgot-pass">
            <a href="#">Forgot Password? </a>
        </div>
        <div class="btn">
            <button type="submit">Login </button>
        </div>
        <div class="signup-link">Not a member?
            <router-link to="/signup">Signup now </router-link>
        </div><br>
        <div class="row">
      <router-link to="/login">
        <button>Back</button>
      </router-link>
    </div>
      </form>
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
.background {
    padding-top: 60px; 
  min-height: 100vh;
  background-image: url("https://i.ibb.co/BcYFfTg/login-image.jpg");
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background: #fff;
  width: 410px;
  padding: 30px;
  box-shadow: rgba(50, 50, 93, 0.225) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  margin-top: 20px; 
  margin-bottom: 20px; 
}

.container {
  display: block; 
  margin-left: auto;
  margin-right: auto;
}

.container .text {
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  color: #B76E79;
}

.container form {
  margin-top: 0;
}

.container form .data {
  display: flex;
  flex-direction: column;
  margin: 20px 0; 
}

form .data label {
  font-size: 16px; 
  color: #333; 
  margin-bottom: 5px; 
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

form .forgot-pass {
  text-align: right; 
  margin-top: 5px;
}

form .btn button {
  background-color: #B76E79; 
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 4px; 
  margin-top: 20px; 
}

form .signup-link {
  text-align: center;
  margin-top: 15px; 
}

form .signup-link a {
  color: #B76E79;
  text-decoration: none;
}

form .signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .container {
    width: calc(100% - 40px); 
    padding: 15px;
  }
}
</style>

