import { useState, useEffect } from 'react'

import { seedlingService } from '../../services/seedling-service'



// Anecdotes:  data flow between SeedlingsM <--> Service 
export const SeedlingsM = () => {


    const [seedlings, setSeedlings] = useState([])
    const [seedlingValueToAdd, setSeedling] = useState({ capacity: '', amount: '' })


    useEffect(() => {
        loadSeedling()
    }, [seedlings])

    const loadSeedling = async () => {
        const seedlings = await seedlingService.query()
        setSeedlings(seedlings)
    }

    const onAddSeedling = async (ev) => {
        ev.preventDefault()
        const addedSeedling = await seedlingService.save(seedlingValueToAdd)
        setSeedling({ capacity: '', amount: '' })
    }


    const handleChange = (ev) => {
        const { name, value, type } = ev.target
        type === 'number' || 'range' ? +value : value
        setSeedling({ ...seedlingValueToAdd, [name]: value })
    }

    // requer dev ---> if seedlings.length > 1 - when try to remove one seedling, the next one removed not him.
    const onRemoveSeedling = (seedlingId) => {
        // console.log(seedlingId);
        seedlingService.remove({ _id: seedlingId })
    }

    const onCalculateAddedSeedling = async (ev) => {
        ev.preventDefault()
        seedlingService.sumThenMultiplySavedSeedlings()
    }


    // console.log(seedlingId);
    // console.log(seedlings);
    // console.log(seedlingValueToAdd);
    // console.log(seedlings);

    return (


        <form className='seedlings-container flex column' action="">

            <div className='flex row'>
                <h4>Which Seedling Capacity:</h4>
                <input type='number' name='capacity' value={seedlingValueToAdd.capacity} onChange={handleChange} />
                <span>Liter</span>
            </div>

            <h5>Choose Seedling Amount:</h5>
            <input type="range" name='amount' value={seedlingValueToAdd.amount} min='0' max='250' onChange={handleChange} />

            <section className='flex row'>
                <input name='amount' value={seedlingValueToAdd.amount} type="number" onChange={handleChange} />
                <span>Units</span>
                <button onClick={onAddSeedling} >Add</button>
            </section>

            <h6>Added To Calculate:</h6>

            {seedlings.length > 0 && <ul className='flex row'>
                {seedlings.map(seedling =>
                    seedling &&
                    <li className='flex column' key={seedling._id}>
                        <p onClick={() => { onRemoveSeedling(seedling._id) }} >x</p>
                        <pre>{seedling.capacity} Liter Seedling</pre>
                        <pre>{seedling.amount} Units</pre>

                    </li>

                )}
            </ul>}

            <button onClick={onCalculateAddedSeedling}>Calculate</button>

        </form>

    )
}