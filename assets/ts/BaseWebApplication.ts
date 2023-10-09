import { BaseEnable } from '~/assets/ts/template'

export const BaseTitleDisplay = reactive({
  parent: '',
  childs: [''],
})
export function clearChilds() {
  BaseTitleDisplay.childs.splice(0, BaseTitleDisplay.childs.length)
}
export const ActivePages = reactive({
  OverviewPage: BaseEnable.active,
  /**
   * ME -> medical examination
   */
  MEPage: BaseEnable.active,
  AppointmentPage: BaseEnable.active,
  /**
   * PR -> Patient Records
   */
  PRPage: BaseEnable.active,
  /**
   * LA -> List Account
   */
  LAPage: BaseEnable.active,
  /**
   * MM -> Medication management
   */
  MMPage: BaseEnable.active,
  /**
   * SM -> Service management
   */
  SMPage: BaseEnable.active,
  /**
   * RM -> Report management
   */
  RMPage: BaseEnable.active,

})
