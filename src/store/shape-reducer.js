const initialState = {
    shapes: [],
    shape: [],
    filterBy: null




}
export function shapeReducer(state = initialState, action) {


    switch (action.type) {

        case 'SET_SHAPES':
            return { ...state, shapes: action.shapes }


        case 'SET_SHAPE':
            return { ...state, shape: action.shape }



        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }


        case 'UPDATE_SHAPE':
            return {
                //update directly shapeState
                ...state, 
                shape: action.shape
                // ...state,
                // shapes: state.shapes.map(shape => (shape._id === action.shape._id) ? action.shape : shape)
            }



        default:
            // console.log(state);
            return state
    }

}

