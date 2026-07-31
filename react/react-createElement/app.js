//React creates plain JavaScript objects that describe DOM nodes.

const title = React.createElement(
  'h1',
  { id: 'main-title', title: 'This is a title.' },
  'My First React Element!'
);

console.log(title);

const desc = React.createElement(
  'p',
  null,
  'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
  'header',
  null,
  title,
  desc
);



//The ReactDOM library provides DOM specific methods such as ReactDOM.render() which render React elements to the DOM.

ReactDOM.render(
  header,
  document.getElementById('root')
);