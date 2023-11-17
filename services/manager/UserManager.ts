import { User } from '~/models/User'
import { errMessages, slogan } from '~/assets/ts/auth'

export class UserManager {
  public user: User = new User()
  public showPassword: Boolean = false
  public showConfirmPassword: Boolean = false
  public UserManager(user: User) {
    this.user = user
  }

  getUser() {
    return this.user
  }

  setUser(user: User) {
    this.user = user
  }

  public generatePermission() {
    this.user.permission = ['Bác sĩ', 'Y tá', 'Lễ tân']
  }

  public validUsername() {
    if (!this.user.username) {
      errMessages.content = ''
      errMessages.textColor = 'red'
      errMessages.errorUsername = 'Tên đăng nhập không được để trống!'
      return
    }

    const regex = /[a-zA-Z]/
    if (!regex.test(this.user.username.toString())) {
      errMessages.content = ''
      errMessages.textColor = 'red'
      errMessages.errorUsername
                = 'Tên đăng nhập phải bắt đầu bằng ký tự!'
      return false
    }

    const regex2 = /^[a-zA-Z0-9]{6,}$/
    if (!regex2.test(this.user.username.toString())) {
      errMessages.content = ''
      errMessages.textColor = 'red'
      errMessages.errorUsername = 'Tên đăng nhập phải có độ dài nhiều hoặc hoặc bằng 6 ký tự'
      return false
    }

    errMessages.content = slogan
    errMessages.textColor = 'white'
    errMessages.errorUsername = ''
    return true
  }

  public validPassword() {
    if (!this.user.password) {
      errMessages.textColor = 'red'
      errMessages.errorPassword = 'Mật khẩu không được để trống!'
      return false
    }

    const regex = /^[a-zA-Z0-9]{8,}$/
    if (!regex.test(this.user.password.toString())) {
      errMessages.textColor = 'red'
      errMessages.errorPassword = 'Mật khẩu phải có độ dài nhiều hoặc hoặc bằng 8 ký tự'
      return false
    }

    errMessages.textColor = 'red'
    errMessages.errorPassword = ''
    return true
  }

  public validConfirmPassword() {
    if (!this.user.confirmPassword) {
      errMessages.textColor = 'red'
      errMessages.errorConfirmPassword = 'Xác nhận mật khẩu không được để trống!'
      return false
    }
    const regex = /^[a-zA-Z0-9]{8,}$/
    if (!regex.test(this.user.confirmPassword.toString())) {
      errMessages.textColor = 'red'
      errMessages.errorConfirmPassword = 'Xác nhận mật khẩu phải có độ dài nhiều hơn hoặc bằng 8 ký tự'
      return false
    }

    if(this.user.confirmPassword !== this.user.password) {
      errMessages.textColor = 'red'
      errMessages.errorConfirmPassword = 'Xác nhận mật khẩu không khớp mật khẩu'
      return false
    }

    errMessages.textColor = 'white'
    errMessages.errorConfirmPassword = ''
    return true
  }
  
  public validEmail() {
    if (!this.user.email) {
      errMessages.textColor = 'red'
      errMessages.errorEmail = 'Email không được để trống!'
      return false
    }
    const regex = /^[a-zA-Z][a-zA-Z0-9]{5,}@[^\s@]+\.[^\s@]+$/
    if (!regex.test(this.user.email.toString())) {
      errMessages.textColor = 'red'
      errMessages.errorEmail = 'Email chưa đúng định dạng!'
      return false
    }
    errMessages.textColor = 'white'
    errMessages.errorEmail = ''
    return true
  }
}
