<template>
    <NavbarComp/>
    <div class="background">
  
      <div class="container">
        <div class="text">Sign Up</div>
        <form action="#">
            <div class="data">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName">
          </div>
          <div class="data">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName">
          </div>
            <div class="data">
              <label for="email">Email</label>
              <input type="email" name="email" id="email">
          </div>
          <div class="data">
              <label for="password">Password</label>
              <input type="password" name="password" id="password">
          </div>
          <div class="data">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" name="password" id="confirmPassword">
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
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async registerUser() {
      // Basic client-side validation for password match
      if(this.password !== this.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Preparing the user data for the signup request
      const userData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email, // Assuming the backend expects 'email' not 'emailAdd'
        password: this.password,
        // Add 'phone' here if your backend also expects it
      };

      try {
        const response = await fetch(`https://capstone-project-h6pk.onrender.com/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        });

        if (!response.ok) {
          throw new Error('Signup failed');
        }

        const data = await response.json();
        localStorage.setItem('token', data.token);

        // Optionally, redirect the user or clear the form
        this.$router.push('/'); 
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
      } catch (error) {
  this.errorMessage = 'Signup error. Please try again.';
  console.error('Error during signup:', error);
    }
    } 
  } 
};
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
  background: #fff;
  width: 100%;
  max-width: 410px; 
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
  margin: 20px 0; 
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


@media (max-width: 480px) {
  .container {
    padding: 20px; 
    width: calc(100% - 40px); 
  }
}
</style>