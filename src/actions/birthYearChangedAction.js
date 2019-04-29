export const BirthYearChanged = (birthYear) => dispatch => {
    dispatch({
        type: 'birthyearChanged',
        payload: birthYear
    })
}