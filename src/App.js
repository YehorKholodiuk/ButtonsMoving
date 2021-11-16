import { useState } from 'react';

const initialList = [
  { id: 0, name: 'Create Zero App' }, // 0
  { id: 100, name: 'Create App' }, //

  { id: 200, name: 'Create IoS App' },  //2 = i - 1
  { id: 300, name: 'Create Web App' }, // i = 3

  { id: 400, name: 'Learn JS' },
  { id: 500, name: 'Learn React' },
];

function App() {
  const [list, setList] = useState(initialList);


  const up = (id) => {

    const index = list.findIndex(el => el.id === id);
    console.log('Up', id, index);

    const res = [...list.slice(0, index - 1), list[index], list[index - 1], ...list.slice(index + 1)];

    setList(res);
  };

  const down = (id) => {

    const index = list.findIndex(el => el.id === id);
    console.log('Down', id, index);

    const res = [...list.slice(0, index), list[index + 1], list[index ], ...list.slice(index + 2)];

    setList(res);
  };

  return (
      <div className="App">

        {list.map((el, index) => (
            <div key={el.id}>

              {index !== 0 ? <button onClick={() => up(el.id)}>Up</button> : null}

              {index !== list.length - 1 ?
                  <button onClick={() => down(el.id)}>Down</button> : null}

              {el.name}
            </div>
        ))}

      </div>
  );
}

export default App;
