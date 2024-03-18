<template>
  <NavbarComp />
  <div class="background">
    <div class="container">

      <div class="row d-flex justify-content-between align-items-center mb-4">
        <!-- Sort Button -->
        <div>
          <button type="button" class="btn btn-submit sort" @click="sortByPrice">Sort by Price</button><br><br>
          <button type="button" class="btn btn-submit sort" @click="sortByName">Sort by Name</button><br><br>
        </div>

        <!-- Search Input -->
        <div>
          <input type="text" style="height: 40px;" placeholder="Search" class="search"/>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
        <template v-if="products">
          <Card class="card m-2" style="width: 16rem;" v-for="product in products" :key="product.products_id">
            <!-- Card content here -->
            <template #cardImgTop>
              <img class="card-img-top" style="height: 200px;" :src="product.prodUrl" :alt="product.prodName"/>
            </template>
            <template #cardHeader>
              <h4 class="card-title">{{ product.prodName }}</h4>
            </template>
            <template #cardBody>
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Quantity: {{ product.prodQuantity }}
              </p>
              <p class="card-text text-dark bg-gradient bg-dark-subtle p-2">
                Amount: R{{ product.productAmount }}
              </p>
              <router-link :to="{ name: 'productView', params: { id: product.prodID } }" class="view-more">View More</router-link>
            </template>
          </Card>
        </template>
        <template v-else>
          <Spinner/>
        </template>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";
import FooterComponent from "@/components/FooterComp.vue"

export default {
  name: "ProductsComp",
  components: {
    NavbarComp,
    Card,
    Spinner, 
    FooterComponent
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    sortByPrice() {
      this.$store.dispatch('sortProductsByPrice');
    },
    sortByName() {
      this.$store.dispatch('sortProductsByName');
    },
  }
};
</script>

<style scoped>
.search {
  background-color: #f7e1bc;
  border: 2px solid #f7e1bc;
  width: 100%;
  border-radius: 0.5em;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5em 1em; /* Add padding for better appearance */
  transition: background-color 0.3s, border-color 0.3s; /* Add transition for smooth hover effect */
}

.search:hover {
  background-color: #fed7a6; /* Change background color on hover */
}

.sort {
  width: 100%;
  background-color: #f7e1bc;
  border: 2px solid #f7e1bc;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5em 1em; /* Add padding for better appearance */
  transition: background-color 0.3s, border-color 0.3s; /* Add transition for smooth hover effect */
}

.sort:hover {
  background-color: #fed7a6; /* Change background color on hover */
}

.background {
  background: #B76E79;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}

.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card .card-img-top {
  object-fit: cover;
  height: 200px;
}

.card .card-title,
.card .card-text {
  font-weight: bold;
  font-size: 1.2rem;
}

.view-more {
  color: #B76E79;
  font-weight: bold;
}

.view-more:hover {
  text-decoration: underline;
}

</style>