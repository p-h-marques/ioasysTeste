import React from 'react'
import {useHistory} from 'react-router-dom'

import {CardStyles} from './styles'
import Cover from '../cover'

const Card = ({id, enterprise_name, enterprise_type, country}) => {
    const history = useHistory()

    return (
        <CardStyles key={id} onClick={()=>{history.push('/admin/' + id)}}>
            <Cover id={id}/>
            <div className="infos">
                <h2>{enterprise_name}</h2>
                <p className="type">{enterprise_type.enterprise_type_name}</p>
                <p className="country">{country}</p>
            </div>
        </CardStyles>
    )
}

export default Card