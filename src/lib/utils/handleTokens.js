import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants"

function saveTokens (accessToken, refreshToken) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
}

function getTokens () {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY)

  return { accessToken, refreshToken }
}

function deleteTokens () {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export {
  saveTokens,
  getTokens,
  deleteTokens
}