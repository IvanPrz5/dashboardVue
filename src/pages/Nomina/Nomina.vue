<template>
  <v-container class="container-login" fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Catálogos Nomina</h1>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="secondary"
            class="text-capitalize button-shadow mr-1"
            >Función</v-btn
          >
        </template>
      </v-menu>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <Banco />
      </v-col>
      <v-col cols="12" sm="3">
        <OrigenRecurso />
      </v-col>
      <v-col cols="12" sm="3">
        <PeriodicidadPago />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Banco from "@/pages/Nomina/ComponentsApi/Banco.vue"
import OrigenRecurso from "./ComponentsApi/OrigenRecurso.vue";
import PeriodicidadPago from "./ComponentsApi/PeriodicidadPago.vue";

export default {
  name: "Nomina",
  components: {
    Banco,
    OrigenRecurso,
    PeriodicidadPago,
  },
  data: () => ({
    items: [],
  }),
};
</script>

<style scoped></style>
