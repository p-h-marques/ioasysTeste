export default function reducer(state, action){
    switch (action.type) {
    case 'handleAuth':
        return { ...state, error: action.payload} //temp

    default:
        return state
    }
}