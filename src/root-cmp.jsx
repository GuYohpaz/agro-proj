import { Route, Routes } from 'react-router-dom'

import '../src/assets/styles.scss'
import { Home } from './pages/home'


function RootCmp() {


    return (
        <section >
               <Routes>

                    <Route path='/' element={<Home />} /> 

                </Routes>  

        </section >
    )
}

export default RootCmp