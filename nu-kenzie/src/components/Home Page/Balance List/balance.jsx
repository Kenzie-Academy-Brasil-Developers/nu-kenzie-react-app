import './balance.css'
import { BalanceList } from './Balance Ul/balanceUl'


export function Balance ({ balanceData }) {
    
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

                <BalanceList balanceData={balanceData}/>             
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
                <img src="/src/assets/empty-list.svg" alt="Lista vazia" />
            </section>
        )
    }
}