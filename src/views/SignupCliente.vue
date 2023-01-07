<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar isBtn="bg-gradient-light" />
      </div>
    </div>
  </div>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Bienvenid@!</h1>
            <p
              class="text-lead text-white"
            >Para registrarte como cliente por favor complete el siguiente formulario</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Registro</h5>
            </div>
            <div class="card-body">
              <form role="form">
                <input class="form-control " type="text" placeholder="Nombre(s)" aria-label="Nombre" v-model="nombre"/>
                <input class="form-control " type="text" placeholder="Apellidos" aria-label="Apellido"  v-model="apellido" />
                <input class="form-control " type="text" placeholder="Documento de identidad (sólo números)" aria-label="Documento_identidad"  v-model="documento" />
                <input class="form-control " type="date" placeholder="Fecha de nacimiento" aria-label="Fecha_nacimiento" v-model="fecha" />
                <input class="form-control " type="tel" placeholder="Teléfono" aria-label="Telefono"  v-model="telefono"/> 
                <input class="form-control " type="email" placeholder="Correo electrónico" aria-label="Correo" v-model="email" />
                <input class="form-control " type="text" placeholder="C.C del asociado que lo vincula" aria-label="ccAsociado" v-model="ccAsociado" />
                <input class="form-control " type="password" placeholder="Contraseña" aria-label="Contraseña" v-model="password" />
                <div>
                  <input type="checkbox" checked="false" v-model="verificado">
                  <label class="form-check-label" for="flexCheckDefault">
                    Acepto
                   <!-- <a   
                    href="#" class="text-dark font-weight-bolder">
                            <span class="btn-inner--icon"></span>
                            <span class="btn-inner--text">términos y condiciones</span>
                            
                  </a>-->
                  <button id="show-modal" @click ="mostrarCondicion"> términos y condiciones</button>
                    <!-- use the modal component, pass in the prop -->
                    <modal :show="showModal" @close="showModal = false">
                      <template #header>
                        <h3>Términos y condiciones</h3>
                      </template>
                    </modal> 
                  </label>

                  
                </div>
                <div class="text-center">
                  <button fullWidth color="dark" variant="gradient" :class="'my-4 mb-2 btn mb-0 '" @click="registrarAsociado" id="botonRegistro" :disabled="habilitarBoton()">Registrarse</button>
                  <h6 class="text.success">{{mensaje}}</h6>
                </div>
                <p class="text-sm mt-3 mb-0">
                  ¿Tienes cuenta?
                  <a
                    href="/signin"
                    class="text-dark font-weight-bolder"
                  >Iniciar sesión</a>
                </p>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
/* eslint-disable */
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Modal from "@/components/Modal.vue";
import Conexion from '@/classes/Conexion.js'; 

const body = document.getElementsByTagName("body")[0]; 

export default {
  name: "signup",
  components: {
    Navbar,
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
    Modal,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  data() {
    return {
      verificado: false,
      showModal: false,
      
      nombre : 'Alberto',
      apellido : 'Mujica',
      fecha : '1989-11-22',
      telefono : '3165672389', 
      email : 'lordmujica07@gmail.com',
      password : 'lordmujica123',
      mensaje : '',
      documento : '1155433987', 
      ccAsociado : '123456789'

      // nombre : '',
      // apellido : '',
      // fecha : '',
      // telefono : '', 
      // email : '',
      // password : '',
      // mensaje : '',
      // documento : '', 
      // ccAsociado : ''
    }
  },
  methods : {
    mostrarCondicion( evento ) {
      evento.preventDefault()
      this.showModal = true
    },
    registrarAsociado( evento ) {
      evento.preventDefault()
      if( this.email && this.nombre && this.apellido && this.email && this.documento && this.password && this.fecha && this.telefono && this.ccAsociado){  
        
        Conexion.crearCliente(this.email ,this.nombre, this.apellido, this.email, 'cliente', this.documento, this.password, this.fecha, this.telefono, this.ccAsociado)
          .then( resp => { 
            this.mensaje = 'Usuario registrado correctamente'
            console.log( resp.data )

          })
          .catch( err => {
            console.log( err )
            this.mensaje = 'Sucedió un error'
          })
      } else {
        this.mensaje = 'Por favor rellenar todos los campos del registro'
      }  
    },
    habilitarBoton(   ) {
      //console.log(this.verificado)
      return (!this.verificado)
    }
  }
};
</script>

<style scoped>
 input .form-control {
  margin: 10px 10px;
 }

 button:hover {
  background: #93E773;
  color: white;
 }

 h6 {
  font-size: 12px;
  color: gray;
 }
</style>
