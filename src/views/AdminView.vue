<template>
  <div>
    <NavbarComp />
    <div class="background">
      <div class="row">
        <h1>Admin page</h1>
        <div class="row d-flex justify-content-evenly">
          <!-- Sort and add buttons with updated styles -->
          <div class="col">
            <button type="button" class="btn btn-submit sort" @click="sortByName">Sort</button>
          </div>
          <div class="col">
            <button type="button" class="btn addItems bold bigger-text" @click="navigateToAddProduct">Add</button>
          </div>
          <!-- Navigation links -->
          <nav class="navbar d-flex background-img bg navbar-expand-lg ">
            <div class="container-fluid  justify-content-center">
              <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon collor"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav bg-light collor">
                  <!-- Updated styles for navigation links -->
                  <li class="nav-item">
                    <router-link to="#" class="nav-link bold bigger-text" aria-current="page">Products</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/users" class="nav-link bold bigger-text">Users</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <!-- Product table -->
        <div class="container">
          <table class="table table-hover" v-if="products">
            <thead>
            <tr>
              <th scope="col">Item No</th>
              <th scope="col">Item Image</th>
              <th scope="col">Item Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit Item</th>
            </tr>
          </thead>
          <tbody v-for="product in products" :key="product.prodID">
            <tr>
              <th scope="row">{{ product.prodID }}</th>
              <td><img :src="product.prodUrl" width="80px" height="50px" :alt="product.prodUrl"></td>
              <td>{{ product.prodName }}</td>
              <td>R{{ product.productAmount }}</td>
              <td>


                <router-link :to="{name : 'update', params:{id:product.prodID}    }">
                  <button type="button" class="btn btn-success">update  </button>
                </router-link>

                <button class="btn btn-danger" @click="deleteProduct(product.prodID)">Delete</button>

              </td>
            </tr>

          </tbody>
          </table>
        </div>
         <!-- User table -->
         <div class="container">
          <table class="table table-hover" v-if="users">
            <!-- Table body -->
          </table>
        </div>
      </div>
    </div>
  </div><!-- <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> -->
  <FooterComponent/>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from '@/components/FooterComp.vue';

export default {
  name: "AdminView",
  components: { 
    NavbarComp,
    FooterComponent
   },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    sortByName() {
      const order = 'asc'; 
      this.$store.dispatch('sortProductsByName', order);
    },
    navigateToAddProduct() {
      this.$router.push('/products/addProduct');
    },
    async deleteProduct(prodID) {
    try {
      const response = await this.$store.dispatch('deleteProduct', prodID);
      if (response.success) {
        // Optionally show a success message or perform other actions
      } else {
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      // Handle error, show error message, etc.
    }
  },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  },
};
</script>

<style scoped>
.background {
  height: 240vh;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}

table {
  opacity: 0.9;
  font-size: 16px; /* Adjust font size */
}

.collor {
  border-radius: 2rem;
}

.modal-dialog {
  pointer-events: unset !important;
}

.modal {
  display: none;
}

/* Updated styles for sort and add buttons */
.sort {
  width: 6rem;
  background-color: #f7e1bc;
  border: 1px solid black;
  font-weight: bold;
  font-size: 18px;
}

.addItems {
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  width: 6rem;
  border-radius: 0.5em;
  font-weight: bold;
  font-size: 18px;
}

/* Styles for update and delete buttons */
.btn-success {
  font-size: 18px;
  font-weight: bold;
  padding: 5px 20px;
}

.btn-danger {
  font-size: 18px;
  font-weight: bold;
  padding: 5px 20px;
}

/* Styles for navigation links */
.bold {
  font-weight: bold;
}

.bigger-text {
  font-size: 18px;
  font-weight: bold; /* Added bold text */
}

@media screen and (max-width: 768px) {
  .background {
    height: 260vh; /* Adjusted height for smaller screens */
  }
}

@media screen and (max-width: 1024px) {
  .background {
    height: 135vh; /* Adjusted height for tablet-sized screens */
  }
}
</style>