<script setup lang="ts">
import { auth, errMessages } from '@/assets/ts/auth'
import { UserManager } from '@/services/manager/UserManager'
import { TitlePage } from '@/constants/constants'

definePageMeta({
  layout: 'auth',
})
auth.title = TitlePage.LOGIN_PAGE
const userManager = new UserManager()
function handleLogin() {
  if (userManager.validUsername() || userManager.validPassword())
    return
  // eslint-disable-next-line no-alert
  alert('Đăng nhập thành công')
  navigateTo('./home')
}
</script>

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
                  đăng nhập</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    id="inputName"
                    v-model="userManager.getUser().username"
                    type="text"
                    class="form-control border-dark input-type-text"
                    name="username"
                    aria-describedby="nameHelp"
                    placeholder="Nhập tên tài khoản"
                    @keyup="userManager.validUsername()"
                  >
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
                  khẩu</label>
              </div>
              <div class="row">
                <div class="col-sm-10 input-type-password">
                  <input
                    id="inputPass"
                    v-model="userManager.getUser().password"
                    :type="userManager.showPassword ? 'text' : 'password'"
                    class="form-control border-dark input-type-text"
                    name="password"
                    placeholder="Nhập mật khẩu"
                    @keyup="userManager.validPassword()"
                  >
                  <div class="input-group-append">
                    <span
                      class="icon-show-hide-password"
                      @click="userManager.showPassword = !userManager.showPassword"
                    >
                      <font-awesome-icon
                        v-if="!userManager.showPassword"
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
              <input id="chkSave" type="checkbox" class="form-check-input">
              <label
                class="form-check-label ml-2 hover-cursor-pointer hover-change-color"
                for="chkSave"
              >Nhớ tôi</label>
            </div>
            <div class="col-sm-4 offset-sm-1 text-start">
              <a
                href="./forgot-password"
                class="text-decoration-none text-black hover-change-color"
              >Quên mật khẩu</a>
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

<style lang="scss" scoped>
@import url("~/assets/scss/auth.scss");
</style>
