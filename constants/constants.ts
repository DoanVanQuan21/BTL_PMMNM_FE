export class TitlePage {
  static readonly LOGIN_PAGE = "Đăng nhập";
  static readonly REGISTER = "Đăng ký";
  static readonly FORGOT_PASSWORD = "Quên mật khẩu";
  static readonly AUTH_ACCOUNT = "Xác nhận mật khẩu";
  static readonly RESET_PASSWORD = "Đổi mật khẩu";
  static readonly SETTING_ACCOUNT = "Cài đặt tài khoản";
  static readonly PATIENT_RECORDS = "Hồ sơ bệnh nhân";
  static readonly CONFIRM_EMAIL = "Kiểm tra email";
}
export class RedirectPage {
  static readonly HOME = "/admin/home";
  static readonly EDIT_USER = "/admin/edit-user";
  static readonly PATIENT_RECORDS = "/admin/patient-records";
  static readonly LOGIN = "/auth/login";
  static readonly RERGISTER = "/auth/register";
  static readonly FORGOT_PASSWORD = "/auth/forgot-password";
  static readonly AUTH_ACCOUNT = "/auth/authentication-account";
  static readonly RESET_PASSWORD = "/auth/reset-password";
  static readonly CONFIRM_EMAIL = "/auth/confirm-email";
  static readonly URL_GMAIL_PAGE = "https://mail.google.com/";
}

export class ResponseStatus {
  static readonly HTTP_OK = 200;
  static readonly HTTP_UNAUTHORIZED = 401;
  static readonly HTTP_PAYMENT_REQUIRED = 402;
  static readonly HTTP_FORBIDDEN = 403;
  static readonly HTTP_NOT_FOUND = 404;
  static readonly HTTP_UNPROCESSABLE_ENTITY = 422;
  static readonly HTTP_INTERNAL_SERVER_ERROR = 500;
  static readonly HTTP_BAD_GATEWAY = 502;
}
