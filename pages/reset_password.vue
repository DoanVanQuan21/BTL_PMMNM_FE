<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
const userCredentials = reactive({
  password: '',
  confirmPassword: '',
})
const errMessages = reactive({
  textColor: '',
  errorPassword: '',
  errorConfirmPassword: '',
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
  <div class="container-lg header">
    <div class="row pt-5 ms-auto me-auto">
      <div class="col-lg-6 background_login text-center">
        <img src="~/assets/images/background_1.png" class="img-fluid" style="height=100%;">
      </div>
      <div class="col-lg-6">
        <div class="row">
          <div class="col-lg-12">
            <div class="container-logo">
              <img src="~/assets/images/logo.png" class="float-end logo">
            </div>
          </div>
        </div>
        <div class="row pt-5 pb-5">
          <div class="col-lg-6 offset-lg-3">
            <h1 class="text-center">
              Đổi mật khẩu
            </h1>
          </div>
        </div>
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
      </div>
    </div>
  </div>
</template>

  <style scoped lang="scss">
  .logo{
    width:225px;
  }
  .login-title{
    font-size: 1.2rem;
  }
  .btn-login{
    width:30%;
    transition: width 2s;
  }
  .btn-login:hover{
    width:35%;
    background-color:red;
    color:white;
  }
  .background_login img{
    width:600px;
  }
  @media (max-width: 575.98px) {
  .login-form .col-sm-4 {
    text-align:left !important;
  }
  .logo{
    text-align:center !important;
  }
  #login-form{
    margin-left:0px !important;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .container-logo{
    display: flex !important;
    justify-content: center !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .container-logo{
    display: flex !important;
    justify-content: center !important;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .container-logo{
    display: flex !important;
    justify-content: center !important;
  }
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}

@media (min-width: 1400px) {
}
</style>
