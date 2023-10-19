<template>
  <div class="row">
    <div id="loginForm" class="col-lg-12 ms-5">
      <div class="login-form">
        <form>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label
                  for="inputName"
                  class="col-sm-4 form-label text-start fw-semibold mb-12"
                >
                  <font-awesome-icon class="mr-1" :icon="['fas', 'user']" /> Tên
                  đăng nhập</label
                >
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    v-model="userCredentials.username"
                    type="text"
                    class="form-control border-dark input-type-text"
                    name="username"
                    id="inputName"
                    aria-describedby="nameHelp"
                    placeholder="Nhập tên tài khoản"
                    @keyup="validUsername"
                  />
                  <div class="form-text">
                    {{ errMessages.content }}
                  </div>
                  <div :style="{ color: errMessages.textColor }">
                    {{ errMessages.errorUsername }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label
                  for="inputPass"
                  class="col-sm-4 form-label text-start fw-semibold mb-12"
                  ><font-awesome-icon class="mr-1" :icon="['fas', 'key']" /> Mật
                  khẩu</label
                >
              </div>
              <div class="row">
                <div class="col-sm-10 input-type-password">
                  <input
                    v-model="userCredentials.password"
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control border-dark input-type-text"
                    name="password"
                    id="inputPass"
                    placeholder="Nhập mật khẩu"
                    @keyup="validPassword"
                  />
                  <div class="input-group-append">
                    <span
                      class="icon-show-hide-password"
                      @click="showPassword = !showPassword"
                    >
                      <font-awesome-icon
                        v-if="!showPassword"
                        :icon="['fas', 'eye']"
                      />
                      <font-awesome-icon v-else :icon="['fas', 'eye-slash']" />
                    </span>
                  </div>

                  <div :style="{ color: errMessages.textColor }">
                    {{ errMessages.errorPassword }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-sm-6 text-start">
              <input id="chkSave" type="checkbox" class="form-check-input" />
              <label
                class="form-check-label ml-2 hover-cursor-pointer hover-change-color"
                for="chkSave"
                >Nhớ tôi</label
              >
            </div>
            <div class="col-sm-4 offset-sm-1 text-start">
              <a
                href="./forgot-password"
                class="text-decoration-none text-black hover-change-color"
                >Quên mật khẩu</a
              >
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-10 text-end">
              <button
                type="button"
                class="btn-login btn btn-primary"
                @click="handleLogin"
              >
                Đăng nhập
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, computed } from "vue";
import { auth, errMessages, sologon } from "~/assets/ts/auth";

export default {
  data() {
    return {
      showPassword: false,
      auth: auth,
    };
  },
  setup() {
    auth.title = "Đăng nhập";
    const userCredentials = ref({ username: "", password: "" });

    const errMessages = ref({
      content: "",
      textColor: "",
      errorUsername: "",
      errorPassword: "",
    });

    definePageMeta({
      layout: "auth",
    });

    const authStore = useAuthStore();

    const isValidUsername = computed(() => !userCredentials.value.username);
    const isValidPassword = computed(() => !userCredentials.value.password);

    const validUsername = () => {
      if (isValidUsername.value) {
        errMessages.value.content = "";
        errMessages.value.textColor = "red";
        errMessages.value.errorUsername = "Tên đăng nhập không được để trống!";
        return;
      }

      const regex = /[a-zA-Z]/;
      if (!regex.test(userCredentials.value.username)) {
        errMessages.value.content = "";
        errMessages.value.textColor = "red";
        errMessages.value.errorUsername =
          "Tên đăng nhập phải bắt đầu bằng ký tự!";
        return false;
      }

      const regex2 = /^[a-zA-Z0-9]{7,}$/;
      if (!regex2.test(userCredentials.value.username)) {
        errMessages.value.content = "";
        errMessages.value.textColor = "red";
        errMessages.value.errorUsername = "Tên đăng nhập phải có độ dài >= 6";
        return false;
      }

      errMessages.value.content = sologon;
      errMessages.value.textColor = "white";
      errMessages.value.errorUsername = "";
      return true;
    };

    const validPassword = () => {
      if (isValidPassword.value) {
        errMessages.value.textColor = "red";
        errMessages.value.errorPassword = "Mật khẩu không được để trống!";
        return false;
      }

      const regex = /^[a-zA-Z0-9]{7,}$/;
      if (!regex.test(userCredentials.value.password)) {
        errMessages.value.textColor = "red";
        errMessages.value.errorPassword = "Mật khẩu phải có độ dài >= 6";
        return false;
      }

      errMessages.value.textColor = "red";
      errMessages.value.errorPassword = "";
      return true;
    };

    const handleLogin = async () => {
      if (validUsername() || validPassword()) {
        return;
      }
      // eslint-disable-next-line no-alert
      alert("Đăng nhập thành công");
      await authStore.login(userCredentials.value);
      navigateTo("./home");
    };

    return {
      auth,
      userCredentials,
      errMessages,
      isValidUsername,
      isValidPassword,
      validUsername,
      validPassword,
      handleLogin,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("~/assets/scss/auth.scss");
</style>
