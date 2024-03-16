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
    product: null,
    cartItems: [],
  },
  getters: {
    cartItemCount: state => state.cartItems.length,
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    sortProductsByPrice(state, order) {
      if (order === 'asc') {
        state.products.sort((a, b) => a.productAmount - b.productAmount);
      } else if (order === 'desc') {
        state.products.sort((a, b) => b.productAmount - a.productAmount);
      }
    },
    sortProductsByName(state, order) {
      if (order === 'asc') {
        state.products.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (order === 'desc') {
        state.products.sort((a, b) => b.prodName.localeCompare(a.prodName));
      }
    },
    setCartItems(state, items) {
      state.cartItems = items;
    },
    addToCart(state, item) {
      state.cartItems.push(item);
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
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
      try {
        const { results } = (await axios.get(`${haanimsURL}/users`)).data;
        if (results) {
          context.commit('setUsers', results);
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        });
      }
    },
    
    async fetchUser(context, payload) {
      try {
        const { result } = (await axios.get(`${haanimsURL}/users/${payload.id}`)).data;
        if (result) {
          context.commit('setUser', result);
        } else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        });
      }
    },
    
    async updateUser(context, payload) {
      try {
        const { msg } = await axios.patch(`${haanimsURL}/users/update/${payload.id}`, payload);
        if (msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "success",
          timer: 2000
        });
      }
    },
    
    async deleteUser(context, payload) {
      try {
        const { msg } = await axios.delete(`${haanimsURL}/users/${payload.id}`);
        if (msg) {
          context.dispatch('fetchUsers');
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        });
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
    async addProduct({ commit, dispatch }, payload) {
      try {
        const response = await axios.post(`${haanimsURL}/products/addProduct`, payload);
        const { msg, product } = response.data;
        if (msg) {
          dispatch('fetchProducts'); // Fetch updated list of products after adding
          // Optionally commit mutation if needed
        }
        return { success: true, msg };
      } catch (error) {
        return { success: false, msg: 'An error occurred when adding a product.' };
      }
    },
    async updateProduct({ commit, dispatch }, payload) {
      try {
        const response = await axios.patch(`${haanimsURL}/products/update/${payload.prodID}`, payload);
        const { msg } = response.data;
        if (msg) {
          dispatch('fetchProducts'); // Fetch updated list of products after updating
          // Optionally commit mutation if needed
        }
        return { success: true, msg };
      } catch (error) {
        return { success: false, msg: 'An error occurred when updating a product.' };
      }
    },
    async deleteProduct({ commit, dispatch }, productId) {
      try {
        const response = await axios.delete(`${haanimsURL}/products/delete/${productId}`);
        const { msg } = response.data;
        if (msg) {
          dispatch('fetchProducts'); // Fetch updated list of products after deletion
          // Optionally commit mutation if needed
        }
        return { success: true, msg };
      } catch (error) {
        return { success: false, msg: 'An error occurred when deleting the product.' };
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
