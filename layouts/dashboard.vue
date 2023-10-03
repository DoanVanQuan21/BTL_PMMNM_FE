<script setup lang="ts">
import { BaseEnable } from '~/assets/ts/template'

const { getUser, logout } = useAuthStore()
await getUser()
</script>

<template>
  <div class="dashboard-layout">
    <LayoutDashboardNavbar @logout="logout" />
    <LayoutDashboardSidebar />
    <main id="main" class="main bg-secondary-subtle" :style="{ marginLeft: BaseEnable.margin_left }">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');
#main{
  margin-top: 60px;
  padding: 10px 10px 10px 10px;
  transition: all 0.3s;
  background-color: white;
}
</style>
