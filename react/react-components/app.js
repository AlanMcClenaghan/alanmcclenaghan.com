// In React, your entire UI is a composition of functions.

// User-Defined Components Must Be Capitalized

// JSX lets you define your own tags. A JSX tag can not only represent an HTML element (like <h1>, <span>, and <header>), it can also represent a user-defined component.

/*
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
} */

// As an Arrow function

const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

const Player = () => {
    return (
        <div className="player">
            <span className="player-name">
                Alan     
            </span>
        
            <Counter />
        
        </div>
    );
}

const Counter = () => {
    return (      
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
        
            { /* Players list */  }
            <Player />        
        </div>  
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);