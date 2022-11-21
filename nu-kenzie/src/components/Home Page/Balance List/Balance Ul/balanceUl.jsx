import { BalanceCard } from "../Balance Card/balanceCard";


export function BalanceList ({ balanceData, deleteBalanceData }) {
    return (
        <ul>
            {balanceData.map((item, index) => {
                return <BalanceCard key={index} deleteBalanceData={deleteBalanceData} balanceId={item.id} description={item.description} value={item.value} typeOfValue={item.typeOfValue}/>
            })}
        </ul>
    )
}