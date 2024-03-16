<template>
  <div>
    <NavbarComp />
    <div class="background">
      <div class="row">
        <h1>Admin page</h1>
        <div class="row d-flex justify-content-evenly">
          <!-- Sort and add buttons with updated styles -->
          <div class="col">
            <button type="button" class="btn btn-submit sort bold bigger-text" @click="sortByName">Sort</button>
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
                <th scope="col">Quantity</th>
                <th scope="col">Edit Item</th>
              </tr>
            </thead>
            <tbody v-for="product in products" :key="product.prodID">
              <tr>
                <td>{{ product.prodID }}</td>
                <!-- Adjusted image size -->
                <td><img :src="product.prodUrl" width="100px" height="auto" :alt="product.prodUrl"></td>
                <td>{{ product.prodName }}</td>
                <td>R{{ product.productAmount }}</td>
                <td>{{ product.prodQuantity }}</td>
                <td>
                  <!-- Router links for update and delete buttons -->
                  <router-link :to="{ name: 'update', params: { id: product.prodID }}">
                    <button type="button" class="btn btn-success btn-lg bold bigger-text" @click="updateProduct(product)">Update</button>
                  </router-link><br><br>
                  <button class="btn btn-danger btn-lg bold bigger-text" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
         <!-- User table -->
         <div class="container">
          <table class="table table-hover" v-if="users">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-for="user in users" :key="user.id">
              <tr>
                <td>{{ user.id }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <!-- Router links for update and delete buttons -->
                  <router-link :to="{ name: 'updateUser', params: { id: user.id }}">
                    <button type="button" class="btn btn-success btn-lg bold bigger-text">Update</button>
                  </router-link><br><br>
                  <button class="btn btn-danger btn-lg bold bigger-text" @click="deleteUser(user.id)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    async deleteProduct(prodId) {
      const { success, msg } = await this.$store.dispatch('deleteProduct', prodId);
      if (success) {
        // Product deleted successfully
        // Optionally show a success message
        console.log(msg);
      } else {
        // Error occurred while deleting product
        // Show an error message
        console.error(msg);
      }
    },
    async deleteUser(userId) {
      const { success, msg } = await this.$store.dispatch('deleteUser', userId);
      if (success) {
        // User deleted successfully
        // Optionally show a success message
        console.log(msg);
      } else {
        // Error occurred while deleting user
        // Show an error message
        console.error(msg);
      }
    },
    async sortByName() {
      this.$store.dispatch('sortProductsByName');
    },
    navigateToAddProduct() {
      this.$router.push('/products/addProduct');
    },
    async updateProduct(product) {
      const { success, msg } = await this.$store.dispatch('updateProduct', product);
      if (success) {
        // Product updated successfully
        // Optionally show a success message
        console.log(msg);
      } else {
        // Error occurred while updating product
        // Show an error message
        console.error(msg);
      }
    },
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
    this.$store.dispatch('fetchUsers');
  }
};
</script>

<style scoped>
.background {
  background: #ffe5b4;
  height: 800px;
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
</style>