export interface LoginData {
  jwtToken: string
  user?: {
    id: number
    name: string
    email: string
  }
}

export interface LoginPostData {
  email: string
  password: string
}

export interface RegisterPostData {
  name: string
  email: string
  password: string
  confirmPassword?: string
}

export interface InputProps {
  name: string
  type: 'email' | 'password' | 'text' | 'number'
  placeholder?: string
  required?: boolean
  pattern?: string
  minLength?: number
  maxLength?: number
}

export interface FormValidationState {
  [key: string]: string
}
