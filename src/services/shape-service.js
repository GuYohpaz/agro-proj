import { storageService } from './async-storage.service.js'


const STORAGE_KEY = 'shape'

export const shapesService = {
    query,
    getById,
    update,
    getCapacity

}

window.cs = shapesService

var shapesToCalculate = [

    { _id: 's001', name: 'Rectangular', shapeEquation: { width: 0, depth: 0, length: 0, capacity: 0, imgUrl: '' } },
    { _id: 's002', name: 'Cube', shapeEquation: { length: 0, capacity: 0, imgUrl: '' } },
    { _id: 's003', name: 'Cylinder', shapeEquation: { Pi: 3.14159265359, depth: 0, radius: 0, capacity: 0, imgUrl: '' } }

]



// rectangular: { _id: 's001', name: 'Rectangular', shapeEquation: { width: 0, depth: 0, length: 0, capacity: 0, imgUrl: '' } },
// cube: { _id: 's002', name: 'Cube', shapeEquation: { length: 0, capacity: 0, imgUrl: '' } },
// cylindr: { _id: 's003', name: 'Cylinder', shapeEquation: { Pi: 3.14159265359, depth: 0, radius: 0, capacity: 0, imgUrl: '' } }




async function query(filterBy) {
    // console.log(filterBy);

    return storageService.query(STORAGE_KEY).then((shapes) => {
        if (!shapes || !shapes.length) {
            storageService.postMany(STORAGE_KEY, shapesToCalculate)
            shapes = shapesToCalculate
        }

        if (filterBy) {
            var { name } = filterBy
            // return the filtered elements
            shapes = shapes.filter(shape =>
                // check if both args compatible
                shape.name.toLowerCase().includes(name.toLowerCase()))


        }
        // console.log(shapes);

        return shapes
    })
}



async function getById(shapeId) {
    // console.log(shapeId);
    return storageService.get(STORAGE_KEY, shapeId)

}



// return updated to action file
async function update(values, shapeId) {
    // console.log(values); console.log(shapeId);
    const shapeToUpdate = await getById(shapeId)
    console.log(shapeToUpdate);

    if (shapeToUpdate.name === 'Rectangular') {
        updateRect(values, shapeToUpdate)
    }

    if (shapeToUpdate.name === 'Cube') {
        updateCube(values, shapeToUpdate)
    }

    if (shapeToUpdate.name === 'Cylinder') {
        updateCylinder(values, shapeToUpdate)
    }

    // console.log(shapeToUpdate);
    storageService.put(STORAGE_KEY, shapeToUpdate)
    return shapeToUpdate
}




async function updateRect(values, shapeToUpdate) {
    
    if (!values) throw new Error('Value didnt cross !')
    shapeToUpdate.shapeEquation.depth = +values.depth
    shapeToUpdate.shapeEquation.length = +values.length
    shapeToUpdate.shapeEquation.width = +values.width
    shapeToUpdate.shapeEquation.capacity = getCapacity(shapeToUpdate)

}



async function updateCube(values, shapeToUpdate) {

    if (!values) throw new Error('Value didnt cross !')
    shapeToUpdate.shapeEquation.length = +values.length
    shapeToUpdate.shapeEquation.capacity = getCapacity(shapeToUpdate)

}



async function updateCylinder(values, shapeToUpdate) {

    if (!values) throw new Error('Value didnt cross !')
    shapeToUpdate.shapeEquation.depth = +values.depth
    shapeToUpdate.shapeEquation.radius = +values.radius
    shapeToUpdate.shapeEquation.capacity = getCapacity(shapeToUpdate)

}




function getCapacity(shapeToUpdate) {

    var shapeCapacity = 0
    var shapeLength = shapeToUpdate.shapeEquation.length
    var shapeDepth = shapeToUpdate.shapeEquation.depth
    var shapeWidth = shapeToUpdate.shapeEquation.width
    var shapeRadius = shapeToUpdate.shapeEquation.radius
    const PI = shapeToUpdate.shapeEquation.Pi


    if (shapeToUpdate.name === 'Rectangular') {

        shapeCapacity = shapeDepth * shapeLength * shapeWidth

    }


    if (shapeToUpdate.name === 'Cube') {

        shapeCapacity = shapeLength ** 3

    }


    if (shapeToUpdate.name === 'Cylinder') {

        shapeCapacity = PI * shapeRadius ** 2 * shapeDepth

    }

    // console.log(shapeCapacity);
    return shapeCapacity
}







