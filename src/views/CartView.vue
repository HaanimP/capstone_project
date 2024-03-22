<template>
  <NavbarComp/>
  <div>
    <div class="container mt-5">
      <main class="main2">
        <table class="main2">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartItems" :key="item.prodID">
              <td>{{ index + 1 }}</td>
              <td><img :src="item.prodURL" :alt="item.prodName" style="max-width: 50px;"></td>
              <td>{{ item.prodName }}</td>
              <td>R{{ item.productAmount.toFixed(2) }}</td>
              <td>
                <input type="number" class="quantity-input" placeholder="Qty" min="1" v-model.number="item.quantity">
              </td>
              <td>
                <button @click="removeFromCart(index)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <div id="totalAmount">Total Amount: R{{ totalAmount }}</div><br>
      <div>
        <button id="payButton" @click="handlePayment">Pay Now</button>
      </div>
    </div>
  </div>
  <FooterComponent/>
</template>
  
<script>
import NavbarComp from "@/components/NavbarComp.vue";
import FooterComponent from "@/components/FooterComp.vue";
import axios from 'axios';
import { mapActions, mapState } from 'vuex'; // Import mapState for accessing Vuex state
import swal from 'sweetalert';

const haanimsURL = 'https://capstone-project-h6pk.onrender.com';

export default {
  name: "CartView",
  components: {
    NavbarComp,
    FooterComponent,
  },
  data() {
    return {
      // Assuming you might still need product for other functionalities
      product: null,
    };
  },
  computed: {
    // Use mapState if you are storing the cart items and user authentication state in Vuex
    ...mapState(['cartItems', 'isAuthenticated', 'user']),
    
    totalAmount() {
      // Compute the total amount from cartItems state
      return this.cartItems.reduce((acc, item) => {
        const price = Number(item.productAmount) || 0;
        const quantity = Number(item.quantity) || 0;
        return acc + price * quantity;
      }, 0).toFixed(2);
    },
  },
  methods: {
    // Use spread operator for mapping Vuex actions directly
    ...mapActions(['addToCart', 'removeFromCart', 'fetchCartItems']), // Assuming these actions are defined in Vuex

    async addProductToCart(product) {
      if (!this.isAuthenticated) {
        console.error("User not authenticated");
        swal("Error", "You need to be logged in to add items to the cart.", "error");
        return;
      }
      const userID = this.user.userID; // Adjust according to how user ID is stored
      const { prodID, quantity } = product;
      try {
        await this.addToCart({ userID, prodID, quantity });
        console.log("Product added to cart");
        // Optionally, refresh the cart items after adding a new item
        this.fetchCartItems(userID);
      } catch (error) {
        console.error('Error adding to cart:', error);
        swal("Error", "An error occurred while adding the product to the cart.", "error");
      }
    },

    handlePayment() {
      // Handle payment logic here
    },

    async fetchProduct(prodID) {
      try {
        const response = await axios.get(`${haanimsURL}/products/${prodID}`);
        if (response.data) {
          this.product = response.data; // Adjust this line if the response structure is different
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        swal("Error", "An error occurred when retrieving the product.", "error");
      }
    }
  },
  mounted() {
    const prodID = this.$route.params.prodID;
    this.fetchProduct(prodID);
    // Optionally, if the user is logged in, fetch cart items on component mount
    if (this.isAuthenticated) {
      this.fetchCartItems(this.user.userID);
    }
  },
};
</script>

<style scoped>
.main2 {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

main.main2, .main2 th, .main2 td {
  background-color: #f9f9f9;
  color: #333;
}

.main2 th, .main2 td {
  border: 1px solid #eaeaea;
  padding: 12px;
  text-align: left;
}

.main2 th {
  background-color: #b86b77;
  color: #fff;
  font-size: 1.05em;
}

.main2 tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Hover effect for rows */
.main2 tr:hover {
  background-color: #ddd;
}

/* Pay button */
#payButton {
  display: block;
  width: 200px;
  background: linear-gradient(to right, #b86b77 0%, #d99b6c 100%);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  margin: 20px auto; 
  transition: background-color 0.2s, transform 0.2s;
}

#payButton:hover {
  background-color: #218838; 
  transform: scale(1.05);
}

.quantity-input {
  width: 80px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  text-align: center;
}

#totalAmount {
  background: #d99b6c;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
}

@media only screen and (max-width: 600px) {
  .main2 th, .main2 td {
    padding: 10px;
  }
  #payButton {
    width: 100%; 
  }
}
</style>