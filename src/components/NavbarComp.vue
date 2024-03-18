<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-custom">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Haanim's Closet</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mobile_menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mobile_menu">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Collection
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link to="/products" class="dropdown-item">View our entire Collection</router-link></li>
              <li><router-link to="/modestview" class="dropdown-item">Modest Elegance</router-link></li>
              <li><router-link to="/nurulhuda" class="dropdown-item">Nurul Huda</router-link></li>
              <li><router-link to="/chiffon" class="dropdown-item">Chiffon Collection</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link">Cart</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link"><span class="glyphicon glyphicon-user"></span> Profile</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login / Sign Up
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
              <li><router-link to="/signup" class="dropdown-item">Sign Up</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBarComp'
}
</script>

<style scoped>
.bg-custom {
  background-color: #B76E79; 
}
.navbar-brand,
.navbar-nav .nav-link {
  font-weight: bold; 
  font-size: 18px; 
  line-height: 1.5; 
}

.navbar-brand {
  padding-right: 20px; 
}

.navbar-nav .nav-link {
  margin-right: 15px; 
}

.dropdown-menu {
  background-color: #B76E79; 
}

/* .dropdown-menu a {
  color: #fff !important; 
} */

.dropdown-item{
  color: #fff;
}

.dropdown-item {
  font-weight: bold; 
  font-size: 16px; 
  line-height: 1.5; 
}

.dropdown-item:hover {
  color: #B76E79; 
  background-color: white; 
}
</style>