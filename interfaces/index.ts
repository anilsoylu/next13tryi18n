export type StaticSetting = {
  id: number
  isActiveSslSite: boolean
  companyName: string
  companyPhone: string
  companyMobilePhone: string
  companyEmail: string
  loader: string
  logo: string
  favicon: string
  appleFavicon: string
  siteFormEmail: string
  siteFormEmailPassword: string
  siteFormEmailServer: string
  siteFormEmailPort: number
  isActiveSsl: boolean
  isActiveSearch: boolean
  isActiveNewsletter: boolean
  isActiveBannerTransparan: boolean
  isActiveProducts: boolean
  isActiveNews: boolean
  isActiveComments: boolean
  isActiveReferences: boolean
  isActiveWhatsapp: boolean
  headScript: string
  footerScript: string
  formResultScript: string
}

export type Setting = {
  id: number
  langId: number
  pageId: number
  type: number
  Keys: string
  Values: string
  sortOrder: number
}

export type SiteLanguage = {
  langId: number
  langName: string
  langCode: string
  langFlag: string
  isActived: boolean
  isDefault: boolean
  isPanel: boolean
  sortOrder: number
}

export type SiteModule = {
  moduleId: number
  moduleName: string
  moduleEngName: string
  moduleTable: string
  moduleFolder: string
  moduleInformation: string
  moduleEngInformation: string
  moduleVersion: string
  isActived: boolean
  isPaginate: boolean
  isSlug: boolean
  sortOrder: number
}

export type SiteMenu = {
  menuId: number
  menuName: string
  menuLink: string
  menuLangId: number
  menuModuleId: number
  menuParentId: number
  menuCategoryId: number
  menuMainCategoryId: number
  menuMainCategoryName: string
  menuMainCategoryLink: string
  isVisibled: boolean
  showPlace: string
  externalLink: string
  menuTarget: string
  isActived: boolean
  sortOrder: number
  menuTitle: string
  menuDescription: string
  submenus: SiteMenu[]
}

export type SocialMedia = {
  socialId: number
  socialName: string
  socialLink: string
  isActived: boolean
  sortOrder: number
}


export type ResponseError = {
  message: string
}