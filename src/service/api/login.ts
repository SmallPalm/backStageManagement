import hyRequest from ".."

export function accountLoginRes(account: any) {
  return hyRequest.post({
    url: "/login",
    data: account
  })
}

export function createCodeImg() {
  return hyRequest.get({
    url: "/captchaImage"
  })
}
