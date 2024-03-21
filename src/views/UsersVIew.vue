<template>
  <div>
    <NavbarComp />
    <div class="background">
      <div class="row">
        <div class="container">
          <h1>Users</h1>

          <div class="row d-flex justify-content-evenly">
            <!-- Sort and add buttons -->
            <div class="col">
              <button type="button" class="btn btn-submit sort">Sort</button>
            </div>
            <div class="col">
              <router-link to="/users/addUser" class="nav-link search">
                <button class="btn addItems"><RouterLink to="/signup" class="nav-link">Add</RouterLink></button>
              </router-link>
            </div>

            <!-- Navigation links -->
            <nav class="navbar d-flex background-img navbar-expand-lg">
              <div class="container-fluid justify-content-center">
                <button class="navbar-toggler collor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <ul class="navbar-nav bg-light collor">
                    <li class="nav-item">
                      <RouterLink to="/admin" class="nav-link">Products</RouterLink>
                    </li>
                    <li class="nav-item">
                      <RouterLink to="/users" class="nav-link active">Users</RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <!-- User table -->
            <div class="row d-flex justify-content-center" v-if="users">
              <div class="container table-responsive py-5">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">User No</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Actions</th> <!-- Added actions column -->
                    </tr>
                  </thead>
                  <tbody v-for="user in users" :key="user.userID">
                    <tr>
                      <th scope="row">{{ user.userID }}</th>
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.lastName }}</td>
                      <td>{{ user.email }}</td>
                      <td>
                        <RouterLink :to="{ name: 'userUpdate', params: { id: user.userID } }">
                          <button type="button" class="btn btn-success">Edit</button>
                        </RouterLink>
                        <button type="button" class="btn btn-danger" @click="deleteUser(user.userID)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row mx-auto" v-else>
              <SpinnerComp/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import SpinnerComp from "@/components/Spinner.vue";

export default {
  name: "UsersComp",
  components: {
    NavbarComp,
    SpinnerComp,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch("deleteUser", userID);
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style scoped>
.background {
  background: #ffe5b4;
  background-size: cover;
  background-blend-mode: soft-light;
  background-position: center center;
}

.collor {
  border-radius: 2rem;
}

.sort {
  width: 8rem;
  background-color: #f7e1bc;
  border: 1px solid black;
}

.addItems {
  width: 8rem;
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  border-radius: 0.5em;
}

.search {
  width: 8rem;
  background-color: #f7e1bc;
  border: 1px solid #f7e1bc;
  border-radius: 0.5em;
}

.btn-success,
.btn-danger {
  font-size: 16px;
  font-weight: bold;
  padding: 5px 20px;
}

.bold {
  font-weight: bold;
}

.bigger-text {
  font-size: 16px;
  font-weight: bold;
}
</style>