import {initialData} from '../context/AuthContext'

export default function reducer(state, action){
    switch (action.type) {
    case 'authUser':
        return {
            ...state, ...action.payload, error: false
        }

    case 'refuseUser':
        return {
            ...state,
            error: action.payload.error
        }

    case 'resetAuth':
        return initialData

    case 'fetchEnterprises':
        return action.payload

    default:
        return state
    }
}