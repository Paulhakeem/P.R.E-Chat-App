import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {requiresAuth: true},
    },
    {
      path: '/chats',
      name: 'chatroom',
      component: () => import('../views/ChatRoom.vue')
    },
    {
      path: '/account',
      name: 'createaccount',
      component: () => import('../views/CreateAccount.vue')
    }
  ]
})

const getCurrentUser = () => {
  return new Promise ((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
        resolve(user)
      },
      reject
    ) 
  })
}


router.beforeEach(async(to, from, next) =>{
  const isAuthenticated = await getCurrentUser()
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (!isAuthenticated && isAuthRequired) next({ name: 'createaccount'})

  else next()
})

export default router
