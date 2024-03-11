<template>
    <NavbarComp />
  <div class="background">
    <div class="row">
    </div>

    <div class="container">
      <h1>Products</h1>

      <div class="row d-flex justify-content-between align-items-center mb-4">
        <!-- Sort Button -->
        <div>
          <button type="button" class="btn btn-submit sort">Sort</button>
        </div>

        <!-- Search Input -->
        <div>
          <input type="text" style="height: 40px;" placeholder="Search" class="search"/>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <template v-if="products">
          <Card class="card m-2" style="width: 16rem;" v-for="product in products" :key="product.products_id">
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
              <router-link :to="{ name: 'productView', params: { id: product.prodID } }">View More</router-link>
            </template>
          </Card>
        </template>
        <template v-else>
          <Spinner/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import Card from "@/components/Card.vue";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "ProductsComp",
  components: {
    NavbarComp,
    Card,
    Spinner
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped>
.search {
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  width: 100%;
  border-radius: 0.5em;
  text-align: center;
}

.sort {
  width: 100%;
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
}

.background {
  background: #ffe5b4;
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
</style>
