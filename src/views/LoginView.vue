<template>
    <div>
        <h1>THIs is a login </h1>


        <div class="row d-flex justify-content-center" v-if="users">
          <div class="container table-responsive py-5">
            <table class="table table-hover" >
              <thead>
                <tr>
                  <th scope="col">User No</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody v-for="userss in users" :key="userss.prodID">
                <tr>
                  <th scope="row">{{ userss.userID }}</th>
                  <td>
                    {{ userss.firstName }}
                  </td>
                  <td>{{ userss.lastName }}</td>
                  <td>{{ userss.userAge }}</td>
                  <td>{{ userss.emailAdd }}</td>
                  <td>{{ userss.userRole }}</td>
                  <td>
                <button type="button" class="btn btn-success">edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteUser">delete</button>

              </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row mx-auto" v-else>
          <Spinner />
        </div>

        <div class="row">
            <RouterLink to="/admin">

                <button> back</button>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'LoginViewComp',

        computed: {
    users() {
      return this.$store.state.users;
    },


  },


  mounted() {
    this.$store.dispatch("fetchUsers")
    },
    }
</script>

<style scoped>

</style>