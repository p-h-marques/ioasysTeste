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
            payload: body
        })

        return true

    } else {

        localStorage.removeItem(codeStorage)

        dispatch({
            type: 'refuseUser',
            payload: {error: true}
        })

        return false

    }
}