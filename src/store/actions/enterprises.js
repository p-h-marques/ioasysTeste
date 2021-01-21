export const urlEnterprises = 'https://empresas.ioasys.com.br/api/v1/enterprises'

export async function fetchAllEnterprises(authState, dispatchEnterprises){
    console.log(authState)

    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': authState['access-token'],
            'client':       authState['client'],
            'uid':          authState['uid']
        }
    }

    const request  = await fetch(urlEnterprises, config)
    const response = await request.json()

    if(request.status == 200){
        dispatchEnterprises({
            type: 'fetchAllEnterprises',
            payload: response.enterprises
        })

        return true
    }

    return false

}