import { useState, useMemo, useCallback, createContext } from "react";
import { URL_BACKEND } from "../lib/constants";
import { saveTokens } from "../lib/utils/handleTokens";
import { useEffect } from "react";

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [tokens, setTokens] = useState({
    access: "",
    refresh: ""
  })

  const getProfile = useCallback(async () => {
    console.log("Estoy aquí")
    if (!tokens.access) return

    try {
      const response = await fetch(`${URL_BACKEND}users/profile/`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${tokens.access}`,
        },
      })
      if (response.ok) {
        const json = await response.json()
        setUser(json)
      }
    } catch (error) {
      console.log(error)
    }
  }, [tokens.access])

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
        setTokens({ access, refresh })

      } else {
        console.log("No se pudo logear")
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect (() => {
    console.log(tokens.access)
    getProfile()
  }, [tokens.access, getProfile])

  const contextValue = useMemo(() => ({
    login,
    tokens,
    getProfile,
    user
  }), [login, tokens, getProfile, user])

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
