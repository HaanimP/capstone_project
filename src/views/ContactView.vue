<template>
  <NavbarComp/>
  <div class="background">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <h1 class="sub-title bold bigger-text">Contact Me</h1>
          <p class="bold bigger-text"><i class="fa-solid fa-paper-plane"></i> haanimpietersen@gmail.com</p>
          <p class="bold bigger-text"><i class="fa-solid fa-phone"></i> 0714332419</p>
          <div class="social-icons">
            <a href="https://www.instagram.com/pietersen_haanim?igsh=MWpsZ3ljZ2lrZmZyOA=="><i class="fa-brands fa-instagram animate__animated animate__bounce"></i></a>
            <a href="https://za.linkedin.com/in/haanim-pietersen-172bb9264"><i class="fa-brands fa-linkedin animate__animated animate__bounce"></i></a>
          </div>
          <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52879.8279558335!2d18.519421550000008!3d-34.069789899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc415380a3a2d5%3A0xc223e448d2209d8d!2sPelikan%20Park%2C%20Cape%20Town%2C%207941!5e0!3m2!1sen!2sza!4v1705045428560!5m2!1sen!2sza" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-form">
            <h2 class="bold bigger-text">Contact Us</h2>
            <form v-on:submit.prevent="submitForm" action="https://formspree.io/f/xyyrdylw" method="POST">
              <!-- Name input -->
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name" required />
              </div>

              <!-- Email input -->
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email address" required />
              </div>

              <!-- Message input -->
              <div class="form-group">
                <textarea class="form-control" id="message" rows="4" placeholder="Message" required></textarea>
              </div>

              <!-- Checkbox -->
              <div class="form-check mb-4">
                <input type="checkbox" class="form-check-input" id="sendCopy" checked />
                <label class="form-check-label bold bigger-text" for="sendCopy">Send me a copy of this message</label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block bold bigger-text">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import FooterComponent from '@/components/FooterComp.vue'
export default {
  name: 'ContactViewComp',
  components: {
    NavbarComp,
    FooterComponent
  }
}
</script>

<style scoped>
.background {
  background-color: #B76E79;
  padding: 50px 0;
}

.contact-form {
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  border-radius: 5px;
}

.sub-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.social-icons {
  margin-top: 20px;
}

.social-icons a {
  color: #D2B48C;
  font-size: 24px;
  margin-right: 10px;
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce var(--animate-duration) infinite;;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

label {
  color: #000000; /* Text color for labels */
}

.btn-primary {
  background-color: #FFA07A; /* Custom button color */
  border-color: #FFA07A;
}

.btn-primary:hover {
  background-color: #FF6347; /* Custom hover color */
  border-color: #FF6347;
}

.btn-block {
  width: 100%;
}

.bold {
  font-weight: bold;
}

.bigger-text {
  font-size: 18px;
}
</style>