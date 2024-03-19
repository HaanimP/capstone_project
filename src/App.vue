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
::-webkit-scrollbar {
  display: none;
}
</style>

