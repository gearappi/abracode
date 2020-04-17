<template>
  <v-container class="login-page" fluid>
    <v-row>
      <v-col>
        <v-card class="mx-auto login-form" max-width="344">
          <form>
            <v-text-field
              v-model="login"
              :type="'text'"
              name="login"
              label="Login"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              name="password"
              label="Password"
              @click:append="show = !show"
            ></v-text-field>
            <v-btn
                color="primary"
                @click="handleForm"
            >
               Войти
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
// import qs from 'qs'

export default {
  name: "LoginPage",
  data() {
    return {
      show: false,
      login: "",
      password: ""
    };
  },
  methods: {
    handleForm: function() {
      const url = 'http://localhost:7070/rest/auth/login';
      const dataForm = {
        name: "bodsss"
      }
      axios.post(
          url,
          JSON.parse(JSON.stringify(dataForm)),
          {headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  .login-form {
    padding: 30px;
  }
}
</style>
