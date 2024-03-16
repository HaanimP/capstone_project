import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticUser'
const haanimsURL = 'https://capstone-project-h6pk.onrender.com'

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setProduct(state, value) {
      state.product = value
    },
   // Mutation to sort products by price
  sortProductsByPrice(state, order) {
    // Check if the order is specified and is either 'asc' or 'desc'
    if (order === 'asc') {
      state.products.sort((a, b) => a.productAmount - b.productAmount);
    } else if (order === 'desc') {
      state.products.sort((a, b) => b.productAmount - a.productAmount);
    }
  },
  
  // Mutation to sort products by name
  sortProductsByName(state, order) {
    // Check if the order is specified and is either 'asc' or 'desc'
    if (order === 'asc') {
      state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (order === 'desc') {
      state.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
    }
  },
  },
  actions: {
    async register(context, payload) {
      // console.log(payload);
      // console.log(context);
      try{
        let {msg} = (await axios.post(`${haanimsURL}users/register`, payload)).data
        // if(msg) {
          console.log('msg: ' + msg);
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        // }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${haanimsURL}/users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${haanimsURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${haanimsURL}users/update/${payload.userID}`, payload)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "success",
          timer: 2000
        }) 
      }
    },
    async deleteUser(context, payload) {
      try{
        let {msg} = await axios.delete(`${haanimsURL}users/${payload.prodID}`, payload)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        }) 
      }
    },

    // 
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${haanimsURL}users/login`, payload)).data 
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
      

    },
    async fetchProducts(context) {
      try{
        let {results} = 
        (await axios.get(`${haanimsURL}/products`)).data
        if(results) {
          context.commit('setProducts', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving products.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchProduct(context, payload) {
      try{
        let {result} = (await axios.get(`${haanimsURL}/products/${payload.id}`)).data
        //  console.log(result);
        if(result) {
          context.commit('setProduct', result)
        }else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 4000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateProduct(context, payload) {
      console.log('payload :' +payload.prodID);

      try{
        let {msg} = await (await axios.patch(`${haanimsURL}products/update/${payload.prodID}`, payload)).data
       
        console.log('message : ' + msg);
        // if(msg) {
          // console.log('successful');
          context.dispatch('fetchProducts')
          sweet({
            title: 'Products was updated',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        // }
      }catch(e) {

        console.log('gets here');
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a product.',
          icon: "success",
          timer: 2000
        }) 
      }
    },
    async addProduct(context, payload) {
      try {
        const msg = (await axios.post(`${haanimsURL}products/addProduct`, payload)).data;
        // const { msg } = response.data;
        
        if (msg) {
          context.dispatch('fetchProducts'); // Fetch updated list of products after adding
          sweet({
            title: 'Product Added',
            text: msg,
            icon: 'success',
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'An error occurred when adding a product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    async deleteProduct(context, payload) {
      console.log(payload);
      try {
        const response = await axios.delete(`${haanimsURL}products/delete/${payload}`, payload);
        const msg = response.data;
        
        if (msg) {
          context.dispatch('fetchProduct'); // Fetch updated list of products after deletion
          sweet({
            title: 'Product Deleted',
            text: msg,
            icon: 'success',
            timer: 2000
          });
        }
      } catch (error) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting the product.',
          icon: 'error',
          timer: 2000
        });
      }
    },
    sortProductsByPrice(context, order) {
      context.commit('sortProductsByPrice', order);
    },
  
    sortProductsByName(context, order) {
      context.commit('sortProductsByName', order);
    },
  },
  modules: {
  }
})
