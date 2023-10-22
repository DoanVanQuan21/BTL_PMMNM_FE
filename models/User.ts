export class User {
  public id: Number
  public username: String
  public password: String
  public name: String
  public phone: String
  public email: String
  constructor(id: Number, username: String, password: String, name: String, phone: String, email: String) {
    this.id = id
    this.username = username
    this.password = password
    this.name = name
    this.phone = phone
    this.email = email
  }
}
