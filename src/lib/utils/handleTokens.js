import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../constants"

function saveTokens (accessToken, refreshToken) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
}

export {
  saveTokens
}