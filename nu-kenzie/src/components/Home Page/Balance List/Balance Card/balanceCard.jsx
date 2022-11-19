import './balanceCard.css'

export function BalanceCard () {
    return (
        <li className='balance-card'>
            <span className='income-color'></span>
            <div>
                <div>
                    <h2>Salário - Mês Dezembro</h2>
                    <small>Entrada</small>
                </div>

                <div>
                    <small>R$ 6000.00</small>
                    <button>
                        <img src="/src/assets/trash-icon.svg" alt="Excluir Receita" />
                    </button>
                </div>
            </div>
        </li>
    )
}