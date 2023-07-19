import React from 'react'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ToRectangular } from '../shapes/shapes-rectangular'
import { ToCube } from '../shapes/shapes-cube'
import { ToCylinder } from '../shapes/shapes-cylinder'

import { setFilterBy, updateShape, loadShapes, loadShape } from '../store/shape-action'

import arrow from '../../assets/imgs/arrow.png'


export const ShapesM = () => {

    // shapesState preject shapes name, why not bring only names state?
    const { shapes, shape } = useSelector(state => state.shapeModule) // globalState
    const dispatch = useDispatch()

    const [valueToUpdate, setValue] = useState({ depth: '', length: '', width: '', radius: '' })
    const [switchHandle, setSwitchHandle] = useState(false)
    const [filterBy, setFilter] = useState({ name: '' })


    useEffect(() => {
        dispatch(loadShapes())
        if (shape?.length > 0) return
        dispatch(loadShape())
        

    }, [])

// use for Eq...
    const onLoadShape = async (shapeId) => {
        dispatch(loadShape(shapeId))

        // const shape = await shapesService.getById(shapeId)
        // setShape(shape)

        if (shapeId) {
            // close option tags
            setSwitchHandle(false)

            //     if (shapes.length > 0 && shapes.length === 1) {

            //         shape = shapes[0]
            //     }
            // } else {
            //     var filteredState = await shapes.find(shapeToFilter =>
            //         shapeToFilter._id === shape._id)
            //     shape = filteredState
        }


    }

    const handleChange = (ev) => {
        const { name, value, type } = ev.target
        type === 'number' ? +value : value
        setValue({ ...valueToUpdate, [name]: value })

    }

    // search list filter
    const handleFilterChange = (ev) => {
        const { name, value, type } = ev.target
        type === 'text' ? value : +value
        setFilter({ ...filterBy, [name]: value })
        // delay in chaining letters between files, why?
        dispatch(setFilterBy(filterBy))
        dispatch(loadShapes())

        // open optin list when input (letter) added, else...
        value.length > 0 ?
            setSwitchHandle(true) :
            setSwitchHandle(false)
    }



    const onUpdateValues = async (ev) => {
        ev.preventDefault()
        if (!valueToUpdate.depth && !valueToUpdate.length && !valueToUpdate.width) return alert('All fields are required')
        dispatch(updateShape(valueToUpdate, shape._id))
        // console.log(shape._id);
        setValue({ depth: '', length: '', width: '', radius: '' })

        // hide inputs when values updating  // tod :  function
        const elements = document.getElementsByClassName('eq-inputs')
        const element = elements[0]
        if (element) {

            element.style.visibility = 'hidden'

        } else {
            element.style.visibility = 'visible'

        }

        // reveal shape result tag after updating values // todo : function, text reveal transition
        const h3Tag = document.querySelector('.shape-result')

        if (h3Tag) {
            h3Tag.style.visibility = 'visible'
        }

        // reveal seedlings nav  // todo:  delay transtiion
        const seedlingsNavTag = document.querySelector('.seedlings-nav')
        if (seedlingsNavTag) {
            seedlingsNavTag.style.visibility = 'visible'
        }
    }


    // console.log(switchHandle);
    // console.log('shapesThenFilteredOne:', shapes);
    // console.log('clickedOptin:', shape);
    //  console.log(filterBy);
    // console.log(filteredShapeId);  
    // console.log(valueToUpdate);


    // Anecdotes:

    // two controllers for options list ->
    // 1. 'input' manipulate over the options list by filter action.
    // 2.  'img'  onclick reveal options list. 
    // ---------------------------------------- 
    //---> 'option' onclick take id then return the compatible shape.
    //--->  onUpdateValues() --> eventually the args were saved in  DB then went through shapeState.


    if (shapes) return (

        <section className='shapes-container flex '>

            <div>

                {/* searchNav */}
                <article className='flex row align-center space-between'>
                    <input type='text' name='name' value={filterBy.name} onChange={handleFilterChange} placeholder={shape?.length !== 0 ? shape?.name : 'Search Shape...'} />
                    {/* // options list link (imgTag) */}
                    <img style={{ rotate: switchHandle === false ? '-90deg' : '0deg' }} onClick={() => setSwitchHandle(prevSwitchHandle => !prevSwitchHandle)} src={arrow} alt="" />
                </article>

                {switchHandle === true && shapes.map(shape =>
                    <option key={shape._id} onClick={() => onLoadShape(shape._id)} >{shape.name}</option>
                )}
                {/* /// */}

                {/* render only if option clicked, prevent from Eq inputs to render when filterBy inputs executed */}
                {shape?._id && <section className='shapesEq-box'>

                    {/* shapes Eq */}
                    {shape?.name === 'Rectangular' && <div>

                        < ToRectangular key={shape?._id} rectangularEq={shape?.shapeEquation} onUpdateValues={onUpdateValues} handleChange={handleChange} valueToUpdate={valueToUpdate} />
                    </div>}


                    {shape?.name === 'Cube' && <div>

                        < ToCube key={shape?._id} cubeEq={shape?.shapeEquation} onUpdateValues={onUpdateValues} handleChange={handleChange} valueToUpdate={valueToUpdate} />
                    </div>}


                    {shape?.name === 'Cylinder' && <div>

                        < ToCylinder key={shape?._id} cylinderEq={shape?.shapeEquation} onUpdateValues={onUpdateValues} handleChange={handleChange} valueToUpdate={valueToUpdate} />
                    </div>}

                </section>}


            </div>


        </section>

    )


}



