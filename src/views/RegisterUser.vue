<template>
    <div>

        <div class="row">
            <h1>Register A user</h1>

            <div class="col">
                <label for="firstNameInput" class="form-label">FirstName</label>
                <input v-model="firstName" type="text" class="form-control" id="firstNameInput">
            </div>
            <div class="col">
                <label for="lastNameInput" class="form-label">Last Name</label>
                <input v-model="lastName" type="text" class="form-control" id="lastNameInput">
            </div>
            <div class="mb-3">
                <label for="ageInput" class="form-label">Age</label>
                <input v-model="age" type="number" class="form-control" id="ageInput">
            </div>
            <div class="mb-3">
                <label for="emailInput" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" id="emailInput">
            </div>
            <div class="mb-3">
                <label for="passwordInput" class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control" id="passwordInput">
            </div>
            <div class="mb-3">
                <label for="roleInput" class="form-label">Role</label>
                <input v-model="role" type="text" class="form-control" id="roleInput">
            </div>

            <button class="btn btn-success" @click="addUser"> Add user </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddUsersComp',
    data() {
        return {
            firstName: null,
            lastName: null,
            age: null,
            email: null,
            password: null,
            role: null
        };
    },
    methods: {
         addUser() {
            const userData = {
                firstName: this.firstName,
                lastName: this.lastName,
                userAge: this.age,
                emailAdd: this.email,
                userPwd: this.password,
                userRole: this.role
            };
                 this.$store.dispatch('register', userData);

        }
    }
}
</script>

<style scoped></style>