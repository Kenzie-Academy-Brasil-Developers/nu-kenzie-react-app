import { BalanceCard } from "./Balance Card/balanceCard";


export function Balance () {
    return (
        <section>
            <div className="div-top">
                <h2>Resumo Financeiro</h2>
                <div className="filter-buttons">
                    <button className="emphasis">Todos</button>
                    <button>Receitas</button>
                    <button>Despesas</button>
                </div>
            </div>

            <p>Você ainda não possui nenhum lançamento</p>
            <img src="/src/assets/empty-list.svg" alt="lista vazia" />

            {/* <ul>
                <BalanceCard/>
                <BalanceCard/>
            </ul> */}
        </section>
    )
}