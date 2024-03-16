<template>
  <NavbarComp />
  <div class="row d-flex justify-content-center mt-5">
    <div v-if="product" class="ProdCont">
      <div class="card card-body justify-content-between boxx">
        <div class="text-center">
          <h1 class="mb-4">{{ product.prodName }}</h1>
          <img :src="product.prodUrl" class="card-img-top img-box mb-4" alt="Product Image">
          <p class="description">{{ product.description }}</p>
          <h3 class="price">R{{ product.productAmount }}</h3>
          <h4 class="mt-3">Select size</h4>
          <div class="btn-group mt-2" role="group" aria-label="Size selection">
            <button type="button" class="btn btn-dark" @click="selectSize('S')">S</button>
            <button type="button" class="btn btn-dark" @click="selectSize('M')">M</button>
            <button type="button" class="btn btn-dark" @click="selectSize('L')">L</button>
            <button type="button" class="btn btn-dark" @click="selectSize('XL')">XL</button>
            <button type="button" class="btn btn-dark" @click="selectSize('XXL')">XXL</button>
            <button type="button" class="btn btn-dark" @click="selectSize('XXXL')">XXXL</button>
          </div><br>
          <button type="button" class="btn btn-primary mt-3" @click="addToCart">Add to Cart</button>
        </div>
        <div class="text-center mt-3"> 
          <router-link to="/products" class="btn btn-dark">
            <i class="fa fa-arrow-left mr-2"></i>
            Go back
          </router-link>
        </div>
      </div>
    </div>
    <div class="row mx-auto" v-else>
      <Spinner />
    </div>
  </div>
  <br><br>
  <FooterComponent />
</template>

<script>
import NavbarComp from '@/components/NavbarComp.vue';
import Spinner from '@/components/Spinner.vue';
import FooterComponent from '@/components/FooterComp.vue';

export default {
  name: 'ProductView',
  components: {
    NavbarComp,
    Spinner,
    FooterComponent,
  },
  data() {
    return {
      selectedSize: null
    };
  },
  computed: {
    product() {
      return this.$store.state.product;
    }
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    addToCart() {
      if (this.selectedSize) {
        // Add product to cart with selected size
        const cartItem = {
          productId: this.product.id,
          size: this.selectedSize,
          quantity: 1 // You can set quantity based on user input if needed
        };
        // Dispatch action to add item to cart
        this.$store.dispatch('addToCart', cartItem);
        // Optional: Show confirmation message or redirect to cart page
        alert('Product added to cart!');
      } else {
        alert('Please select a size before adding to cart.');
      }
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
  flex-direction: column; /* Adjust flex direction */
  align-items: center; /* Align items in the center */
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

.mt-5 {
  margin-top: 5rem; 
}

/* Style for the "Go back" button */
.btn-dark {
  background-color: #343a40;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn-dark:hover {
  background-color: #212529;
}

.btn-dark i {
  margin-right: 5px;
}

/* Style for size selection buttons */
.btn-group .btn {
  margin-right: 5px;
}

.btn-primary {
  background-color: #B76E79;
  border-color: #B76E79;
}
.btn-primary:hover {
  background-color: #944953;
  border-color: #944953;
}

.btn-lg {
  padding: 10px 20px;
  font-size: 1.2rem;
}

/* Adjust margin for better spacing */
.mt-3 {
  margin-top: 1.5rem;
}
</style>