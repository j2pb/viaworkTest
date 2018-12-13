export const lastClickedAction = (eu) => dispatch => {
    dispatch({
        type: 'LAST_CLICKED',
        payload: eu
    })
}