<script setup lang="ts">
import { BaseEnable } from '~/assets/ts/template.ts'
</script>

<template>
  <aside id="sidebar" class="sidebar" :style="{ width: BaseEnable.width }">
    <ul id="sidebar-nav" class="sidebar-nav">
      <li class="nav-item">
        <a class="nav-link collapsed" href="./home">
          <div>
            <font-awesome-icon :icon="['fas', 'chart-pie']" class="fs-5" /> <span :hidden="BaseEnable.isHidden">Tổng quan</span>
          </div>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'calendar-days']" class="fs-5" /> <span :hidden="BaseEnable.isHidden"> Lịch hẹn</span>
          </div>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'calendar-days']" class="fs-5" /> <span :hidden="BaseEnable.isHidden"> Ca khám</span>
          </div>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'table-list']" class="fs-5" /> <span :hidden="BaseEnable.isHidden"> Hồ sơ bệnh nhân</span>
          </div>
        </a>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'users-line']" class="fs-5" /> <span :hidden="BaseEnable.isHidden"> Danh sách tài khoản</span>
          </div>
        </a>
      </li><!-- End Tables Nav -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'list-check']" class="fs-5" /> <span :hidden="BaseEnable.isHidden"> Quản lý báo cáo</span>
          </div>
        </a>
      </li>
    </ul>
  </aside>
  <div class="sperator" />
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');

  .sperator{
    height: 100%;
    width: 2px;
  }
</style>
