<template>
  <div class="auth-layout pt-2">
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-6 background_login text-center mb-right-minus-70 d-flex justify-content-center align-items-center">
          <img
            src="~/assets/images/background-login.png"
            class="img-fluid"
            style="height=100%;"
          />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12">
              <div class="container-logo">
                <img src="~/assets/images/logo.png" class="float-end logo" />
              </div>
            </div>
          </div>
          <div class="row py-4">
            <div class="col-lg-12">
              <h1 class="text-center fw-bold">
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

<script setup lang="ts">
import { auth } from "~/assets/ts/auth";
</script>

<style scoped lang="scss">
@import url("~/assets/scss/auth.scss");
</style>
