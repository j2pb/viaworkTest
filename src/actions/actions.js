export const lastClickedAction = (payload) => dispatch => {
    dispatch({
        type: 'LAST_CLICKED',
        payload: payload
    })
}