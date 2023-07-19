import { storageService } from './async-storage.service.js'
import { seedlingService } from './seedling-service.js'
import { shapesService } from './shape-service.js'



const STORAGE_KEY = 'bag'

export const bagService = {
    query,
    getCapacities,
    getBagsAmount
    // getById, 
    // update,
    // save,
    // changeBooleanMode,
    // getByIsTrue
    // getEmptyBag
}

window.cs = bagService


var bagsToConvert = [

     { _id: 'b001',name:'L25', imgUrl: '', amount: 0, capacity: 25 },
     { _id: 'b002',name:'L50', imgUrl: '', amount: 0, capacity: 50 },
     { _id: 'b003',name:'L75', imgUrl: '', amount: 0, capacity: 75 },
     { _id: 'b004',name:'L250', imgUrl: '', amount: 0, capacity: 250 } 

]



async function query() {
    
    return storageService.query(STORAGE_KEY).then((bags) => {
        if (!bags || !bags.length) {
            // console.log(bags);
            storageService.postMany(STORAGE_KEY, bagsToConvert)
            bags = bagsToConvert
        }
        

        return bags

    })
}

// GetCapacitiesThenSubtractIfNeeded
async function getCapacities(boolean) {
    // console.log(boolean);
    var totalCapacity=0
    const shapes = await shapesService.query()
    // const seedlings = await seedlingService.sumThenMultiplySavedSeedlings()
    // console.log('seedlingsC',seedlings);
    // wahad delay for seedlingsC
    
    // OnlyShapeCapacity
    if (boolean===false) {
  
      const shapeTo= await shapes?.find(shape => shape.shapeEquation.capacity > 0 ? totalCapacity = shape.shapeEquation.capacity:null)
    // console.log(shapeTo);
    // console.log(totalCapacity);
    getBagsAmount(totalCapacity)

//get seedlings capacity from seedlings service  the subtract with shape capacity.
    } else {
        
  
        
    }

    

}

async function getBagsAmount(totalCapacity) {
    // console.log(totalCapacity);
   const bags = await query()
//    console.log(bags);
bags.map(bag => {
    // console.log(bag);
    if (bag.capacity <= totalCapacity) {
        bag.amount = totalCapacity / bag.capacity
        // console.log(bag.amount);
   
    } else {
        bag.amount=== null// null ?
        console.log('Capacity To Small');
    }
    // console.log(bags);
    storageService._save(STORAGE_KEY, bags)
    return bag.amount
    // didnt worked before beacuse i compared bag.amount to var, why? 
})



}


  
        // function getEmptyBag() {
        //     return
        //     {
        //         L25B: 0,
        //          L50B: 0,
        //           L75B: 0,
        //           L250B: 0,
        
        
        //     }
        // }
// }