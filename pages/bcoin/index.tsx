
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

    const url_brl = "https://api.coingecko.com/api/v3/simple/price?ids=bomber-coin&vs_currencies=brl"
    const url_usd = "https://api.coingecko.com/api/v3/simple/price?ids=bomber-coin&vs_currencies=usd"
    
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
    

    "https://api.bscscan.com/api?module=account&action=balance&address=0x64a63D24234b2Fd661682A9d5915838F632a99a5&apikey=CF5QKMTA5QHSRY7JPJKPSWCB4Y474518M3"
    "https://api.bscscan.com/api?module=account&action=txlist&address=0x64a63D24234b2Fd661682A9d5915838F632a99a5&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=CF5QKMTA5QHSRY7JPJKPSWCB4Y474518M3"
    "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress=0x00e1656e45f18ec6747F5a8496Fd39B50b38396D&address=0x64a63D24234b2Fd661682A9d5915838F632a99a5&page=1&offset=5&startblock=0&endblock=999999999&sort=asc&apikey=CF5QKMTA5QHSRY7JPJKPSWCB4Y474518M3"


}

export default Home



