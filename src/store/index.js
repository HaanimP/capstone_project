import { createStore } from 'vuex';
import axios from 'axios';
import swal from 'sweetalert';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();
const haanimsURL = 'https://capstone-project-h6pk.onrender.com';

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    cartItems: [],
    token: '', // Added token state
  },
  getters: {
    cartItemCount: state => state.cartItems.length,
    isAuthenticated: state => !!state.token, // Added isAuthenticated getter
  },
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
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
    addToCart(state, product) {
      const existingProductIndex = state.cart.findIndex(item => item.prodID === product.prodID);
      if (existingProductIndex === -1) {
        // Product not in cart, add new entry with quantity 1
        state.cart.push({ ...product, quantity: 1 });
      } else {
        // Product already in cart, increment the quantity
        state.cart[existingProductIndex].quantity++;
      }
    },
    removeFromCart(state, index) {
      state.cartItems.splice(index, 1);
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    logout(state) {
      state.user = null;
      state.token = '';
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
  actions: {
    async signup({ commit }, userData) {
      try {
        const response = await axios.post(`${haanimsURL}/users/register`, userData);
        const { token, msg } = response.data;
        commit('setToken', token);
        console.log('Signup successful:', msg);
        return { success: true, msg };
      } catch (error) {
        console.error('Signup error:', error);
        return { success: false, msg: 'Signup failed. Please try again.' };
      }
    },
    // After successful login, store the user information in Vuex store or local storage
    async login({ commit }, { email, password }) {
      try {
        const response = await axios.post(`${haanimsURL}/users/login`, { email, password });
        const { token, user } = response.data;
        commit('setToken', token); // Set the token in the store
        commit('setUser', user); // Set the user in the store
        console.log('Login successful:', user);
        return { success: true, msg: 'Login successful' };
      } catch (error) {
        console.error('Login error:', error);
        return { success: false, msg: 'Login failed. Please check your credentials and try again.' };
      }
    },
    logout({ commit }) {
      commit('logout');
    },
    async fetchUsers(context) {
      try {
        const { results } = (await axios.get(`${haanimsURL}/users`)).data;
        if (results) {
          context.commit('setUsers', results);
        }
      } catch (e) {
        swal({
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
          swal({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          });
        }
      } catch (e) {
        swal({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        });
      }
    },
    
    async updateUser({ dispatch }, payload) {
      try {
        const response = await axios.patch(`${haanimsURL}/users/update/${payload.id}`, payload);
        const { msg } = response.data;
        if (msg) {
          dispatch('fetchUsers'); // Fetch updated list of users after updating
          swal({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
        return { success: true, msg };
      } catch (error) {
        swal({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "error",
          timer: 2000
        });
        return { success: false, msg: 'An error occurred when updating a user.' };
      }
    },       
    async deleteUser(context, payload) {
      try {
        const { msg } = await axios.delete(`${haanimsURL}/users/${payload.id}`);
        if (msg) {
          context.dispatch('fetchUsers');
          swal({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          });
        }
      } catch (e) {
        swal({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        });
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
        swal({
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
          swal({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 4000
          }) 
        }
      }catch(e) {
        swal({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async addProduct({ dispatch }, payload) {
      try {
        const response = await axios.post(`${haanimsURL}/products/addProduct`, payload);
        const { msg } = response.data;
        if (msg) {
          dispatch('fetchProducts'); // Fetch updated list of products after adding
          // Optionally commit mutation if needed
        }
        return { success: true, msg };
      } catch (error) {
        return { success: false, msg: 'An error occurred when adding a product.' };
      }
    },
    async updateProduct({ dispatch }, payload) {
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
    async deleteProduct({ dispatch }, prodID) {
      try {
        const response = await axios.delete(`${haanimsURL}/products/delete/${prodID}`);
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
    addToCart({ commit }, product) {
      commit('addToCart', product);
    }
  },
  modules: {
  }, 
})