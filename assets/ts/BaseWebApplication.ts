export const BaseTitleDisplay = reactive({
  parent: '',
  childs: [''],
})
export function clearChilds() {
  BaseTitleDisplay.childs.splice(0, BaseTitleDisplay.childs.length)
}
