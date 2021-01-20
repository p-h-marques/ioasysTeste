import {createContext} from 'react'

export const initialData = {
    email: '',
    password: '',
    auth: false,
    error: false
}

const AuthContext = createContext(initialData)

export default AuthContext