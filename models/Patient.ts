export class Patient {
  public healthInsuranceNumber: String
  public fullname: String
  public phone: String
  public birthday: String
  public gender: String
  public address: String
  public constructor(health: string, fullname: string, phone: string, birthday: string, gender: string, address: string) {
    this.healthInsuranceNumber = health
    this.fullname = fullname
    this.phone = phone
    this.birthday = birthday
    this.gender = gender
    this.address = address
  }

  static getAllPatient() {
    const patients = [new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang')]
    patients.push(new Patient('0129ás31', 'Nguyễn Văn A', '0867687695', '07/05/2002', 'Nữ', 'Lương Phong - Hiệp Hòa - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    patients.push(new Patient('012931', 'Nguyễn Văn A', '0867687695', '21/05/2002', 'Nam', 'Việt Tiến - Việt Yên - Bắc giang'))
    return patients
  }
}
