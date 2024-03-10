<template>
    <div class="background">
      <div class="row">
        <NavbarComp />
  
        <h1>Admin page</h1>
  
        <div class="row d-flex justify-content-evenly">
          <!-- must have sort and sear button displayed flex, -->
          <div class="col">
            <button type="button" class="btn btn-submit sort " @click="sortByName">Sort</button>
  
          </div>
          <div class="col">
            <RouterLink to="/products/addProduct">
            <button type="button" class="btn addItems">
              add
            </button>
            </RouterLink>
  
          </div>
  
  
          <nav class="navbar d-flex background-img bg navbar-expand-lg ">
            <div class="container-fluid  justify-content-center">
  
              <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon collor"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav bg-light collor">
                  <li class="nav-item">
                    <RouterLink to="#" class="  nav-link " aria-current="page">Products</RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink to="/users" class="  nav-link ">Users</RouterLink>
                  </li>
  
                </ul>
              </div>
  
  
            </div>
          </nav>
        </div>
  
  
  
        <div class="container">
          <table class="table table-hover" v-if="products">
            <thead>
              <tr>
                <th scope="col">Item No</th>
                <th scope="col">Item Image</th>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit Item</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.prodID">
              <tr>
                <th scope="row">{{ product.prodID }}</th>
                <td><img :src="product.prodUrl" width="80px" height="50px" :alt="product.prodUrl"></td>
                <td>{{ product.prodName }}</td>
                <td>R{{ product.productAmount }}</td>
                <td>{{ product.prodQuantity }}</td>
                <td>
  
  
                  <router-link :to="{name : 'update', params:{id:product.prodID}    }">
                    <button type="button" class="btn btn-success">update  </button>
                  </router-link>
  
                  <button class="btn btn-danger" @click="deletingProduct(product.prodID)">Delete</button>
  
                </td>
              </tr>
  
            </tbody>
          </table>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarComp from "@/components/NavbarComp.vue";
  
  export default {
    name: "AdminView",
    components: { NavbarComp },
  
    computed: {
      products() {
        return this.$store.state.products
      },
      product(){
        return this.$store.state.product
      }
  
  
    },
  
    methods: {
      deletingProduct(productId) {
        this.$store.dispatch('deleteProduct', productId);
      },
  
      sortByPrice() {
        this.$store.dispatch('sortProductsByPrice');
      },
  
      sortByName() {
        this.$store.dispatch('sortProductsByName');
      }
    },
  
    mounted() {
      this.$store.dispatch('fetchProducts')
    },
  
  
  
  
  };
  </script>
  
  <style scoped>
  .background {
    background: #ffe5b4;
    height: 800px;
    background-size: cover;
    /* opacity: .99; */
    background-blend-mode: soft-light;
    background-position: center center;
  }
  
  table {
    opacity: 0.9;
  }
  
  .collor {
    border-radius: 2rem;
  }
  
  .modal-dialog {
    pointer-events: unset !important;
  }
  
  .modal{
    display: none;
  }
  
  .sort {
    width: 6rem;
    background-color: #f7e1bc;
    border: 1px solid black;
  }
  
  .addItems {
    background-color: #f7e1bc;
    border: 1px solid #f7e1bc;
    width: 6rem;
    border-radius: 0.5em;
  }</style>