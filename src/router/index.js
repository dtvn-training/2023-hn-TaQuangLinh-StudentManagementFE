import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/practice-topic/Student'
import EditStudent from '@/components/practice-topic/EditStudent.vue'

Vue.use(Router)

const routes = [
  // { 
  //   path: '/student',
  //   name: 'studentList', 
  //   component: Student, 
  //   props: true,
  //   children: [{
  //     path: ':id/edit', 
  //     name: 'studentEdit', 
  //     component: EditStudent, 
  //     props: true 
  //   }]
  // }
  {
    path: '/student', name: 'studentList', component: Student
  },{
    path: '/student/:id/edit', name:"studentEdit", component: EditStudent, props: true
  }
]


 const router = new Router({
  routes
})
export default router
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'App',
//       component: App
//     },
//   ]
// })
