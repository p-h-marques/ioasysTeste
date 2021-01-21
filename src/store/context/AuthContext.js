import {createContext} from 'react'

export const initialData = {
    'access-token': '',
    'client': '',
    'uid': '',
    error: false
}

const AuthContext = createContext(initialData)

export default AuthContext