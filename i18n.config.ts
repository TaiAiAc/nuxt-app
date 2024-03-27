import zhCN from './i18n/zh-cn.json'
import enUS from './i18n/en-us.json'

const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
}

export default defineI18nConfig(() => ({
  legacy: false,
  messages,
}))
