import {createRouter, createWebHashHistory} from "vue-router";

const routes = {}
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //修改页面title
    if (to.meta.title){
        document.title='桐人后台管理系统 - '+to.meta.title
    }
    //放行登录页面
    if (to.path === '/login') {
        return next()
    }
    //获取token 后续可以用 pinia 之类的
    const token=sessionStorage.getItem('token')
    if (!token) {
        return next('/login')
    }
    return next();
})

//导出路由
export default router