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
        return true
    } else {
        return false
    }
}