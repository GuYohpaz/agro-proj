import React, { useState } from 'react'

import { MainHeader } from '../cmps/main-header'

import { ShapesM } from '../cmps/shapes/shapes-m'
import { BagsM } from '../cmps/bags/bags-m'
import { SeedlingsM } from '../cmps/seedlings/seedling-m'

import { bagService } from '../services/bag-service'

export const Home = () => {

    // useState - accepts js primitive types and allow to initial / update them.
    const [switchHandle, setSwitchHandle] = useState(false)


    // todo: clear all databases updated values
   // Anecdotes: in jsx(inside HTML) '&&' operator  means to render (if something > 0 && <div> </div>) 


    // get 'yes' 'no' answers
    const onGetAnswer = (switchHandle) => {

        if (switchHandle === false) {

            bagService.getCapacities(false)

        } else {

            bagService.getCapacities(true)

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
                        <label onClick={() => { setSwitchHandle(true), onGetAnswer(true) }} name='yes'> Yes </label>/
                        <label onClick={() => { setSwitchHandle(false), onGetAnswer(false) }} name='no'> No </label>
                    </section>

                </nav>
                {switchHandle === true && <div> <SeedlingsM /></div>}
            </div>

            {switchHandle === false && <div> <BagsM /></div>}

        </section>
    )
}