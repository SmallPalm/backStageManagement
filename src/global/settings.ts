interface ISettings {
  // 网页标题
  title: string
  // // 网页描述
  // description: string
  // // 网页关键词
  // keywords: string
  // // 网页作者
  // author: string
  // // 网页版本
  // version: string
}

const settings: ISettings = {
  // 网页标题
  title: import.meta.env.VITE_APP_TITLE
  // // 网页描述
  // description: import.meta.env.VITE_APP_DESCRIPTION,
  // // 网页关键词
  // keywords: import.meta.env.VITE_APP_KEYWORDS,
  // // 网页作者
  // author: import.meta.env.VITE_APP_AUTHOR,
  // // 网页版本
  // version: import.meta.env.VITE_APP_VERSION
}
export default settings
