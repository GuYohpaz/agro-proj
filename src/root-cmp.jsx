import { Route, Routes } from 'react-router-dom'


import '../src/assets/styles.scss'
import { Home } from './pages/home'
import { ShapesM } from './cmps/shapes/shapes-m'
import { SeedlingsM } from '../src/cmps/seedlings/seedling-m'


function RootCmp() {


    return (
        <section >
               <Routes>
                    <Route path='/' element={<Home />} /> 
                    {/* <Route path=' /seedlings' element={<SeedlingsM />} />             */}

                </Routes>  

        </section >
    )
}

export default RootCmp