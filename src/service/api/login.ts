import hyRequest from ".."

// 获取token
export function accountLoginRes(account: any) {
  return hyRequest.post({
    url: "/login",
    data: account
  })
}
// 获取验证码
export function createCodeImg() {
  return hyRequest.get({
    url: "/captchaImage"
  })
}
// 获取用户信息
export function getInfo() {
  return hyRequest.get({
    url: "/getInfo"
  })
}
// 退出登录
export function logout() {
  return hyRequest.post({
    url: "/logout"
  })
}
