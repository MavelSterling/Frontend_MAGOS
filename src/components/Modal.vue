<script>
export default {
  name : 'Modal',
  props: {
    show: Boolean
  },
  methods : {
    cerrarVentana( evento ) {
      evento.preventDefault()
      this.$emit('close')  
    }
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">Términos y condiciones</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              USUARIO:
                    El usuario de la aplicación declara que la información que ha ingresado es real y no es ninguna suplantación.
                    El usuario acepta el reglamento de convivencia y obligación del fondo de ahorros de pensiones "FAP" que dicta: 
                    <br>1. El dinero depositado irá creciendo a través del tiempo por un porcentaje determinado e informado por FAP, no obstante, si el usuario retira su dinero antes del tiempo estipulado (1 año), perderá todas las ganancias acumuladas en el tiempo antes del pago de la comisión.
                    <br>2. El usuario tendrá que ir puntualmente a las reuniones determinadas por el gerente de FAP con el objetivo de ser informado del estado actual de diversas áreas del fondo. De no asistir, o informar su inasistencia por un motivo mayor, incurrirá una multa la cual tendrá que ser pagada a través del abono del usuario.
                    <br><br>
              MAGOS:
                    La empresa se compromete que la información suministrada por el usuario es de alto nivel de seguridad por lo que no es, ni será pública.
                   La empresa no se compromete a realizar transacciones con bancos reales, dado que para ese servicio se requiere un pago.
                  </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button
                class="modal-default-button"
                @click="cerrarVentana"
              >OK</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: inherit;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>