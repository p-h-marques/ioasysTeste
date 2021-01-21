import {createContext} from 'react'

export const initialData = {
    'access-token': '',
    'client': '',
    'uid': '',
    error: false
}

const AuthContext = createContext()

export default AuthContext