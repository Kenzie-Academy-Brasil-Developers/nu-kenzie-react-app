import { useState } from 'react'
import './form.css'

export function Form ({ addBalanceData }) {
    const [balanceId, setBalanceId] = useState(0)
    
    const [formData, setFormData] = useState({
        id: '',
        description: '',
        value: '',
        typeOfValue: ''
    })
    function submit (event) {
        event.preventDefault()

        addBalanceData(formData)
        console.log(formData)

        setFormData({
            id: '',
            description: '',
            value: '',
            typeOfValue: ''
        })
    }
    
    return (
        <form className='form' onSubmit={submit}>
            <label htmlFor="description">Descrição</label>
            <input value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})} type="text" name='description' id='description' placeholder='Digite aqui sua descrição' required/>
            <small>Ex: Compra de roupas</small>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input value={formData.value} onChange={(event) => setFormData({...formData, value: event.target.value})} type="number" id='value' name='value' placeholder='0.00' required/>
                    <label htmlFor="value" className='value-label'>R$</label>
                </div>

                <div>
                    <label htmlFor="typeOfValue">Tipo do Valor</label>
                    <select defaultValue={formData.typeOfValue} onClickCapture={(event) => setFormData({...formData, typeOfValue: event.target.value})} name="typeOfValue" id="typeOfValue">
                        <option value="Receita">Receita</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit" onClick={() => {setFormData({...formData, id: balanceId}); setBalanceId(balanceId + 1);}}>Inserir valor</button>
        </form>
    )
}