export const urlEnterprises = 'https://empresas.ioasys.com.br/api/v1/enterprises'

export function makeHeaders(authState){
    return {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'access-token': authState['access-token'],
            'client':       authState['client'],
            'uid':          authState['uid']
        }
    }
}

export async function fetchAllEnterprises(authState, dispatchEnterprises){
    let config = makeHeaders(authState)
    console.log(authState)

    const request  = await fetch(urlEnterprises, config)
    const response = await request.json()

    if(request.status == 200){
        dispatchEnterprises({
            type: 'fetchEnterprises',
            payload: response.enterprises
        })

        return true
    }

    return false

}

export async function fetchFilteredEnterprises(authState, filter, dispatchEnterprises){

    let config = makeHeaders(authState)

    const request  = await fetch(urlEnterprises + `?name=${filter}`, config)
    const response = await request.json()

    if(request.status == 200){
        dispatchEnterprises({
            type: 'fetchEnterprises',
            payload: response.enterprises
        })

        return response
    }

    return false
}

export async function fetchIdEnterprise(authState, id){
    let config = makeHeaders(authState)

    const request  = await fetch(urlEnterprises + `/${id}`, config)
    const response = await request.json()

    if(request.status == 200){
        return response.enterprise
    }

    return false
}