// Props are a core concept in React because it's how you get data into a component.

const players = [
  {
    name: "Alan",
    score: 50,
    id: 1
  },
  {
    name: "Ruth",
    score: 85,
    id: 2
  },
  {
    name: "Matthew",
    score: 95,
    id: 3
  },
  {
    name: "Lucy",
    score: 80,
    id: 4
  }
];

/*
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
} */

// The above function as an Arrow function below

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}     
            </span>
        
            <Counter score={props.score} />
        
        </div>
    );
}

const Counter = (props) => {
    return (      
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header 
                title="Scoreboard" 
                totalPlayers={props.initialPlayers.length} 
        />
        
            { /* Players list
            Needs to be placed inside curly braces, 
            so that the JSX is able to evaluate the map function.
            Use .map to loop over the players array
            Map takes a callback function that receives 
                and processes each item in the array, one by one, 
                and returns a new array of the processed items.
            Use an arrow function that takes the parameter player 
                to represent the current item being processed.
            The function will return a Player component
            Uses an implicit return which means omitting 
                the return keyword and curly braces.         
            */  }
            {props.initialPlayers.map( player =>
                <Player
                    name={player.name}
                    score={player.score}
                    key={player.id.toString()}
                />
            )}      
        </div>  
    );
}

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);


// In React, your entire UI is a composition of functions.

// User-Defined Components Must Be Capitalized

// JSX lets you define your own tags. A JSX tag can not only represent an HTML element (like <h1>, <span>, and <header>), it can also represent a user-defined component.

/*

Props
A list of properties to pass data to a component.
Components are customized and made reusable with props.

Using Props
Define the props in a component's JSX tag.
Enable the use of props in a compnent.

*/


