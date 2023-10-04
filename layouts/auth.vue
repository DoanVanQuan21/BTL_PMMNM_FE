<script setup lang="ts">
import { auth } from '~/assets/ts/auth'
</script>

<template>
  <div class="auth-layout">
    <div class="container-lg mt-4">
      <div class="row">
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
                {{ auth.title }}
              </h1>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/auth.scss');
</style>
