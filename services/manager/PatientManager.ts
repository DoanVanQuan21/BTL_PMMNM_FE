import { Patient } from '@/models/Patient'

export class PatientManager {
  private patient: Patient = new Patient()
  constructor(patient: Patient) {
    this.patient = patient
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
