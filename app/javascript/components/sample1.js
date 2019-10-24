import React from 'react';
import ReactDOM from 'react-dom';

/* コンポーネント */
class HelloComponent extends React.Component {
  render(){
    return (
      <div>
          <h1>Hello! World.</h1>
          <p>このページはテストページです。</p>
      </div>
    )
  }
}

ReactDOM.render(
  <HelloComponent />,
  document.getElementById('jsx_helloe') /* Reactが生成したコードを#mainに書き出す */
);
