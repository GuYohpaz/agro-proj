const initialState = {
    seedlings: [],
    // seedling: null

}



export function seedlingReducer(state = initialState, action) {
    var newState = state

    switch (action.type) {

        case 'SET_SEEDLINGS':
            return newState = { ...state, seedlings: action.seedlings }

        case 'REMOVE_SEEDLING':
            return newState =  {  ...state,  seedlings: state.seedlings.filter(seedling => seedling._id !== action.seedlingId)
            }

        case 'ADD_SEEDLING':
            return newState = { ...state, seedlings: [...state.seedlings, action.seedling] }

            // case 'SET_SEEDLING':
            //     return newState = { ...state, seedling: action.seedling }


        default:

    }
    // For debug:
    // window.seedlingState = newState
    // console.log('Prev State:', state)
    // // // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
