import { useState } from 'react'
import './form.css'

export function Form ({ addBalanceData }) {
    const [formData, setFormData] = useState([{
        description: '',
        value: '',
        typeOfValue: ''
    }])

    function submit (event) {
        event.preventDefault()

        addBalanceData(formData)

        setFormData([{
            description: '',
            value: '',
            typeOfValue: ''
        }])
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
                    <select defaultValue={formData.typeOfValue} onMouseMove={(event) => setFormData({...formData, typeOfValue: event.target.value})} name="typeOfValue" id="typeOfValue">
                        <option value="Receita">Receita</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}