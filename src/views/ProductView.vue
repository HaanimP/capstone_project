<template>
    <div class="row d-flex justify-content-center">
      <div v-if="product" class="ProdCont mt-5">
        <div class="card card-body justify-content-between boxx">
          <div class="text-center">
            <h1 class="mb-4">{{ product.prodName }}</h1>
            <img :src="product.prodUrl" class="card-img-top img-box mb-4" alt="Product Image">
            <p class="description">{{ product.description }}</p>
          </div>
          <div class="text-center">
            <h3 class="price">R{{ product.productAmount }}</h3>
            <router-link to="/products" class="btn btn-dark mt-4">Go back</router-link>
          </div>
        </div>
      </div>
      <div class="row mx-auto" v-else>
        <Spinner />
      </div>
    </div>
  </template>
  
  <script>
  import Spinner from '@/components/Spinner.vue';
  
  export default {
    name: 'ProductView',
    components: {
      Spinner
    },
    computed: {
      product() {
        return this.$store.state.product;
      }
    },
    mounted() {
      this.$store.dispatch('fetchProduct', this.$route.params);
    }
  }
  </script>
  
  <style scoped>
  .ProdCont {
    max-width: 800px;
  }
  
  .img-box {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .boxx {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #ffe5b4;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .description {
  margin-bottom: 20px;
  color: #343a40;
  font-size: 18px; 
  line-height: 1.6; 
}
  
  .price {
    font-size: 24px;
    font-weight: bold;
    color: #212529;
  }
  </style>
  