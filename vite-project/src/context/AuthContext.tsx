import React, { useState, useEffect, useRef, useTransition } from 'react'
import type { ReactNode } from 'react'
import {
  AuthContext,
  type User,
  type AuthContextType,
} from './AuthContextDefinition'

export type { User, AuthContextType }
export { AuthContext }

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<{
    user: User | null
    token: string | null
  }>({
    user: null,
    token: null,
  })
  const initialized = useRef(false)
  const [, startTransition] = useTransition()

  useEffect(() => {
    if (initialized.current) return

    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')

    if (savedToken && savedUser) {
      const parsed = JSON.parse(savedUser)
      startTransition(() => {
        setState({ token: savedToken, user: parsed })
      })
    }
    initialized.current = true
  }, [])

  const login = (newToken: string, newUser: User) => {
    setState({ token: newToken, user: newUser })
    localStorage.setItem('token', newToken)
    localStorage.setItem('user', JSON.stringify(newUser))
  }

  const logout = () => {
    setState({ token: null, user: null })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const value: AuthContextType = {
    user: state.user,
    token: state.token,
    isAuthenticated: !!state.token,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
