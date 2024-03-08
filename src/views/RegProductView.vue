<template>
    <div>
      <div class="row">
        <h1>Add Product</h1>
  
        <div class="col">
          <label for="productNameInput" class="form-label">Product Name</label>
          <input v-model="prodName" type="text" class="form-control" id="productNameInput">
        </div>
        <div class="col">
          <label for="productNameInput" class="form-label">Product Quantity</label>
          <input v-model="prodQuantity" type="text" class="form-control" id="productNameInput">
        </div>
        <div class="col">
          <label for="productPriceInput" class="form-label">Price</label>
          <input v-model="productAmount" type="number" class="form-control" id="productPriceInput">
        </div>
        <div class="mb-3">
          <label for="productDescriptionInput" class="form-label">Description</label>
          <input v-model="description" type="text" class="form-control" id="productDescriptionInput">
        </div>
        <div class="mb-3">
          <label for="productCategoryInput" class="form-label">Image Url</label>
          <input v-model="prodUrl" type="text" class="form-control" id="productCategoryInput">
        </div>
        <button class="btn btn-success" @click="addProduct">Add Product</button>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegisterProduct',
  
    data() {
      return {
        prodName: null,
        prodQuantity: null,
        productAmount : null,
        description: null,
        prodUrl: null
      };
    },
    
    methods: {
      addProduct() {
        const productData = {
          prodName: this.prodName,
          prodQuantity : this.prodQuantity,
          productAmount: this.productAmount,
          description: this.description,
          prodUrl: this.prodUrl
        };
  
        this.$store.dispatch('addProduct', productData);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>