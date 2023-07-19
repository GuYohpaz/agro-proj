export const ToCube = ({ cubeEq, onUpdateValues, handleChange, valueToUpdate }) => {
    // console.log(valueToUpdate);
    return (

        <form  onSubmit={onUpdateValues} >

            <h3 className="shape-result">{cubeEq?.capacity}</h3>
            <div className="eq-inputs">
                <input type='number' name='length' id='length' placeholder='length' value={valueToUpdate.length} onChange={handleChange} />
                {/* <p >3</p> */}
            <button onClick={() => { onUpdateValues }}>Update</button>
            </div>

        </form>

    )
}    