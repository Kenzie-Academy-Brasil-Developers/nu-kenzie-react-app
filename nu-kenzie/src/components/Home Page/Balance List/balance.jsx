import './balance.css'
import emptyListImg from '../../../assets/empty-list.svg'
import { BalanceList } from './Balance Ul/balanceUl'


export function Balance ({ balanceData, deleteBalanceData }) {
    
    if (balanceData != false) {
        return (
            <section className='section-balance'>
                <div className="div-top">
                    <h2>Resumo Financeiro</h2>
                    <div className="filter-buttons">
                        <button className="emphasis">Todos</button>
                        <button>Receitas</button>
                        <button>Despesas</button>
                    </div>
                </div>

                <BalanceList balanceData={balanceData} deleteBalanceData={deleteBalanceData}/>             
            </section>
        )

    } else {
        return (
            <section className='section-balance'>
                <div className="div-top">
                    <h2>Resumo Financeiro</h2>
                    <div className="filter-buttons">
                        <button className="emphasis">Todos</button>
                        <button>Receitas</button>
                        <button>Despesas</button>
                    </div>
                </div>

                <p>Você ainda não possui nenhum lançamento</p>
                <img src={emptyListImg} alt="Lista vazia" />
            </section>
        )
    }
}