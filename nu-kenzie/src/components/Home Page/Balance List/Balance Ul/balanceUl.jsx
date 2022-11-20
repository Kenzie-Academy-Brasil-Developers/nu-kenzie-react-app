import { BalanceCard } from "../Balance Card/balanceCard";


export function BalanceList ({ balanceData }) {
    return (
        <ul>
            {balanceData.map((item, index) => {
                return <BalanceCard key={index} description={item.description} value={item.value} typeOfValue={item.typeOfValue}/>
            })}
        </ul>
    )
}