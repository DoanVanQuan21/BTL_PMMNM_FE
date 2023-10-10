export const BaseEnable = reactive({
  margin_left_header: '0px',
  margin_left: '300px',
  left: '0px',
  width: '300px',
  isEnabled: false,
  isHidden: false,
  active: 'collapsed',
})
export async function onClick() {
  const width = window.innerWidth
  if (!BaseEnable.isEnabled) {
    BaseEnable.isEnabled = true
    BaseEnable.margin_left = '90px'
    if (width >= 1199)
      BaseEnable.margin_left_header = '-280px'
    else
      BaseEnable.margin_left_header = '-93px'
    BaseEnable.width = '93px'
    BaseEnable.isHidden = true
  }
  else {
    BaseEnable.isEnabled = false
    BaseEnable.margin_left = '300px'
    BaseEnable.margin_left_header = '0px'
    BaseEnable.width = '300px'
    await delay(120)
    BaseEnable.isHidden = false
  }
}
async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
