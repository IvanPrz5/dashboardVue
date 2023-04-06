<template>
  <div>
    <v-select :items="itemsBanco" placeholder="Banco" item-text="descripcion" dense outlined></v-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Banco",
  data: () => ({
    itemsBanco: [],
  }),
  created(){
    this.getApiBanco();
  },
  methods:{
    getApiBanco() {
      axios.get("http://localhost:8090/auth/Banco")
      .then((response) => {
        this.itemsBanco = response.data;
      });
    },
  }
};
</script>

<style scoped></style>
