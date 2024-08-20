import hyRequest from ".."

export function getAuthRouter() {
  return hyRequest.get({
    url: "/getRouters"
  })
}
