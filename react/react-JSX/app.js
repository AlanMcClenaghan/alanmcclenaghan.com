//React creates plain JavaScript objects that describe DOM nodes.

const desc = <p>I just learned how to create a React node using JSX and render it into the DOM.</p>;
const myTitleID = 'main-title';
const name = 'Alan';

const header = (
  <header>
    <h1 id={myTitleID}> { name }'s First JSX Element </h1>
    {desc}
  </header>
);



//The ReactDOM library provides DOM specific methods such as ReactDOM.render() which render React elements to the DOM.

ReactDOM.render(
  header,
  document.getElementById('root')
);