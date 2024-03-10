<template>


  <router-view/>



</template>

<script>
// import NavbarComp from './components/NavbarComp.vue';

  export default {

    components : {
      // NavbarComp
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');

/* General Styles */
#app {
  font-family: 'Roboto', sans-serif; 
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background-color: #B76E79;
}

/* Modal Styles */
.modal-backdrop {
   position: relative;
   z-index: -1;
}

.modal {
   position: relative;
   z-index: 9999;
}

/* Navbar Styles */
.navbar {
  padding: 10px 0; /* Reduced vertical padding for a sleeker look */
  background-color: #fff; /* Non-transparent background for better readability */
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); /* Slightly heavier shadow for depth */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid {
  display: flex;
  justify-content: space-between; /* Ensures content is spaced out */
  align-items: center;
}

.navbar-collapse {
  flex-grow: 0; /* Prevents navbar from taking up too much space */
}

.navbar-nav {
  display: flex;
  padding-left: 0; /* Removes default padding */
  list-style: none; /* Removes list bullets */
  margin: 0; /* Removes default margin */
}

.nav-item {
  margin: 0 15px; /* Adds horizontal spacing between nav items */
}

/* Link Styles */
nav a {
  font-family: 'Lobster', cursive; 
  font-size: 1.2rem; 
  font-weight: bold;
  color: #F7E1BC;
  text-decoration: none;
  transition: color 0.3s, background-color 0.3s; 
  padding: 5px 10px; /* Adjusted padding for a more compact look */
  border-radius: 5px; 
}

nav a.router-link-exact-active, nav a:hover {
  color: #000;
  background-color: #B76E79;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column; /* Stack nav items vertically on smaller screens */
    margin-top: 10px;
  }

  .nav-item {
    margin: 5px 0; /* Reduced spacing for vertical layout */
  }
}
</style>

