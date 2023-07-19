import { seedlingService } from '../../services/seedling-service'



export function loadSeedling(seedlingId) {
  return async (dispatch) => {
      try {
          const seedling = await seedlingService.getById(seedlingId);
        console.log(seedling);
          dispatch({ type: 'SET_SEEDLING', seedling })
      } catch (err) {
          console.log('Cannot load seedling', err)
      }
  }
}



export function loadSeedlings() {
    return async (dispatch) => {
      try {
        const seedlings = await seedlingService.query()
        // console.log('seedlings from DB:', seedlings)
        dispatch({
          type: 'SET_SEEDLINGS',
          seedlings
        })
  
      } catch (err) {
  
        console.log('Cannot load seedlings', err)
      }
    }
  }


  export function addSeedling(seedlingToSave) {
    return async (dispatch) => {
      try {
        const addedSeedling = await seedlingService.save(seedlingToSave)
        // console.log('seedling:',  addedSeedling)
        dispatch({
          type: 'ADD_SEEDLING',
          addedSeedling
        })
  
      } catch (err) {
  
        console.log('Cannot add seedling', err)
      }
    }
  }


  export function removeSeedling(seedlingId) {
    return async (dispatch) => {
      try {
        console.log(seedlingId);
        const removedSeedlingId = await seedlingService.save(seedlingId)
        console.log('removedSeedling:',  removedSeedlingId)
        dispatch({
          type: 'REMOVE_SEEDLING',
          removedSeedlingId
        })
  
      } catch (err) {
  
        console.log('Cannot remove seedling', err)
      }
    }
  }



