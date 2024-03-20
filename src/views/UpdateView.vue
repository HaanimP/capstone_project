<template>
  <div class="container">
    <div class="row">
      <h1 class="update-heading">Update Your Product</h1>
      <div class="col" v-if="product">
        <label for="productName" class="form-label">Product Name</label>
        <input type="text" class="form-control" v-model="productName" id="productName">
      </div>
      <div class="col">
        <label for="productPrice" class="form-label">Product Price</label>
        <input type="number" class="form-control" v-model="productPrice" id="productPrice">
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label">Product Description</label>
        <input type="text" class="form-control" v-model="productDescription" id="productDescription">
      </div>
      <div class="mb-3">
        <label for="productCategory" class="form-label">Product Category</label>
        <input type="text" class="form-control" v-model="productCategory" id="productCategory">
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image Url</label>
        <input type="text" class="form-control" v-model="imageUrl" id="imageUrl">
      </div>
      <button class="btn btn-success update-btn" type="button" @click="updatingProduct">UPDATE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateVIew",

  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  data() {
    return {
      productName: "",
      productPrice: "",
      productDescription: "",
      productCategory: "", // Added property for product category
      imageUrl: "",
    };
  },
  methods: {
    updatingProduct() {
      const updatedProduct = {
        prodID: this.product.prodID,
        prodName: this.productName,
        productAmount: this.productPrice,
        prodCategory: this.productCategory, // Pass product category to update
        description: this.productDescription,
        prodUrl: this.imageUrl,
      };
      this.$store.dispatch("updateProduct", updatedProduct);
      this.$router.push("/admin");
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params);
  },
};
</script>

<style scoped>
.update-heading {
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-label {
  font-size: 18px;
  color: #fff;
  font-weight: bold;
}

.form-control {
  font-size: 16px;
}

.update-btn {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}

/* .container {
  background-image: url("https://i.ibb.co/cN7x6bJ/background-7.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 50vh; */
/* } */
</style>
