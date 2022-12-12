import './App.css';
import useFetch from './useFetch';

function App() {
  const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users")
  // console.log(data);

  if(loading) return  <h1> loading...</h1>
  if(error) return  console.log(error);

  return (
    <div className="App">
         <h1>
              {JSON.stringify(data)}
         </h1>
    </div>
  );
}

export default App;
