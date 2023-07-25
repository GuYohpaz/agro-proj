import { storageService } from './async-storage.service.js'
import { seedlingService } from './seedling-service.js'
import { shapesService } from './shape-service.js'



const STORAGE_KEY = 'bag'

export const bagService = {
    query,
    getCapacities,
    getBagsAmount
   
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

// GetCapacitiesThenSubtractIfNeeded // args from Home page
// use more indicative name for boolean -  what does this boolean true for example calcuateBags 
//, and then if (calcuateBags) {....} else it will just arraive to the end of the function and return 
async function getCapacities(boolean) {
    // console.log(boolean);
    var totalCapacity=0
    const shapes = await shapesService.query()
    // const seedlingsCapacity = await seedlingService.sumThenMultiplySavedSeedlings()
    
    // OnlyShapeCapacity
    if (boolean===false) {
      //  use more indicative name for  shapeTo , and please can you explain why are you using the find? 
      const shapeTo= await shapes?.find(shape =>

        shape.shapeEquation.capacity > 0 ?
        totalCapacity = shape.shapeEquation.capacity:
        null)
    // naming - i would name totalCapacity as shapeCapacity
    getBagsAmount(totalCapacity)

    //get seedlings capacity from seedlings service  then  subtract with shape capacity.
    // (await for user action to add seedlings and to calculate ther capacity )
    } else {
        
        
    }


}

async function getBagsAmount(totalCapacity) {

const bags = await query()
  // maybe  add a bottom that asked - do you prefer small bags \ big bags and then you logic can be 
    // if big bags are prefered then you try to put as much as you can in big bags , for exaple think about this senario - i have a capacity of 500
    //, so every bag capacity < shapeCapacity . but if is it cheaper to bug big bags so the optimun is 2 bags of 250 each
bags.map(bag => {

    if (bag.capacity <= totalCapacity) {
        bag.amount = totalCapacity / bag.capacity
        // console.log(bag.amount);
   
    } else {
        bag.amount=== null// null ?
        console.log('Capacity To Small');
    }

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
