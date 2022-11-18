import './section.css'

export function Section ({openingPage}) {
    
    return (
        <section className='section'>
            <h1><span>Nu</span> Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <p>de forma rápida e segura</p>
            <button onClick={openingPage}>Iniciar</button>
        </section>
    )
}