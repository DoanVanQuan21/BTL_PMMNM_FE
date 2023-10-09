import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "auth" | "blank" | "dashboard" | "default"
declare module "D:/Users/thuydt/Documents/BTL_PMMNM_FE/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}