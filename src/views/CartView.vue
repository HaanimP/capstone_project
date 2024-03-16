<template>
    <div>
      <NavbarComp/>
      <div class="container mt-5">
        <!-- Cart items display -->
        <div v-if="cartItems.length > 0">
          <div class="row">
            <div class="col-md-12">
              <div class="panel panel-info panel-shadow">
                <div class="panel-heading">
                  <h3 class="text-center d-flex align-items-center">
                    <img class="profile-picture mr-3" src="https://i.ibb.co/VvCrV0p/profile.jpg">
                  </h3>
                </div>
                <div class="panel-body"> 
                  <div class="table-responsive">
                    <table class="table">
                      <!-- Table headers -->
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Description</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Total</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <!-- Table body -->
                      <tbody>
                        <!-- Iterate over cartItems to display each item -->
                        <tr v-for="(item, index) in cartItems" :key="index">
                          <td><img :src="item.image" class="img-cart"></td>
                          <td>
                            <strong>{{ item.name }}</strong>
                            <p>Size: {{ item.size }}</p>
                          </td>
                          <td>
                            <form class="form-inline">
                              <input class="form-control" type="text" v-model="item.quantity">
                              <button rel="tooltip" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                              <a href="#" class="btn btn-primary"><i class="fa fa-trash-o"></i></a>
                            </form>
                          </td>
                          <td>{{ item.price }}</td>
                          <td>{{ item.price * item.quantity }}</td>
                          <td>
                            <button class="btn btn-danger btn-sm" @click="removeFromCart(index)"><i class="fa fa-trash"></i> Remove</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- Cart total -->
                  <div class="text-right">
                    <p><strong>Total Product:</strong> {{ totalProducts }}</p>
                    <p><strong>Total Shipping:</strong> $2.00</p>
                    <p><strong>Total:</strong> {{ total }}</p>
                  </div>
                  <!-- Continue shopping and Next buttons -->
                  <div class="row">
                    <div class="col-md-6">
                      <a href="#" class="btn btn-success btn-block"><i class="fa fa-shopping-cart"></i> Continue Shopping</a>
                    </div>
                    <div class="col-md-6">
                      <a href="#" class="btn btn-primary btn-block"><i class="fa fa-chevron-right"></i> Next</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- If cart is empty -->
        <div v-else>
          <p>Your cart is empty</p>
        </div>
      </div>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions, mapGetters } from 'vuex';
  import NavbarComp from "@/components/NavbarComp.vue";
  import FooterComponent from "@/components/FooterComp.vue";
  
  export default {
    name: "CartView",
    components: {
      NavbarComp,
      FooterComponent,
    },
    computed: {
      ...mapState(['cartItems']), // Map cartItems from Vuex store state
      ...mapGetters(['totalProducts', 'total']), // Map getters for totalProducts and total
    },
    methods: {
      ...mapActions(['removeFromCart']), // Map removeFromCart action from Vuex store
    },
    created() {
      // Fetch cart items when component is created
      this.$store.dispatch('fetchCartItems');
    }
  }
  </script>
  
  <style scoped>
  .img-cart {
    display: block;
    width: 50px;
    height: auto;
    margin: 0 auto;
    border-radius: 50%;
  }
  
  .panel-shadow {
    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;
  }
  
  .profile-picture {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }
  </style>  