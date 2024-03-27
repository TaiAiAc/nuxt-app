declare module 'nuxt/schema' {
  interface AppConfigInput {
    ui: {
      primary: 'primary1'
      fern: 'fern'
    }
    locale: 'zh-CN' | 'en-US'
  }
}

// It is always important to ensure you import/export something when augmenting a type
export {}
