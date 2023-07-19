import { shapesService } from '../../services/shape-service'



export function loadShapes() {
  return async (dispatch, getState) => {
    // getState chaining between filterState -> shapesDB -> ShapesState?
    const { filterBy } = getState().shapeModule

    shapesService.query(filterBy).then(shapes => {

      dispatch({ type: 'SET_SHAPES', shapes })
    })

      .catch(err => { console.log('err:', err) })

  }
}

export function loadShape(shapeId) {
  return async (dispatch) => {
    try {
      const shape = await shapesService.getById(shapeId)
      // console.log(shape);
      dispatch({ type: 'SET_SHAPE', shape })
    } catch (err) {
      console.log('err:', err)

    }
  }
}

// Why not to bring only capacity result from the service? beacuse this is the only output that needs to return for the Html.     
export function updateShape(valueToUpdate, shapeId) {
  // console.log(shapeId);
  return async (dispatch) => {
    try {
      const updatedShape = await shapesService.update(valueToUpdate, shapeId)
      console.log(updatedShape);
      dispatch({ type: 'UPDATE_SHAPE', shape: updatedShape })
    } catch (err) {
      console.log('err:', err)
    }
  }
}



export function setFilterBy(filterBy) {
  // console.log(filterBy);
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
