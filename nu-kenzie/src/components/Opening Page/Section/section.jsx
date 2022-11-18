import './section.css'

export function Section () {
    function goToHomePage() {
        
    }
    
    return (
        <section className='section'>
            <h1><span>Nu</span> Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <p>de forma rápida e segura</p>
            <button onClick={goToHomePage}>Iniciar</button>
        </section>
    )
}