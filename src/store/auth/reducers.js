import {initialData} from './context'

export default function reducer(state, action){
    switch (action.type) {
    case 'authSingleUpdate':
        return {...state, ...action.payload}

    case 'authUser':
        return {
            ...state,
            ...action.payload,
            login: true,
            logout: false,
            errors: false
        }

    case 'refuseUser':
        return {
            ...initialData,
            errors: true,
            loading: false,
            login: false,
            logout: true
        }

    case 'afterRefuseUser':
        return {
            ...initialData,
            errors: true,
            loading: false,
            login: false
        }

    default:
        return state
    }
}