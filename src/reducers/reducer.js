export default (state = {}, action) => {
    switch (action.type) {
        case 'LAST_CLICKED':
            return {
                result: action.payload
            }
        default:
            return state
    }
}