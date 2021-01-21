const url = 'https://empresas.ioasys.com.br/api/v1/users/auth/sign_in'

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
        dispatch({
            type: 'authUser',
            payload: {
                'access-token': request.headers.get('access-token'),
                'client': request.headers.get('client'),
                'uid': request.headers.get('uid')
            }
        })
        return true
    } else {
        dispatch({
            type: 'refuseUser',
            payload: {error: true}
        })
        return false
    }
}