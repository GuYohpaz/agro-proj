import agroCover from '../assets/imgs/agro-cover.png'



export function MainHeader() {


    return (
        <section className='main-header'>
            <img src={agroCover} alt="" />
            <h1>Agro Calculator</h1>
        </section>
    )
}