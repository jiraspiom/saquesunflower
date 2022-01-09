
import type { NextPage } from 'next'

const Home: NextPage = () => {
    gbs()
  return (
    <div >
      
    </div>
  )
}


const gbs = async () =>{
    console.log("calculando")
    
    const bcoins: number = 58.64
    var saque: number = 0.97
    var bcoinGasto: number = 1
    
    const carteriaBcoin = bcoins + bcoinGasto

    var total: number = (bcoins * saque) - bcoinGasto
    var taxa: number = carteriaBcoin - total
    
    const dados: any = await fetch("https://api.coingecko.com/api/v3/coins/bomber-coin")
    const bcoin: any = await dados.json()

    const real = bcoin.market_data.current_price.brl
    const dolar = bcoin.market_data.current_price.usd
    
    console.log(bcoin.market_data.current_price.brl)
    console.log(bcoin.market_data.current_price.usd)

    console.log(`valor bruto: ${carteriaBcoin * real}, taxa: ${taxa * real}, valor liquido: ${total * real} `)
    console.log(`valor bruto: ${carteriaBcoin * dolar}, taxa: ${taxa * dolar}, valor liquido: ${total * dolar} `)
    

}

export default Home



