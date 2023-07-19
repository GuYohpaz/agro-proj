import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { MainHeader } from '../cmps/main-header';

import { loadShapes, setFilterBy } from '../cmps/store/shape-action'
import { ShapesM } from '../cmps/shapes/shapes-m'

import { BagsM } from '../cmps/bags/bags-m'

import { loadSeedlings } from '../cmps/store/seedling-action'
import { SeedlingsM } from '../cmps/seedlings/seedling-m'

import arrow from '../assets/imgs/arrow.png'
import { bagService } from '../services/bag-service'


export const Home = () => {

    const dispatch = useDispatch()

    const [switchHandle, setSwitchHandle] = useState(false)

        // todo: clear all camps states values
        // ev.prevantDefult - prevent from events to effect on ther father?


        useEffect(() => {
            // dispatch(loadShapes())

        }, [])

    // console.log(shapes);



    //whereToPut?
    const onGetAnswer = (switchHandle) => {
        if (switchHandle === false) {
            bagService.getCapacities(false)
        } else {
            bagService.getCapacities(true)

            // return null
        }
    }


    // console.log(switchHandle);
    return (

        <section className='home main-layout flex column align-center '>

            <div> <MainHeader /> </div>
            <div> <ShapesM /> </div>

            <div style={{ visibility: 'hidden' }} className='seedlings-nav'>
                <nav><h2>Include Seedling Capacity</h2>

                    <section className='space-between'>
                        <label onClick={() => { setSwitchHandle(true), onGetAnswer(true)}} name='yes'> Yes </label>/
                        <label onClick={() => { setSwitchHandle(false), onGetAnswer(false) }} name='no'> No </label>
                    </section>

                </nav>
                {switchHandle === true && <div> <SeedlingsM /></div>}
            </div>

            {switchHandle === false && <div> <BagsM /></div>}

        </section>
    )
}