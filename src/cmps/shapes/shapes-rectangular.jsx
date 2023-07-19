


export const ToRectangular = ({ rectangularEq, onUpdateValues, handleChange, valueToUpdate }) => {
    // console.log(valueToUpdate);
    return (
        // <section>
        <form onSubmit={onUpdateValues} >
            <h3 className="shape-result">{rectangularEq?.capacity}</h3>
            <div className="eq-inputs">
                <input type='number' name='depth' id='depth' placeholder='Depth' value={valueToUpdate.depth} onChange={handleChange} />
                <input type='number' name='length' id='length' placeholder='length' value={valueToUpdate.length} onChange={handleChange} />
                <input type="number" name='width' id='width' placeholder='width' value={valueToUpdate.width} onChange={handleChange} />
                <button onClick={() => { onUpdateValues }}>Update</button>
            </div>


        </form>
        // </section>
    )

}




