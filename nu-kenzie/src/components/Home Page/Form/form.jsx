import './form.css'

export function Form () {
    return (
        <form className='form'>
            <label htmlFor="description">Descrição</label>
            <input type="text" name='description' id='description' placeholder='Digite aqui sua descrição' required/>
            <small>Ex: Compra de roupas</small>
            <div>
                <div>
                    <label htmlFor="value">Valor</label>
                    <input type="text" id='value' name='value' placeholder='0.00'/>
                    <label htmlFor="value" className='value-label'>R$</label>
                </div>

                <div>
                    <label htmlFor="typeOfValue">Tipo do Valor</label>
                    <select name="typeOfValue" id="typeOfValue">
                        <option value="entrada">Receita</option>
                        <option value="saída">Despesa</option>
                    </select>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}