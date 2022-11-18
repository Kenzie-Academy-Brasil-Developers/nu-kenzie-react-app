import './header.css'

export function Header ({homePage}) {
    return (
        <header className='header'>
            <div className='container'>
                <h1><span>Nu</span> Kenzie</h1>
                <button onClick={homePage}>Início</button>
            </div>
        </header>
    )
}