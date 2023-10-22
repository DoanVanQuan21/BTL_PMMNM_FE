<script>
import { auth, errMessages } from '~/assets/ts/auth'
import { UserManager } from '@/services/manager/UserManager'
import { RedirectPage, TitlePage } from '@/constants/constants'

definePageMeta({
  layout: 'auth',
})
export default {
  data() {
    return {
      userManager: new UserManager(),
      auth,
      errMessages,
      RedirectPage,
    }
  },
  mounted() {
    auth.title = TitlePage.RESET_PASSWORD
  },
  methods: {
    handleReset() {
      return navigateTo(this.RedirectPage.AUTH_ACCOUNT)
    },
  },
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
                  khẩu mới</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    id="input-password"
                    v-model="userManager.getUser().password"
                    type="password"
                    class="form-control rounded-pill border border-1 border-dark input-type-text"
                    name="password"
                    aria-describedby="nameHelp"
                    placeholder="Nhập mật khẩu mới"
                    @keyup="userManager.validPassword"
                  >

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
                  Xác nhận mật khẩu</label>
              </div>
              <div class="row">
                <div class="col-sm-10">
                  <input
                    id="input-confirm-password"
                    v-model="userManager.getUser().confirmPassword"
                    type="password"
                    class="form-control rounded-pill border border-dark input-type-text"
                    name="confirmPassword"
                    placeholder="Nhập mật khẩu"
                    @keyup="userManager.validConfirmPassword"
                  >
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
              <a :href="RedirectPage.LOGIN" class="text-decoration-none go-back-home">Trở về trang đăng nhập</a>
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
