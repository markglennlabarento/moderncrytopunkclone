import './App.css'
import Header from './componets/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './componets/Punklist'
import Main from './componets/Main'

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(1)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x4033c916f49E342349C2Ba3d7D66d3D8357F1C42&order_direction=asc')
        console.log(openseaData.data.assets)
        setPunkListData(openseaData.data.assets)
    }

    return getMyNfts
  }, [])

  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
        )
      }
      
    </div>
  ) 
}

export default App;
