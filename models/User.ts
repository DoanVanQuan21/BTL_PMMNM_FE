import { computed } from 'vue'

export class User {
  public id!: Number
  public username!: String
  public password!: String
  public name!: String
  public phone!: String
  public email!: String
  public User(id: Number, username: String, password: String, name: String, phone: String, email: String) {
    this.id = id
    this.username = username
    this.password = password
    this.name = name
    this.phone = phone
    this.email = email
  }

  isValidUsername = computed(() => this.username)
  isValidPassword = computed(() => this.password)
}
