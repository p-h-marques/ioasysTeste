import {createContext} from 'react'

export const initialData = {
    email: '',
    password: '',
    error: false
}

const AuthContext = createContext(initialData)

export default AuthContext