<template>
    <div>
      <v-select
        :items="itemsPerioPago"
        placeholder="Periodicidad Pago"
        item-text="descripcion"
        dense
        outlined
      ></v-select>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "PeriodiciadPago",
    data: () => ({
      itemsPerioPago: [],
    }),
    created() {
      this.getApiBanco();
    },
    methods: {
      getApiBanco() {
        axios.get("http://localhost:8090/auth/PeriodicidadPago").then((response) => {
          this.itemsPerioPago = response.data;
        });
      },
    },
  };
  </script>
  
  <style scoped></style>
  