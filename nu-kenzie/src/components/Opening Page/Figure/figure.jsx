import './figure.css'

export function Figure () {
    return (
        <figure className='figure'>
            <img src="/src/assets/figure.svg" alt="Demonstração do App" />
            <img className='secondary-img' src="/src/assets/homeFigure.svg" alt="Demostração do App" />
        </figure>
    )
}