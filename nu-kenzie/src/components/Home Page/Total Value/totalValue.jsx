import './totalValue.css'

export function TotalValue ( {balanceData} ) {
    return (
        <div className='total-value'>
            <div>
                <h2>Valor total:</h2>
                <span>R$ {balanceData.reduce((previousValue, currentValue) => {
                        if (currentValue.typeOfValue == 'Receita') {
                            return Number(previousValue) + Number(currentValue.value)
                        } else {
                            return Number(previousValue) + (Number(currentValue.value) * -1)
                        }
                    }, 0)}</span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}