/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
function Title(props) {
  return React.createElement('h1', null, props.children)
}

function Lista(props) {
  console.log(props)
  return React.createElement(
    'ul',
    null,
    props.elementos.map((element, i) =>
      React.createElement('li', { key: i, id: element }, element)
    )
  )
}

function getElements() {
  const games = getGameNames()
  // console.log(games)
  return [
    React.createElement(Title, { key: 'titulo-1' }, 'Juegos iconicos'),
    React.createElement(Lista, {
      key: 'lista-1',
      elementos: ['Mario', 'Sonic', 'Zelda'],
    }),
    React.createElement(Title, { key: 'titulo-2' }, 'Todos los juegos'),
    React.createElement(Lista, { key: 'lista-2', elementos: games }),
  ]
}

window.addEventListener('load', function () {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(getElements())
})
