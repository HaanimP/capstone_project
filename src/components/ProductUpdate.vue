<template>
    <div>

        <h1> user : </h1>

        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">product ID</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">product Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Product Amount</label>
    <input type="number" class="form-control" id="exampleInputPassword1">
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    </div>
</template>

<script>
    export default {
        name : 'UpdateUser',

        computed : {
            update(){
                return this.$store.state.product
            }
        },

        mounted() {
             this.$store.dispatch('updateUser', this.$route.params)
        }
    }

    
</script>

<style lang="scss" scoped>

</style>