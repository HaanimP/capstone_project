<template>
  <div class="container">
    <div class="row">
      <h1>Update User</h1>

      <div class="col" v-if="user">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" v-model="firstName" id="firstName">
      </div>
      <div class="col">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" v-model="lastName" id="lastName">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" v-model="email" id="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" v-model="password" id="password">
      </div>
      <button class="btn btn-success" type="button" @click="updateUser">UPDATE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateUser",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null, // Added emailAdd field
      password: null, // Added password field
    };
  },
  methods: {
  async updateUser() {
    try {
      const userId = this.user.userID; // Assuming you have a user object with userID property
      const updatedUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        emailAdd: this.emailAdd,
        password: this.password,
      };
      await this.$store.dispatch('updateUser', { id: userId, data: updatedUser });
      // Optionally, you can navigate to another route after successful update
      // this.$router.push('/users');
    } catch (error) {
      console.error("Failed to update user:", error);
      // Handle error
    }
  },
},
  mounted() {
    // Fetch user data before updating
    this.$store.dispatch('fetchUser', this.$route.params);
  },
};
</script>

<style scoped>
/* Add your scoped CSS styles here */
</style>
