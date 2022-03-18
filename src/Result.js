import './Result.css';
import ReactDOM from 'react-dom';

function Result(){
  let grid = [];
  for(var i=0;i<10;i++){
    let contCol= "col" + i;
    grid.push(<div className={contCol}></div>);
  }
  return (
    <>
      <h1 className="title1">Result</h1>
    <div className="grid">
      {grid}
    </div>
    </>
  );
}

export default Result;
