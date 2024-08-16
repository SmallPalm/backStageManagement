enum CacheType {
  local,
  session
}

class AcacheStorage {
  storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.local ? window.localStorage : window.sessionStorage
  }

  setCache(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) return JSON.parse(value)
  }

  removeCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new AcacheStorage(CacheType.local)
const sessionCache = new AcacheStorage(CacheType.session)

export { localCache, sessionCache }
export default AcacheStorage
