export default (state = { birthYear:0 }, action) => {
    switch(action.type){
        case 'birthyearChanged':
            return { birthYear: action.payload }
        default:
            return state
    }
}