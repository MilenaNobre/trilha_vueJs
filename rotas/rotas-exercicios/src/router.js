import Vue from 'vue'
import Router from 'vue-router'

import Inicio from '@/Components/Inicio'
// import Usuario from "@/Components/usuario/Usuario";
// import UsuarioList from "@/Components/usuario/UsuarioList";
// import UsuarioDetalhe from "@/Components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "@/Components/usuario/UsuarioEditar";
import Menu from "@/Components/template/Menu";
import MenuAlt from "@/Components/template/MenuAlt";

Vue.use(Router)

const Usuario = () => import(/* webpackChunkName: "usuario"  */'./Components/usuario/Usuario')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario"  */'./Components/usuario/UsuarioEditar')
const UsuarioList = () => import(/* webpackChunkName: "usuario"  */'./Components/usuario/UsuarioList')
const UsuarioDetalhe= () => import(/* webpackChunkName: "usuario"  */'./Components/usuario/UsuarioDetalhe')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else if(to.hash) {
            return {selector: to.hash}
        } else {
             return { x:0, y: 0}
        }
    },
   routes:[
       {
           path: '/',
           //component: Inicio,
           name: 'inicio',
           components: {
               default: Inicio,
               menu: Menu
           }
       },
       {
           path: '/usuario',
          // component: Usuario,
           components: {
               default: Usuario,
               menu: MenuAlt,
               menuInferior: MenuAlt
           },
           props: true,
           children: [
               {path: '', component: UsuarioList},
               {path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('antes da rota -> usuário detalhe')
                        next()
                    }},
               {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
           ]
       },
       {
           path:   '*',
           redirect: '/'
       }
   ]
});

//declarando para todas as rotas
router.beforeEach((to, from, next) => {
    console.log('antes da rota -> global')
    next() // continua o fluxo da rota, caso coloque next(false) ele ira impedir o fluxo da rota
});

export default router