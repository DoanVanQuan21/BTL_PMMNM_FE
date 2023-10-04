<script setup lang="ts">
import { auth, errMessages } from '~/assets/ts/auth'

definePageMeta({
  layout: 'auth',
})
auth.title = 'Đổi mật khẩu'
const userCredentials = reactive({
  password: '',
  confirmPassword: '',
})
const isValidPassword = computed(
  () => !userCredentials.password,
)
function validPassword() {
  if (isValidPassword.value) {
    errMessages.textColor = 'red'
    errMessages.errorPassword = 'Mật khẩu không được để trống!'
    return false
  }
  const regex = /^[a-zA-Z0-9]{7,}$/
  if (!regex.test(userCredentials.password)) {
    errMessages.textColor = 'red'
    errMessages.errorPassword = 'Mật khẩu phải có độ dài >= 6'
    return false
  }
  errMessages.textColor = 'white'
  errMessages.errorPassword = ''
  return true
}
async function handleReset() {
  return navigateTo('./authentication_account')
}
</script>

<template>
  <div class="row">
    <div class="col-lg-12 ms-5">
      <div class="login-form ">
        <form>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputPassword" class="col-sm-4 form-label text-start fw-semibold"><font-awesome-icon :icon="['fas', 'key']" /> Mật khẩu mới</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input v-model="userCredentials.password" type="password" class="form-control rounded-pill border border-1 border-dark" name="password" aria-describedby="nameHelp" placeholder="Nhập mật khẩu mới">
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
                <label for="inputconfirmPassword" class="col-sm-4 form-label text-start fw-semibold"><font-awesome-icon :icon="['fas', 'user-check']" /> Xác nhận mật khẩu</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input v-model="userCredentials.password" type="confirmPassword" class="form-control rounded-pill border border-dark" name="confirmPassword" placeholder="Nhập mật khẩu" @keyup="validPassword">
                  <div :style="{ color: errMessages.textColor }">
                    {{ errMessages.errorConfirmPassword }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-sm-6 text-start">
              <input id="chkSave" type="checkbox" class="form-check-input">
              <label class=" form-check-label " for="chkSave">Nhớ tài khoản?</label>
            </div>
          </div>
          <div class="row py-2">
            <div class=" col-lg-10 text-end">
              <button type="button" class="btn-login btn btn-primary" @click="handleReset">
                <font-awesome-icon :icon="['fas', 'pen-to-square']" />
                Đổi mật khẩu
              </button>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-10 text-center text-info fs-5">
              <a href="./login" class="text-decoration-none">Trở về trang đăng nhập</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

  <style scoped lang="scss">
  @import url('~/assets/scss/auth.scss');
</style>
