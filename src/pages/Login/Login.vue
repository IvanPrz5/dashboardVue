<template>
  <v-app>
    <v-container class="container-login" fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Nombre App</p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="login-part d-flex align-center justify-center"
        >
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <div class="login-wrapper pt-md-4 pt-0">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`"> Iniciar Sesión </v-tab>
                  <v-tab-item :value="'tab-login'">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p
                              class="login-slogan display-2 text-center font-weight-medium my-10"
                            >
                              Bienvenido
                            </p>
                            <v-divider></v-divider>
                          </v-col>
                          <v-form ref="formLogin" lazy-validation>
                            <v-col>
                              <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                placeholder="Email"
                                outlined
                                required
                              ></v-text-field>
                              <v-text-field
                                color="primary"
                                v-model="password"
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                name="input-10-1"
                                placeholder="Contraseña"
                                outlined
                                @click:append="show = !show"
                                :rules="passwordRules"
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                x-large
                                block
                                color="primary"
                                @click="loginWithToken"
                              >
                                Acceder</v-btn
                              >
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-col>
            <!-- <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  © 2023-2025
                  <a href="https://flatlogic.com/" class="text-decoration-none"
                    >Oaxaca</a
                  >, Todos los derechos reservados.
                </div>
              </v-footer>
            </v-col> -->
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      show: false,
      email: "admin@gmail.com",
      emailRules: [
        (v) => !!v || "Email es requerido",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      password: "adminConstra",
      passwordRules: [(v) => !!v || "Contraseña requerida"],
    };
  },
  methods: {
    loginWithToken: function () {
      let formValidated = this.$refs.formLogin.validate();
      if (formValidated) {
        let userCred = {
          email: this.email,
          password: this.password,
        };
        axios
          .post("http://localhost:8090/login", userCred, {})
          .then((response) => {
            const headers = response.headers;
            const bToken = headers.get("Authorization");
            const token = bToken.replace("Bearer ", "");
            localStorage.setItem("token", token);
            this.$router.push("/dashboard");
          });
      }
    },
  },
};
</script>

<style src="./Login.scss" lang="scss" />
