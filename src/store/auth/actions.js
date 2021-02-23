import {makeHeaders, urlEnterprises} from '../enterprises/actions'

export const url = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in'
export const codeStorage = 'io_auth'

export async function handleAuth(dispatch, data){
    const {email, password} = data

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }

    const request   = await fetch(url, config)
    const response  = await request.json()

    if(response.success){

        let body = {
            'access-token': request.headers.get('access-token'),
            'client': request.headers.get('client'),
            'uid': request.headers.get('uid')
        }

        localStorage.setItem(codeStorage, JSON.stringify(body))

        dispatch({
            type: 'authUser',
            payload: {...body}
        })

        return true

    } else {

        localStorage.removeItem(codeStorage)

        dispatch({
            type: 'refuseUser'
        })

        return false

    }
}

export async function verifyAuth(stateAuth){
    let keys        = ['access-token', 'client', 'uid']
    let actualAuth  = {}

    //estado global
    keys.forEach(el => {
        actualAuth[el] = stateAuth[el]
    })

    //local storage
    let localState = JSON.parse(localStorage.getItem('io_auth'))

    if(localState != null){
        keys.forEach(el => {
            if(actualAuth[el] == '') actualAuth[el] = localState[el]
        })
    }

    //validação
    let validate = true
    keys.forEach(el => {
        if(actualAuth[el] == '') validate = false
    })

    if(!validate) return false

    //requisição
    let config      = makeHeaders(actualAuth)
    const request   = await fetch(urlEnterprises, config)

    validate = request.status == 200 ? true : false

    return {validate, actualAuth}
}