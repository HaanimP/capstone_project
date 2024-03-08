<template>
    <div class="container">
      <div class="row">
        <h1>Update User</h1>

        <div class="col" v-if="user">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" v-model="firstName" id="firstName">
        </div>
        <div class="col">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" v-model="firstName" id="lastName">
        </div>
        <div class="col">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" v-model="lastName" id="lastName">
        </div>
        <div class="mb-3">
          <label for="userAge" class="form-label">Age</label>
          <input type="number" class="form-control" v-model="userAge" id="userAge">
        </div>
        <div class="mb-3">
          <label for="emailAdd" class="form-label">Email</label>
          <input type="email" class="form-control" v-model="emailAdd" id="emailAdd">
        </div>
        <div class="mb-3">
          <label for="userRole" class="form-label">Role</label>
          <input type="text" class="form-control" v-model="userRole" id="userRole">
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
        userAge: null,
        emailAdd: null,
        userRole: null,
      };
    },
    methods: {
      updateUser() {
        const updatedUser = {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          emailAdd: this.emailAdd,
          userRole: this.userRole,
        };
        this.$store.dispatch('updateUser', updatedUser);
        // this.$router.push('/users');
      },
    },
    mounted() {
      this.$store.dispatch('fetchUser', this.$route.params);
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped CSS styles here */
  </style>
