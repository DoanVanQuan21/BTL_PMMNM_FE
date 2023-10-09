<script setup lang="ts">
import { auth } from '~/assets/ts/auth'

definePageMeta({
  layout: 'auth',
})
auth.title = 'Tạo tài khoản'
const userCredentials = reactive({
  fullname: '',
  username: '',
  password: '',
  confirmPassword: '',
  permission: ['Bác sĩ', 'Y tá', 'Lễ tân'],
})
</script>

<template>
  <div class="row">
    <div id="login-form" class="col-lg-12 ms-5">
      <div class="login-form ">
        <form>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputFullname" class="col-sm-4 form-label text-start fw-semibold">Họ tên</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input id="fullname" type="text" class="form-control rounded-pill border border-1 border-dark" name="fullname" v-bind="userCredentials.fullname" aria-describedby="nameHelp" placeholder="nhập họ tên">
                  <div id="errFullname" />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputName" class="col-sm-4 form-label text-start fw-semibold">Tên tài khoản</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input id="username" v-model="userCredentials.username" type="text" class="form-control rounded-pill border border-1 border-dark" name="username" aria-describedby="nameHelp" onkeyup="checkValidLogin()" placeholder="nhập tên tài khoản">
                  <div id="errName" />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputPass" class="col-sm-4 form-label text-start fw-semibold">Mật khẩu</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input id="password" v-model="userCredentials.password" type="password" class="form-control rounded-pill border border-dark" name="password" onkeyup="checkValidLogin()" placeholder="nhập mật khẩu">
                  <div id="errPass" />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputConfirmPass" class="col-sm-4 form-label text-start fw-semibold">Xác nhận mật khẩu</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input id="ConfirmPassword" type="password" class="form-control rounded-pill border border-dark" name="userCredentials.confirmPassword" onkeyup="checkValidLogin()" placeholder="xác nhận mật khẩu">
                  <div id="errPass" />
                </div>
              </div>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-lg-12">
              <div class="row">
                <label for="inputPermission" class="col-sm-4 form-label text-start fw-semibold">Chức vụ</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <select id="inputPermission" name="permission" class="form-control rounded-pill border border-dark">
                    <option v-for="(perm, index) in userCredentials.permission" :key="index" :value="perm">
                      {{ perm }}
                    </option>
                  </select>
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
            <div class=" col-lg-10 text-end btn-create-account">
              <button type="button" class="btn-login btn btn-primary">
                <i class="fa-solid fa-right-to-bracket" />Tạo tài khoản
              </button>
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
