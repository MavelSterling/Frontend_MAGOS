<template>
  <div class="card mt-5">
    <div class="card-header pb-0 p-4">
      <div class="row">
        <div class="col-3 d-flex align-items-center">
          <h6 class="mb-0">Cuenta de ahorros</h6>
        </div>
      </div>
    </div>
    <div class="card-body p-5">
      <div class="row">
        <div class="col-md-6 mb-md-0 mb-4">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
           <!-- <img class="w-10 me-3 mb-0" src="@/assets/img/logos/mastercard.png" alt="logo" />-->
            <h6 class="mb-0">Tipo de consignación</h6>
           <!-- <i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>-->
            <span class="sr-only">Editar tarjeta</span>
          </div>
        </div>
        <div class="col-md-6 ">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <img class="w-10 me-3 mb-0" src="@/assets/img/logos/dinero.png" alt="logo" />
            <h6 class="mb-0">$&nbsp;&nbsp;&nbsp;5248</h6>
            <!--<i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>-->
            <!-- <span class="sr-only">Editar valor</span>-->
          </div>
        </div>
        <div class="col-md-13 mt-3">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
           <!-- <img class="w-10 me-3 mb-0" src="@/assets/img/logos/mastercard.png" alt="logo" />-->
            <h6 class="mb-3">Descripción</h6>
           <!-- <i
              class="fas fa-pencil-alt ms-auto text-dark cursor-pointer"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title
              aria-hidden="true"
              data-bs-original-title="Edit Card"
              aria-label="Edit Card"
            ></i>
            <span class="sr-only">Editar tarjeta</span>-->
          </div>
        </div>
        <div class="col-md-6 mt-3">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <h6 class="mb-0"> Fecha</h6>
            
          
          </div>
        </div>
        <div class="col-md-6 mt-3">
          <div
            class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row"
          >
            <h6 class="mb-0">Firma</h6>
      
          </div>
        </div>
      </div>
    </div>
    <div class="col-10 text-end mb-3">
          <argon-button class="bg-success text-white" variant="gradient">
           <!--<i class="fas fa-plus me-1"></i>--> 
            Registrar
          </argon-button>
        </div>
       <!-- <div class="col-3 text-end">
          <argon-button class="bg-warning text-white" variant="gradient">
            Actualizar monto
          </argon-button>
        </div>-->
       <!--<div class="col-3 text-end">
          <argon-button class="bg-warning text-white" variant="gradient">
            Cancelar
          </argon-button>
        </div>--> 
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import img1 from "@/assets/img/logos/mastercard.png";
import img2 from "@/assets/img/logos/dinero.png";

export default {
  name: "saving-card",
  components: {
    ArgonButton,
  },
  data() {
    return {
      img1,
      img2,
    };
  },
};
</script>
