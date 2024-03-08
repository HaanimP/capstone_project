<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <nav class="navbar d-flex background-img navbar-expand-lg ">
      <div class="navbar navbar-inverse">
      <div class="container-fluid">
          <div class="row">
              <div class="col-lg-12">
                  <div class="navbar-header">
                      <button class="navbar-toggle" data-target="#mobile_menu" data-toggle="collapse">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <RouterLink to="/" class="navbar-brand">GROUP.COM</RouterLink>
                  </div>
                  <div class="navbar-collapse collapse" id="mobile_menu">
                      <ul class="nav navbar-nav">
                          <li class="active"><RouterLink to="/">Home</RouterLink></li>
                          <li><RouterLink to="/about">About</RouterLink></li>
                          <li><RouterLink to="/products">Products</RouterLink></li>
                          <li><RouterLink to="/cart">Cart</RouterLink></li>
                          <li><RouterLink to="/admin">Admin</RouterLink></li>
                          <li><RouterLink to="/contact">Contact</RouterLink></li>
                          <li><RouterLink to="/login">Login</RouterLink></li>
                      </ul>
                      <ul class="nav navbar-nav navbar-right">
                          <li><RouterLink to="/profile"><span class="glyphicon glyphicon-user"></span> Profile</RouterLink></li>
                          <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span> Login / Sign Up <span class="caret"></span></a>
                              <ul class="dropdown-menu">
                                  <li><RouterLink to="/login">Login</RouterLink></li>
                                  <li><RouterLink to="/signup">Sign Up</RouterLink></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
  
    </nav>
    </template>
    
    <script>
        export default {
            name : 'NavBarComp'
        }
    </script>