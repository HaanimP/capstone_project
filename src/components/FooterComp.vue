<template>
  <footer class="footer">
    <div class="container py-5">
      <div class="row gx-5">
        <!-- Image Column -->
        <div class="col-lg-2 col-md-6">
          <img src="https://i.ibb.co/cN7x6bJ/background-7.jpg" alt="Footer Image" class="img-fluid" style="max-height: 150px;">
        </div>
        <!-- Content Columns -->
        <div class="col-lg-4 col-md-6">
          <h5 class="footer-title">Haanim's Closet</h5>
          <p class="footer-text">When virtue and modesty enlighten her charms, the lustre of a beautiful woman is brighter than the stars of heaven, and the influence of her power it is in vain to resist.</p>
          <p class="footer-text mb-0">All rights reserved to Haanim's Closet <i class="far fa-copyright"></i> {{ currentYear }}.</p>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="footer-title">Quick links</h5>
          <ul class="list-unstyled footer-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6">
          <h5 class="footer-title">Sister Companies</h5>
          <ul class="list-unstyled footer-list">
            <li><router-link to="/modestview" class="dropdown-item">Modest Elegance</router-link></li>
              <li><router-link to="/nurulhuda" class="dropdown-item">Nurul Huda</router-link></li>
              <li><router-link to="/zahraatul" class="dropdown-item">Zahraa Tul Islam</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
.footer {
  background-color: #f8f9fa;
  padding-top: 50px;
}

.footer-title {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
}

.footer-text {
  color: #666;
  font-size: 1.25rem;
}

.footer-list {
  color: #666;
}

.footer-list a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-list a:hover {
  color: #333;
}

</style>
