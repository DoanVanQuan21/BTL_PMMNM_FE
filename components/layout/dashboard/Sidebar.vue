<script setup lang="ts">
import { BaseEnable } from '~/assets/ts/template.ts'
import { ActivePages } from '~/assets/ts/BaseWebApplication'
import { RedirectPage } from '@/constants/constants'

BaseEnable.active = 'collapsed'
</script>

<template>
  <aside
    id="sidebar"
    class="sidebar"
    :style="{ width: BaseEnable.sidebar_width }"
  >
    <ul id="sidebar-nav" class="sidebar-nav">
      <li class="nav-item">
        <NuxtLink class="nav-link" :to="RedirectPage.HOME" :class="ActivePages.OverviewPage">
          <div class="d-flex">
            <p class="overview-icon">
              <img
                src="~/assets/images/icons/overview_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title overview">Tổng quan</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">Tổng quan</span>
          </div>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink class="nav-link" to="#" :class="ActivePages.AppointmentPage">
          <div class="d-flex">
            <p class="calendar-icon">
              <img
                src="~/assets/images/icons/calendar_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title calendar">Lịch hẹn</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden"> Lịch hẹn</span>
          </div>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink class="nav-link" to="#" :class="ActivePages.MEPage">
          <div class="d-flex">
            <p class="medical_examination-icon">
              <img
                src="~/assets/images/icons/medical_examination_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title medical_examination">Ca khám</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden"> Ca khám</span>
          </div>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          :to="RedirectPage.PATIENT_RECORDS"
          :class="ActivePages.PRPage"
        >
          <div class="d-flex">
            <p class="patient_record-icon">
              <img
                src="~/assets/images/icons/patient_record_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title patient_record">Hồ sơ bệnh nhân</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">
              Hồ sơ bệnh nhân</span>
          </div>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          to="#"
          :class="ActivePages.LAPage"
        >
          <div class="d-flex">
            <p class="user-icon">
              <img
                src="~/assets/images/icons/user_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title user">Danh sách tài khoản</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">
              Danh sách tài khoản</span>
          </div>
        </NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          to="#"
          :class="ActivePages.MMPage"
        >
          <div class="d-flex">
            <p class="medicine-icon">
              <img
                src="~/assets/images/icons/medicine_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title user">Quản lý thuốc</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">
              Quản lý thuốc</span>
          </div>
        </NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          to="#"
          :class="ActivePages.SMPage"
        >
          <div class="d-flex">
            <p class="service_icon">
              <img
                src="~/assets/images/icons/service_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title user">Quản lý dịch vụ</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">
              Quản lý dịch vụ</span>
          </div>
        </NuxtLink>
      </li>
      <li class="nav-item">
        <NuxtLink
          class="nav-link"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          to="#"
          :class="ActivePages.RMPage"
        >
          <div class="d-flex">
            <p class="management-icon">
              <img
                src="~/assets/images/icons/management_icon.svg"
                class="icon"
                alt=""
                srcset=""
              ><span class="sub-title management">Quản lý báo cáo</span>
            </p>
            <span class="ms-3" :hidden="BaseEnable.isHidden">
              Quản lý báo cáo</span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </aside>
  <div class="sperator" />
</template>

<style scoped lang="scss">
@import url("~/assets/scss/main.scss");

.sperator {
  height: 100%;
  width: 2px;
}
@media (max-width: 1199px) {
  span {
    visibility: hidden;
    overflow: hidden;
    display: none;
  }
}
.icon {
  width: 23px;
}
p {
  margin: 0px;
}
.sub-title {
  display: none;
  font-size: 14px;
  overflow: visible;
}
.overview-icon {
  position: relative;
}
.overview-icon span {
  position: absolute;
  top: 0;
  left: 100%; /* Để dòng text hiển thị bên cạnh ảnh */
  white-space: nowrap; /* Ngăn text bị xuống dòng */
  background-color: rgba(0, 0, 0, 0);
  color: black;
  padding: 5px;
  border-radius: 5px;
}
.overview-icon:hover span {
  display: block;
  z-index: 10000;
}
</style>
