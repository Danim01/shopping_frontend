import { useState, useMemo, useCallback, createContext } from "react";
import { URL_BACKEND } from "../lib/constants";
import { saveTokens } from "../lib/utils/handleTokens";
import { useEffect } from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [accessToken, setAccessToken] = useState("")
  const [refreshToken, setRefreshToken] = useState("")

  const getProfile = useCallback(async () => {
    if (!accessToken) return

    try {
      const response = await fetch(`${URL_BACKEND}users/profile/`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      })
      if (response.ok) {
        const json = await response.json()
        setUser(json)
      }
    } catch (error) {
      console.log(error)
    }
  }, [accessToken])

  const login = useCallback(async ({ email, password }) => {
    try {
      const response = await fetch(`${URL_BACKEND}users/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (response.ok) {
        const json = await response.json()
        const { access, refresh } = json
        saveTokens(access, refresh)
        setAccessToken(access)
        setRefreshToken(refresh)

      } else {
        console.log("No se pudo logear")
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect (() => {
    if (user) return
    getProfile()
  }, [getProfile, user, accessToken])

  const contextValue = useMemo(() => ({
    login,
    accessToken,
    refreshToken,
    getProfile,
    user
  }), [login, accessToken, refreshToken, getProfile, user])

  return (
    <AuthContext.Provider
      value={
        contextValue
      }
    >
      {children}
    </AuthContext.Provider>
  )
}
