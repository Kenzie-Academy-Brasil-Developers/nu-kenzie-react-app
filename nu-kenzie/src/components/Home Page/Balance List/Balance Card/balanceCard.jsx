import './balanceCard.css'
import trashIcon from '../../../../assets/trash-icon.svg'

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
                        <img src={trashIcon} alt="Excluir Receita" />
                    </button>
                </div>
            </div>
        </li>
    )
}