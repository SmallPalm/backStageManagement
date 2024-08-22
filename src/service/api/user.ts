import hyRequest from ".."

// 获取用户信息
export function getUserInfo() {
  return hyRequest.get({
    url: "/getInfo"
  })
}
