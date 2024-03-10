<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <div class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">

            <div class="navbar-header">
              <button class="navbar-toggle" data-target="#mobile_menu" data-toggle="collapse"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
              <router-link to="/" class="navbar-brand">Haanim's Closet</router-link>
            </div>

            <div class="navbar-collapse collapse" id="mobile_menu">
              <ul class="nav navbar-nav">
                <li class="active"><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><a href="#" class="dropdown-toggle" data-toggle="dropdown">Collection <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/products">View our entire Collection</router-link></li>
                    <!-- <li><router-link :to="{ name: 'productView', params: { id: 1 }}">Product 1</router-link></li> -->
                    <li><router-link to="/jilbab">Jilbab Collection</router-link></li>
                    <li><router-link to="/satin">Satin Collection</router-link></li>
                    <li><router-link to="/chiffon">Chiffon Collection</router-link></li>
                  </ul>
                </li>
                <li><router-link to="/cart">Cart</router-link></li>
                <li><router-link to="/admin">Admin</router-link></li>
                <li><router-link to="/contact">Contact Us</router-link></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><router-link to="/profile"><span class="glyphicon glyphicon-user"></span> Profile</router-link></li>
                <li><a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span> Login / Sign Up <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <li><router-link to="/login">Login</router-link></li>
                    <li><router-link to="/signup">Sign Up</router-link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
    export default {
        name : 'NavBarComp'
    }
</script>