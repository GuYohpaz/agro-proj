export const ToCylinder = ({ cylinderEq, onUpdateValues, handleChange, valueToUpdate }) => {
    // console.log(valueToUpdate);
    return (
        <form onSubmit={onUpdateValues} >

            <h3 className="shape-result">{cylinderEq?.capacity}</h3>
           
            <div className="eq-inputs">
                <input type='number' name='radius' id='radius' placeholder='radius' value={valueToUpdate.radius} onChange={handleChange} />
                <input type='number' name='depth' id='depth' placeholder='Depth' value={valueToUpdate.depth} onChange={handleChange} />
                <button onClick={() => { onUpdateValues }}>Update</button>
            </div>
            
        </form>
    )
}