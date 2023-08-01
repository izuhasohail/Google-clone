export const initialState={
    term:null,
};

export const action_types={
    SET_SEARCH_TERM:'SET_SEARCH_TERM',
}


 const reducer = (state , action) => {

    // console.log(action);


    switch (action.type) {
       
        case action_types.SET_SEARCH_TERM:
            console.log(action.term);
            return {
                ...state,
                term:action.term,
                
            };
        default:
            return state;
    }
 };

 export default reducer;