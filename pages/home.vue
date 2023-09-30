<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
function toggleLogin() {
  navigateTo('/login')
}
function toggleRegister() {
  navigateTo('/register')
}
</script>

<template>
  <div class="container-lg header bg-secondary-subtle">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 mt-2">
        <div class="row">
          <div class="col-lg-5 me-2 text-end">
            <button type="submit" class="btn btn-success" @click="toggleLogin">Đăng nhập</button>
          </div>
          <div class="col-lg-5 ms-2 text-start">
            <button class="btn btn-success" @click="toggleRegister">Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 575.98px) {
}
@media (min-width: 576px) and (max-width: 767.98px) {
}
@media (min-width: 768px) and (max-width: 991.98px) {
}
@media (min-width: 992px) and (max-width: 1199.98px) {
}
@media (min-width: 1200px) and (max-width: 1399.98px) {
}
@media (min-width: 1400px) {
}
</style>
