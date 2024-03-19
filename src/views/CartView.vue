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
              <th>Action</th> <!-- Column for 'Add to Cart' action -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td>{{ index + 1 }}</td>
              <td><img :src="item.prodURL" alt="item.prodName" style="max-width: 50px;"></td>
              <td>{{ item.prodName }}</td>
              <td>R{{ item.productAmount.toFixed(2) }}</td>
              <td>
                <input type="number" class="quantity-input" placeholder="Qty" min="1" v-model.number="item.quantity">
              </td>
              <td>
                <button @click="addToCart(item, item.quantity)">Add to Cart</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <div id="totalAmount">Total Amount: R{{ totalAmount.toFixed(2) }}</div><br>
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

export default {
  name: "CartView",
  components: {
    NavbarComp,
    FooterComponent,
  },
  data() {
    return {
      products: [/* Array of product objects */],
      bought: JSON.parse(localStorage.getItem("bought")) || [],
    };
  },
  computed: {
  totalAmount() {
    if (!this.bought || !this.bought.length) {
      return 0;
    }
    const total = this.bought.reduce((acc, item) => {
      const price = Number(item.productAmount);
      const quantity = Number(item.quantity || 0);
      return acc + (price * quantity);
    }, 0);
    return total ? total.toFixed(2) : '0.00';
  },
},
  methods: {
    addToCart(product, quantity) {
      const productIndex = this.bought.findIndex(item => item.prodID === product.prodID);
      if (productIndex === -1) {
        // Product not in cart, add new entry with specified quantity
        this.bought.push({ ...product, quantity });
      } else {
        // Product already in cart, update the quantity
        this.bought[productIndex].quantity += quantity;
      }
      localStorage.setItem("bought", JSON.stringify(this.bought));
      alert(`${quantity} x ${product.prodName} added to the cart.`);
    },
  },
}
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