<script setup lang="ts">
import { BaseTitleDisplay, clearChilds } from 'assets/ts/BaseWebApplication'

definePageMeta({
  layout: 'dashboard',
})
clearChilds()
BaseTitleDisplay.parent = 'Trang chủ'
BaseTitleDisplay.childs.push('Cài đặt tài khoản')
</script>

<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <form id="user-profile">
          <div class="row mt-2 text-center">
            <div class="col-lg-6 offset-lg-3">
              <div class="row">
                <div id="avatar">
                  <img src="~/assets/images/avatar.jpg" class="rounded-circle" style="width: 75px; height: 75px;">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-lg-6 d-flex flex-row-reverse">
                  <div class="row me-1">
                    <button type="submit" class="btn btn-primary border border-3 border-secondary">
                      Tải lên
                    </button>
                  </div>
                </div>
                <div class="col-lg-6 d-flex flex-row">
                  <div class="row text-end ms-1">
                    <button type="submit" class="btn border border-3 border-secondary">
                      Xóa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-5">
              <div class="row mt-2">
                <label for="username" class="form-label">Họ và tên</label>
                <input id="username" type="text" class="form-control ms-2" name="username" value="Đoàn Văn Quân">
                <div id="errUsername" />
              </div>
              <div class="row mt-2">
                <label for="position" class="form-label">Chức vụ</label>
                <select id="position" class="form-control ms-2">
                  <option>Bác sĩ</option>
                  <option>Y tá</option>
                  <option>Lễ tân</option>
                </select>
                <div id="errPosition" />
              </div>
              <div class="row mt-2">
                <label for="email" class="form-label">Email</label>
                <input id="email" type="email" class="form-control ms-2" name="email" value="dvquan210502@gmail.com">
                <div id="errEmail" />
              </div>
              <div class="row mt-2">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input id="phone" type="text" class="form-control ms-2" name="phone" value="0867687695">
                <div id="errUserPhone" />
              </div>
            </div>
            <div class="col-lg-1" />
            <div class="col-lg-5">
              <div class="row mt-2">
                <label for="birthday" class="form-label">Ngày sinh</label>
                <input id="birthday" type="date" class="form-control ms-2" name="birthday" value="05/21/2002">
                <div id="errBirthday" />
              </div>
              <div class="row mt-2">
                <label for="academicLevel" class="form-label">Trình độ học vấn</label>
                <input id="academicLevel" type="text" class="form-control ms-2" name="academicLevel" value="05/21/2002">
                <div id="errAcademicLevel" />
              </div>
              <div class="row mt-2">
                <label for="address" class="form-label me-3">Địa chỉ</label>
                <input id="address" type="text" class="form-control ms-2" name="address" value="Việt tiến, Việt Yên, Bắc Giang">
                <div id="errAddress" />
              </div>
              <div class="row mt-2">
                <label for="practicingCertificate" class="form-label me-3">Số nhà</label>
                <input id="practicingCertificate" type="text" class="form-control ms-2" name="practicingCertificate" value="0">
                <div id="errPracticingCertificater" />
              </div>
              <div class="row mt-3 d-flex flex-row-reverse">
                <button type="submit" class="btn btn-primary col-sm-3 offset-sm-4">
                  <i class="fa-solid fa-pen-to-square" /> Cập nhật
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('~/assets/scss/main.scss');
#avatar{
  display: flex;
  justify-content: center;
}
#avatar img{
  width: 75px;
}
</style>
