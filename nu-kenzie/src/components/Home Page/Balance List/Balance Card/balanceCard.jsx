import './balanceCard.css'

export function BalanceCard ({balanceId, description, value, typeOfValue, deleteBalanceData}) {
    return (
        <li className='balance-card' id={balanceId}>
            <span className= {typeOfValue == 'Receita' ? 'income-color' : 'debit-color'}></span>
            <div>
                <div>
                    <h2>{description}</h2>
                    <small>{typeOfValue}</small>
                </div>

                <div>
                    <small>R$ {value}</small>
                    <button onClick={() => deleteBalanceData(balanceId)}>
                        <img src="/src/assets/trash-icon.svg" alt="Excluir Receita" />
                    </button>
                </div>
            </div>
        </li>
    )
}