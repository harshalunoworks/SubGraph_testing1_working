import './App.css';
import {createClient} from 'urql';
import {useEffect} from 'react';

const api_url = 'https://api.thegraph.com/subgraphs/name/yugg007/ladyytesst';
const  query = `
{
  ladies(first: 3) {
    id
    tokenID
  	name
    tokenURI
    faceExpression
    hairStyle
  	}
}
`

const client = createClient({
  url : api_url
})

 
function App() {
  async function fetchData(){
    const response = await client.query(query).toPromise();
    console.log('response', response.data);
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="App">
      <h1>hello from react app</h1>
    </div>
  );
}

export default App;
