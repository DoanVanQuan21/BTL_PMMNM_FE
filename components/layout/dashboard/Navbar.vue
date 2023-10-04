<script setup lang="ts">
import { BaseEnable, onClick } from '~/assets/ts/template.ts'
import { BaseTitleDisplay, clearChilds } from '~/assets/ts/BaseWebApplication'

clearChilds()
</script>

<template>
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="d-flex align-items-center justify-content-between" :style="{ marginLeft: BaseEnable.margin_left_header }">
      <a href="./home" class="logo d-flex align-items-center">
        <img src="~/assets/images/logo.png">
      </a>
      <font-awesome-icon :icon="['fas', 'bars']" class="toggle-sidebar-btn" @click="onClick" />
    </div><!-- End Logo -->

    <div class="pagetitle pt-1 ps-5 mb-0">
      <h5 class="mb-0">
        Phòng khám đa khoa Medicare
      </h5>
      <nav>
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item ms-0">
            <a href="./home">{{ BaseTitleDisplay.parent }}</a>
          </li>
          <li v-for="(child, index) in BaseTitleDisplay.childs" :key="index" class="breadcrumb-item">
            {{ child }}
          </li>
        </ol>
      </nav>
    </div>

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">
        <li class="nav-item dropdown pe-3">
          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <span class="d-none d-md-block dropdown-toggle ps-2">Đoàn Văn Quân</span>
          </a>

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Đoàn Văn Quân</h6>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <font-awesome-icon :icon="['far', 'user']" />
                <span>Thông tin cá nhân</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <font-awesome-icon :icon="['far', 'pen-to-square']" />
                <span>Đổi mật khẩu</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                <span>Đăng xuất</span>
              </a>
            </li>
          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->
      </ul>
    </nav><!-- End Icons Navigation -->
  </header>
</template>

<style>
@import url('~/assets/scss/main.scss');

.pagetitle {
    margin-bottom: 10px;
}

.pagetitle h1 {
    font-size: 24px;
    margin-bottom: 0;
    font-weight: 600;
    color: #012970;
}
</style>
