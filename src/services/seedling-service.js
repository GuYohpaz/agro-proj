import { storageService } from './async-storage.service.js'

const STORAGE_KEY = 'seedling'

export const seedlingService = {
    query,
    getById,
    save,
    remove,
    sumThenMultiplySavedSeedlings,

}


window.cs = seedlingService

// initial db state = []
async function query() {

    return storageService.query(STORAGE_KEY)
        .then((seedlings) => {

            if (!seedlings || !seedlings.length) {
                storageService.postMany(STORAGE_KEY, [])
                seedlings = []
            }

            return seedlings

        })
}


async function getById(seedlingId) {
    // console.log(seedlingId);
    return storageService.get(STORAGE_KEY, seedlingId)

}


async function save(seedling) {
    // console.log(seedling);
    var savedSeedling

    if (seedling._id) {

        savedSeedling = await storageService.put(STORAGE_KEY, seedling)

    } else {

        savedSeedling = await storageService.post(STORAGE_KEY, seedling)
    }

    return savedSeedling
}


async function remove(seedlingId) {

    await storageService.remove(STORAGE_KEY, seedlingId)
}


// xxxx requer dev multiply the sum or put ()
async function sumThenMultiplySavedSeedlings() {
    var capacitySumResult = 0
    var amountSumResult = 0
    var seedlingsCapacity = 0
    var seedlings = await query()
    // console.log(seedlings);
    if (seedlings.length > 0) {
        seedlings.map(seedling => {

            if (seedling.capacity) {
                capacitySumResult += +seedling.capacity
            }


            if (seedling.amount) {
                amountSumResult += +seedling.amount
            }

            return seedlingsCapacity = amountSumResult * capacitySumResult

        })
        console.log(seedlingsCapacity);

    }

    // CreateOutputForHTML
}


