import './totalValue.css'

export function TotalValue () {
    return (
        <div className='total-value'>
            <div>
                <h2>Valor total:</h2>
                <span>R$ 500</span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}