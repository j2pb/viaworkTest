export default (state = [], action) => {
    switch (action.type) {
        case 'LAST_CLICKED':
            return [
                action.payload,
                ...state
            ]
        default:
            return state
    }
}