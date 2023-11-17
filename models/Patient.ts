export class Patient {
  public healthInsuranceNumber?: String
  public fullname?: String
  public phone?: String
  public birthday?: String
  public gender?: String
  public address?: String
  constructor(health?: string, fullname?: string, phone?: string, birthday?: string, gender?: string, address?: string) {
    this.healthInsuranceNumber = health
    this.fullname = fullname
    this.phone = phone
    this.birthday = birthday
    this.gender = gender
    this.address = address
  }
}
