<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
const sologon = 'Chúng tôi sẽ không bao giờ chia sẻ thông tin của bạn với bất kỳ ai.'
const authStore = useAuthStore()
const userCredentials = reactive({
  username: '',
  password: '',
})
const errMessages = reactive({
  isError: true,
  textColor: '',
  errorUsername: '',
  errorPassword: '',
  content: sologon,
})
const isValidUsername = computed(
  () => !userCredentials.username,
)
const isValidPassword = computed(
  () => !userCredentials.password,
)
function validUsername() {
  if (isValidUsername.value) {
    errMessages.content = ''
    errMessages.textColor = 'red'
    errMessages.errorUsername = 'Tên đăng nhập không được để trống!'
    return
  }
  const regx = /[a-zA-Z]/
  if (!regx.test(userCredentials.username)) {
    errMessages.content = ''
    errMessages.textColor = 'red'
    errMessages.errorUsername = 'Tên đăng nhập phải bắt đầu bằng ký tự!'
    return false
  }
  const regex = /^[a-zA-Z0-9]{7,}$/
  if (!regex.test(userCredentials.username)) {
    errMessages.content = ''
    errMessages.textColor = 'red'
    errMessages.errorUsername = 'Tên đăng nhập phải có độ dài >= 6'
    return false
  }
  errMessages.content = sologon
  errMessages.textColor = 'white'
  errMessages.errorUsername = ''
  return true
}
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
async function handleLogin() {
  if (validUsername() || validPassword())
    return
  // eslint-disable-next-line no-alert
  alert('Đăng nhập thành công')
  await authStore.login(userCredentials)
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
              Đăng nhập
            </h1>
          </div>
        </div>
        <div class="row">
          <div id="loginForm" class="col-lg-12 ms-5">
            <div class="login-form ">
              <form>
                <div class="row py-2">
                  <div class="col-lg-12">
                    <div class="row">
                      <label for="inputName" class="col-sm-4 form-label text-start fw-semibold"><font-awesome-icon :icon="['fas', 'user']" /> Tên đăng nhập</label>
                    </div>
                    <div class="row">
                      <div class="col-sm-10">
                        <input v-model="userCredentials.username" type="text" class="form-control rounded-pill border border-1 border-dark" name="username" aria-describedby="nameHelp" placeholder="Nhập tên tài khoản" @keyup="validUsername">
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
                      <label for="inputPass" class="col-sm-4 form-label text-start fw-semibold"><font-awesome-icon :icon="['fas', 'key']" /> Mật khẩu</label>
                    </div>
                    <div class="row">
                      <div class="col-sm-10">
                        <input v-model="userCredentials.password" type="password" class="form-control rounded-pill border border-dark" name="password" placeholder="Nhập mật khẩu" @keyup="validPassword">
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
                    <label class=" form-check-label " for="chkSave">Nhớ tài khoản?</label>
                  </div>
                  <div class="col-sm-4 offset-sm-1 text-start">
                    <a href="./forgot_password" class="text-decoration-none">
                      <font-awesome-icon :icon="['fas', 'unlock']" /> Quên mật khẩu?</a>
                  </div>
                </div>
                <div class="row py-2">
                  <div class=" col-lg-10 text-end">
                    <button type="button" class="btn-login btn btn-primary" @click="handleLogin">
                      Đăng nhập <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" />
                    </button>
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
