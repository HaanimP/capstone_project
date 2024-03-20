<template>
  <div>
    <div class="row">
      <h1 class="modal-title">Add Product</h1>

      <div class="col">
        <label for="productNameInput" class="form-label">Product Name</label>
        <input v-model="prodName" type="text" class="form-control" id="productNameInput">
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
        <label for="productCategoryInput" class="form-label">Category</label>
        <input v-model="prodCategory" type="text" class="form-control" id="productCategoryInput">
      </div>
      <div class="mb-3">
        <label for="productImageUrlInput" class="form-label">Image Url</label>
        <input v-model="prodUrl" type="text" class="form-control" id="productImageUrlInput">
      </div>
      <button class="btn btn-success" @click="addProduct">Add Product</button><br><br>
      <button class="btn btn-secondary" @click="goBack">Go Back</button>

    </div>

    <!-- Toast Notification -->
    <div v-if="showToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Product Added</strong>
        <button type="button" class="btn-close" @click="showToast = false"></button>
      </div>
      <div class="toast-body">
        Product was successfully added.
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'RegisterProduct',

  data() {
    return {
      prodName: null,
      productAmount: null,
      description: null,
      prodCategory: null,
      prodUrl: null,
      showToast: false // Control visibility of the toast notification
    };
  },
  
  methods: {
    addProduct() {
      const productData = {
        prodName: this.prodName,
        productAmount: this.productAmount,
        description: this.description,
        prodCategory: this.prodCategory,
        prodUrl: this.prodUrl
      };

      this.$store.dispatch('addProduct', productData).then(() => {
        // Show toast notification when product is added successfully
        this.showToast = true;
      });
    },
    goBack() {
      // Navigate back to the admin page
      this.$router.push('/admin');
    }
  }
};
</script>

<style scoped>
.modal-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-label {
  font-size: 18px;
  font-weight: bold;
}

.form-control {
  font-size: 16px;
}

.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
}
</style>