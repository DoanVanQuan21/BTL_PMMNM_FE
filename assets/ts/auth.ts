export const auth = reactive({
  title: '',
})
export const sologon = 'Chúng tôi sẽ không bao giờ chia sẻ thông tin của bạn với bất kỳ ai.'
export const errMessages = reactive({
  isError: true,
  textColor: '',
  errorUsername: '',
  errorPassword: '',
  errorConfirmPassword: '',
  content: sologon,
  errEmail: '',
})