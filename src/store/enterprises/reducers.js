export default function reducer(state, action){
    switch (action.type) {
    case 'fetchEnterprises':
        return action.payload

    default:
        return state
    }
}