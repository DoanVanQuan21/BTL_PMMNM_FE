<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})

const userCredentials = reactive({
  username: '',
  password: '',
  email: '',
})
async function send() {
  return navigateTo('/reset_password')
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
              Quên mật khẩu
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
                      <label for="email" class="col-sm-4 form-label text-start fw-semibold"><font-awesome-icon :icon="['fas', 'envelope']" /> Địa chỉ email</label>
                    </div>
                    <div class="row">
                      <div class="col-sm-10">
                        <input id="email" v-model="userCredentials.email" type="text" class="form-control rounded-pill border border-1 border-dark" name="email" aria-describedby="nameHelp" placeholder="Nhập địa chỉ email">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row py-2">
                  <div class=" col-lg-10 text-end">
                    <button type="button" class="btn-send btn btn-primary" @click="send">
                      Gửi <font-awesome-icon :icon="['fas', 'paper-plane']" />
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
  .btn-send{
    width:30%;
    transition: width 2s;
  }
  .btn-send:hover{
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
  .logo{
    text-align:center !important;
  }
}
@media (min-width: 768px) and (max-width: 991.98px) {
  .logo{
    text-align:center !important;
  }
}
@media (min-width: 992px) and (max-width: 1199.98px) {
  .logo{
    text-align:center !important;
  }
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}

@media (min-width: 1400px) {
}
</style>
