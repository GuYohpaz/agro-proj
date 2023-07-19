import React, { useEffect, useState } from 'react'

import { bagService } from '../../services/bag-service';



// Anecdotes:  data flow between BagsM to service 
export const BagsM = () => {
    const [bags, setBags] = useState([])

    useEffect(() => {
        loadBags()
    }, [bags])

    const loadBags = async () => {
        const bags = await bagService.query()
            setBags(bags)   
    }


// console.log(bags);
    return (
        <form className='bags-container flex column align-center'>
            {/* <h2>Bags Amount:</h2> */}

            <ul className='flex column'>
                {bags.map(bag =>
                    bag.amount > 0 &&
                    <li className='flex row space-between' key={bag._id}>

                        <pre>{bag.name}</pre>
                        <span>{bag.amount}</span>

                    </li>)
                }
            </ul>
        </form>
    )


}