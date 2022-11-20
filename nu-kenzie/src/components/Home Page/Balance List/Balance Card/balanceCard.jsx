import './balanceCard.css'

export function BalanceCard ({description, value, typeOfValue}) {
    return (
        <li className='balance-card'>
            <span className= {typeOfValue == 'Receita' ? 'income-color' : 'debit-color'}></span>
            <div>
                <div>
                    <h2>{description}</h2>
                    <small>{typeOfValue}</small>
                </div>

                <div>
                    <small>R$ {value}</small>
                    <button>
                        <img src="/src/assets/trash-icon.svg" alt="Excluir Receita" />
                    </button>
                </div>
            </div>
        </li>
    )
}