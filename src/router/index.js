import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProductView from '../views/ProductView.vue';
import AdminView from '../views/AdminView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from '../views/LoginView.vue';
import RegProductView from '../views/RegProductView.vue';
import UserUpdateView from '../views/UserUpdateView.vue';
import UsersVIew from '@/views/UsersVIew.vue';
import ProfileView from '@/views/ProfileView.vue';
import SignUpView from '@/views/SignUpView.vue';
import UpdateView from '@/views/UpdateView.vue';
import CartView from '@/views/CartView.vue';
import ModestView from '@/views/ModestView.vue';
import NurulHuda from '@/views/NurulHuda.vue';
import ZahraaTul from '@/views/ZahraaTul.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
  },
  {
    path: '/products/:id',
    name: 'productView',
    component: ProductView,
  },
  {
    path: '/modestview',
    name: 'ModestView',
    component: ModestView,
  },
  {
    path: '/nurulhuda',
    name: 'NurulHuda',
    component: NurulHuda,
  },
  {
    path: '/zahraatul',
    name: 'ZahraaTul',
    component: ZahraaTul,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { requiresAuth: true, isAdmin: true }
  },
  {
    path: '/admin/update/:id',
    name: 'update',
    component: UpdateView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
  },
  {
    path: '/products/addProduct',
    name: 'product',
    component: RegProductView,
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersVIew,
  },
  {
    path: '/users/update',
    name: 'userUpdate',
    component: UserUpdateView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated
  const isAdmin = ['haanimpietersen@gmail.com', 'hoosenammara@gmail.com', 'aakeefahj@gmail.com', 'nishaatgafieldien@gmail.com'].includes(localStorage.getItem('email')); // Check if user is admin
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login page if authentication is required but user is not authenticated
  } else if (to.meta.isAdmin && !isAdmin) {
    next('/'); // Redirect to home page if user is not admin but trying to access admin route
  } else {
    next(); // Proceed to the requested route
  }
});

export default router;
