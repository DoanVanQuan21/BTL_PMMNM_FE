import { User } from '~/models/User'
import { errMessages, slogan } from '~/assets/ts/auth'

export class UserManager {
  public user: User = new User()
  public showPassword: Boolean = false
  public UserManager(user: User) {
    this.user = user
  }

  getUser() {
    return this.user
  }

  setUser(user: User) {
    this.user = user
  }

  public validUsername() {
    if (this.user.isValidUsername) {
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

    const regex2 = /^[a-zA-Z0-9]{7,}$/
    if (!regex2.test(this.user.username.toString())) {
      errMessages.content = ''
      errMessages.textColor = 'red'
      errMessages.errorUsername = 'Tên đăng nhập phải có độ dài >= 6'
      return false
    }

    errMessages.content = slogan
    errMessages.textColor = 'white'
    errMessages.errorUsername = ''
    return true
  }

  public validPassword() {
    if (this.user.isValidPassword) {
      errMessages.textColor = 'red'
      errMessages.errorPassword = 'Mật khẩu không được để trống!'
      return false
    }

    const regex = /^[a-zA-Z0-9]{7,}$/
    if (!regex.test(this.user.password.toString())) {
      errMessages.textColor = 'red'
      errMessages.errorPassword = 'Mật khẩu phải có độ dài >= 6'
      return false
    }

    errMessages.textColor = 'red'
    errMessages.errorPassword = ''
    return true
  }
}
