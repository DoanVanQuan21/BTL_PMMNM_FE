export const BaseEnable = reactive({
  margin_left_header: '0px',
  margin_left: '300px',
  width: '0px',
  isEnabled: false,
})
export function onClick() {
  if (!BaseEnable.isEnabled) {
    BaseEnable.isEnabled = true
    BaseEnable.width = '-300px'
    BaseEnable.margin_left = '0px'
    BaseEnable.margin_left_header = '-300px'
  }
  else {
    BaseEnable.isEnabled = false
    BaseEnable.width = '0px'
    BaseEnable.margin_left = '300px'
    BaseEnable.margin_left_header = '0px'
  }
}
