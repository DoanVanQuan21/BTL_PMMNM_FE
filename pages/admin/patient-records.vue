<script setup lang="ts">
import { ActivePages, BaseTitleDisplay } from '~/assets/ts/BaseWebApplication'
import { PatientManager } from '@/services/manager/PatientManager'

definePageMeta({
  layout: 'dashboard',
})
const patients = PatientManager.getAllPatient()
ActivePages.PRPage = ''
const CheckBox = reactive({
  isCheckAll: false,
})
function clickCheckAll() {
  if (CheckBox.isCheckAll)
    CheckBox.isCheckAll = false
  else CheckBox.isCheckAll = true
}
BaseTitleDisplay.childs.push('Hồ sơ bệnh nhân')
</script>

<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <form class="patient-records">
          <div class="row mt-2 text-center">
            <div class="col-lg-4 text-end">
              <input
                id="fullname"
                type="search"
                name="fullname"
                class="form-control"
                placeholder="Tìm kiếm mã bệnh nhân, tên bệnh nhân"
              >
            </div>
            <div class="col-lg-3 text-end" />
            <div class="col-lg-2 text-end" />
            <div class="col-lg-3 text-end">
              <button type="button" class="btn btn-primary">
                Thêm hồ sơ bệnh nhân
              </button>
            </div>
          </div>
          <div class="row mt-4">
            <table>
              <tr>
                <th>
                  <input
                    id="checkAlls"
                    type="checkbox"
                    name="checkAll"
                    class="form-check-input"
                    @click="clickCheckAll"
                  >
                </th>
                <th>STT</th>
                <th>Số BHYT</th>
                <th>Tên bệnh nhân</th>
                <th>Số điện thoại</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
              </tr>
              <tr v-for="(patient, index) in patients" :key="index">
                <td>
                  <input
                    id="ckb"
                    type="checkbox"
                    name="ckb"
                    class="form-check-input"
                    :checked="CheckBox.isCheckAll"
                  >
                </td>
                <td>{{ index }}</td>
                <td>{{ patient.healthInsuranceNumber }}</td>
                <td>{{ patient.fullname }}</td>
                <td>{{ patient.phone }}</td>
                <td>{{ patient.birthday }}</td>
                <td>{{ patient.gender }}</td>
                <td>{{ patient.address }}</td>
                <td>
                  <button type="submit" class="btn btn-success me-1">
                    Sửa
                  </button>
                  <button type="submit" class="btn btn-danger">
                    Xóa
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
td {
  padding-top: 20px;
}
</style>
