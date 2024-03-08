<template>
    <div class="container">
      <div class="row">
        <h1>Update your product</h1>
        <div class="col" v-if="product">
          <label for="productName" class="form-label">Product Name</label>
          <input type="text" class="form-control" v-model="productName" id="productName">
        </div>
        <div class="col">
          <label for="productPrice" class="form-label">Product Price</label>
          <input type="number" class="form-control" v-model="productPrice" id="productPrice">
        </div>
        <div class="mb-3">
          <label for="productQuantity" class="form-label">Product Quantity</label>
          <input type="number" class="form-control" v-model="productQuantity" id="productQuantity">
        </div>
        <div class="mb-3">
          <label for="productDescription" class="form-label">Product Description</label>
          <input type="text" class="form-control" v-model="productDescription" id="productDescription">
        </div>
        <div class="mb-3">
          <label for="imageUrl" class="form-label">Image Url</label>
          <input type="text" class="form-control" v-model="imageUrl" id="imageUrl">
        </div>
        <button class="btn btn-success" type="button" @click="updatingProduct">UPDATE</button>
      </div>
    </div>
  </template>

<script>
export default {
    name: "UpdateVIew",

    computed: {
        product() {
            return this.$store.state.product
        },
    },
    methods: {
     updatingProduct() {
      const updatedProduct = {
        prodID: this.product.prodID, 
        prodName: this.productName,
        productAmount: this.productPrice,
        prodQuantity: this.productQuantity,
        description: this.productDescription,
        prodUrl: this.imageUrl
      };
         this.$store.dispatch('updateProduct', updatedProduct);
        this.$router.push('/admin');

    }
  },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
};
</script>

<style scoped></style>
