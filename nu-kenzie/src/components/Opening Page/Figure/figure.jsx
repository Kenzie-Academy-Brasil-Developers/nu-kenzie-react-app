import './figure.css'
import primaryImg from '../../../assets/figure.svg'
import secondaryImg from '../../../assets/homeFigure.svg'

export function Figure () {
    return (
        <figure className='figure'>
            <img src={primaryImg} alt="Demonstração do App" />
            <img className='secondary-img' src={secondaryImg} alt="Demostração do App" />
        </figure>
    )
}