import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth"
declare module "D:/Users/thuydt/Documents/BTL_PMMNM_FE/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}