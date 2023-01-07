<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          v-bind:darkMode="true"
          isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Inicio de sesión</h4>
                  <p class="mb-0">Ingrese su correo electrónico y contraseña para iniciar sesión</p>
                </div>
                <div class="card-body">
                  <form role="form">
                    <div class="mb-3">
                      <input type="text" placeholder="Email" name="email" size="40" v-model='email'/>
                    </div>
                    <div class="mb-3">
                      <input type="password" placeholder="Password" name="password" size="40" v-model='password'/>
                    </div>
                    <argon-switch id="rememberMe">Recordar usuario</argon-switch>

                    <div class="text-center">
                      <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                        v-on:click="login"
                      >Entrar</argon-button>
                    </div>
                    <h6 class="alert-danger">
                      {{this.info}}
                    </h6>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    ¿No tienes una cuenta? ¡Únete como 
                    <a
                      href="/signup"
                      class="text-success text-gradient font-weight-bold"
                    >Asociado</a> 
                    o como
                    <a
                      href="/signup-cliente"
                      class="text-success text-gradient font-weight-bold"
                    >Cliente</a> 
                    !
                  </p>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
                background-size: cover;"
              >
                <span class="mask bg-gradient-success opacity-6"></span>
                <h4
                  class="mt-5 text-white font-weight-bolder position-relative"
                >Bienvenid@ a MAGOS</h4>
                <p
                  class="text-white position-relative"
                >Su dinero en un lugar seguro.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
/* eslint-disable */
import Conexion from "@/classes/Conexion.js";
import Usuario from "@/classes/Usuario.js"
import Navbar from "@/examples/PageLayout/Navbar.vue"; 
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue"; 
import { createLogger } from 'vuex';

const body = document.getElementsByTagName("body")[0];
const hola =123
export default {
  name: "signin",
  components: {
    Navbar, 
    ArgonButton,
    ArgonSwitch
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
    this.usuario.desconectar();
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  data(){
    return {
      email: "",
      password: "",
      datos: {}, 
      tokenAutenticacion : null,
      info : null,
      usuario : new Usuario()
    }
  },
  methods:{
    async login(e){
      e.preventDefault() // Para evitar que redireccione la página

      // this.datos = {
      //   "email":this.email,
      //   "password":this.password
      // }

      // console.log(this.datos) 

      // await axios.postForm('http://localhost:8080/api/login/',
      //   this.datos
      // )
      //   .then( response  => { 
      //     console.log('¿Estoy logueado?: ',response.data.message, '\n', response)
      //     try {
      //       this.tokenAutenticacion = response.data.tokens.access
      //       console.log( this.tokenAutenticacion )
      //       console.log( 'Entré!!!!!')
      //       this.$router.push('dashboard-default') // IMPORTANTE, para cambiar de componente
      //     }catch( err ){
      //       console.log( 'No pude entrar D:   ')
      //       this.info = 'Usuario y/o contraseña incorrecto, por favor intente nuevamente'
      //     }
           
      //   })
      //   .catch( 
      //     
      //   ) 


        
        await Conexion.loginUsuario( this.email, this.password )
          .then( resp => {
            console.log( resp )
           
            console.log('¿Estoy logueado?: ',resp.data.message)
            try {
              this.tokenAutenticacion = resp.data.tokens.access
              console.log( this.tokenAutenticacion )
              console.log( 'Entré!!!!!')
              const usuario = new Usuario()
              usuario.setToken = this.tokenAutenticacion
              usuario.setEmail = this.email
              usuario.setPassword = this.password
              usuario.saludar() 
              usuario.obtenerUsuarios()
              this.$router.push('dashboard-default') // IMPORTANTE, para cambiar de componente
            }catch( err ){
              //console.log( 'No pude entrar D:   ')
              console.log(  err )
              this.info = 'Usuario y/o contraseña incorrecto, por favor intente nuevamente'
            }
          })
            
          .catch( err => console.log(err))
         
         
    },

    // Método de prueba, después se eliminará
    printx( e ) {
      e.preventDefault()
      console.log( this.email, this.password )
    },

    
  },
};
</script>
