<script setup lang="ts">
import { BaseEnable } from '~/assets/ts/template.ts'
</script>

<template>
  <aside id="sidebar" class="sidebar" :style="{ left: BaseEnable.width }">
    <ul id="sidebar-nav" class="sidebar-nav">
      <li class="nav-item">
        <a class="nav-link" href="./home">
          <div>
            <font-awesome-icon :icon="['fas', 'chart-pie']" /> Tổng quan <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </div>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link " href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'calendar-days']" /> <span> Lịch hẹn</span>
          </div>
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'table-list']" /> <span> Hồ sơ bệnh nhân</span>
          </div>
        </a>
      </li><!-- End Forms Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'users-line']" /> Danh sách tài khoản
          </div>
        </a>
      </li><!-- End Tables Nav -->
      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <div>
            <font-awesome-icon :icon="['fas', 'list-check']" /> Quản lý báo cáo
          </div>
        </a>
      </li>
    </ul>
  </aside>
</template>

<style>
@import url('~/assets/scss/main.scss')
</style>
