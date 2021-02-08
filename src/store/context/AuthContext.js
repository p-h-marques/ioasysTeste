import {createContext} from 'react'

export const initialData = {
    'access-token': '',
    'client': '',
    'uid': '',
    'loading': true,
    'errors': false,
    'login': false,
    'logout': false
}

const AuthContext = createContext()

export default AuthContext