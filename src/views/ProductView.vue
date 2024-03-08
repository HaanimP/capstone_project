<template>
    <div class="row d-flex ">
        <div v-if="product" class="ProdCont text-center mt-3">
            <div class="justify-content-between boxx">
                <div class=" ">
                    <h1 class=""> {{ product.prodName }}</h1>
                    
                    <img :src="product.prodUrl" class="card-img-top img-box " alt="Pro">
                    
            
                </div>
            
                <div class="">
            
                    <h5 class="w-25 mx-auto">{{ product.description }}</h5>
                    
                    <h3>R{{ product.productAmount }}</h3>
            
                </div>
            

            </div>
            
            <router-link to="/products" class="nav-link link-light"> <a class="btn btn-light  bg-black text-white m-3 " href="#"
                    role="button">Go back</a></router-link>
        </div>
        <div class="row mx-auto" v-else>
            <Spinner />
        </div>

    </div>
</template>


<script>
import Spinner from '@/components/Spinner.vue';
export default {
    name : 'ProductView',
    components: {
        Spinner
    },
    computed: {
        product() {
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    },


}
</script>


<style scoped>
.img-box{
    box-shadow: .2vw .2vw .2vw .2vw ;
    height: 200px;
    width: 200px;
}
.boxx{
    box-shadow: .2vw .2vw .2vw .2vw;
}

</style>