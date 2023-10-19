<script setup lang="ts">
import { auth, errMessages } from "~/assets/ts/auth";

definePageMeta({
  layout: "auth",
});
auth.title = "Đổi mật khẩu";
const userCredentials = reactive({
  password: "",
  confirmPassword: "",
});
const isValidPassword = computed(() => !userCredentials.password);
function validPassword() {
  if (isValidPassword.value) {
    errMessages.textColor = "red";
    errMessages.errorPassword = "Mật khẩu không được để trống!";
    return false;
  }
  const regex = /^[a-zA-Z0-9]{7,}$/;
  if (!regex.test(userCredentials.password)) {
    errMessages.textColor = "red";
    errMessages.errorPassword = "Mật khẩu phải có độ dài nhiều hơn 6";
    return false;
  }
  errMessages.textColor = "white";
  errMessages.errorPassword = "";
  return true;
}

function validConfirmPassword() {
  if (isValidPassword.value) {
    errMessages.textColor = "red";
    errMessages.errorConfirmPassword = "Xác nhận khẩu không được để trống!";
    return false;
  }
  const regex = /^[a-zA-Z0-9]{7,}$/;
  if (!regex.test(userCredentials.password)) {
    errMessages.textColor = "red";
    errMessages.errorConfirmPassword = "Xác nhận khẩu phải có độ dài nhiều hơn 6";
    return false;
  }
  errMessages.textColor = "white";
  errMessages.errorConfirmPassword = "";
  return true;
}
async function handleReset() {
  return navigateTo("./authentication-account");
}
</script>

<template>
  <div class="row">
    <div class="col-lg-12 ms-5">
      <div class="login-form">
        <form>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label
                  for="input-password"
                  class="col-sm-4 form-label text-start fw-semibold mb-12"
                  ><font-awesome-icon class="mr-1" :icon="['fas', 'key']" /> Mật
                  khẩu mới</label
                >
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    v-model="userCredentials.password"
                    type="password"
                    id="input-password"
                    class="form-control rounded-pill border border-1 border-dark input-type-text"
                    name="password"
                    aria-describedby="nameHelp"
                    placeholder="Nhập mật khẩu mới"
                    @keyup="validPassword"
                  />
                  
                  <div :style="{ color: errMessages.textColor }">
                    {{ errMessages.errorPassword }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label
                  for="input-confirm-password"
                  class="col-sm-4 form-label text-start fw-semibold mb-12"
                  ><font-awesome-icon
                    class="mr-1"
                    :icon="['fas', 'user-check']"
                  />
                  Xác nhận mật khẩu</label
                >
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    v-model="userCredentials.confirmPassword"
                    type="password"
                    id="input-confirm-password"
                    class="form-control rounded-pill border border-dark input-type-text"
                    name="confirmPassword"
                    placeholder="Nhập mật khẩu"
                    @keyup="validConfirmPassword"
                  />
                  <div :style="{ color: errMessages.textColor }">
                    {{ errMessages.errorConfirmPassword }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-10 text-end">
              <button
                type="button"
                class="btn-login btn btn-primary"
                @click="handleReset"
              >
                <font-awesome-icon class="mr-1" :icon="['fas', 'pen-to-square']" />
                Đổi mật khẩu
              </button>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-10 text-center text-info fs-5 mt-2">
              <a href="./login" class="text-decoration-none go-back-home"
                >Trở về trang đăng nhập</a
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("~/assets/scss/auth.scss");
</style>
