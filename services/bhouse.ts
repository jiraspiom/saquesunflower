import Web3 from "web3"

const bHouse = async (address: string)=>{
    //apagar 
    //const address = `0x73152179eDe5e6C62FF3E43F2c6cf7Cfd640EBc9`
    
    const contractaddress = '0xea3516feb8f3e387eec3004330fd30aff615496a'
    const apikey = 'CF5QKMTA5QHSRY7JPJKPSWCB4Y474518M3'

    const urlApi = `https://api.bscscan.com/api?module=account&action=tokennfttx&contractaddress=${contractaddress}&address=${address}&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=${apikey}`

    var tokenID = ''
    var tokenName = ''
    var value = ''

    const resApi = await fetch(urlApi)
    const api = await resApi.json()

    if(api.result[0]){
        console.log('has house');

        tokenID = api.result[0].tokenID
        tokenName = api.result[0].tokenName
        value = await transaction(api.result[0].hash, apikey, api.result[0].from)
        
    }else{
        console.log('not house');
        tokenID = ''
        tokenName = ''
        value = '0'
    }

    return {
        tokenID,
        tokenName,
        value
    }

}

export default bHouse

const transaction = async (txhash: string, apikey: string, from: string) =>{
    const bsc = 'https://bsc-dataseed.binance.org/'
    const web3 = new Web3(bsc)

    const dados = await web3.eth.getTransactionReceipt(txhash)
    .then((valor)=>{
        if (from == "0x0000000000000000000000000000000000000000"){
            console.log('house is mint...');
            return web3.utils.fromWei(valor.logs[0].data, 'ether')
        }else{
            console.log('house is buy...');
            const v1 = web3.utils.fromWei(valor.logs[0].data, 'ether')
            const v2 = web3.utils.fromWei(valor.logs[2].data, 'ether')
            return String(parseFloat(v1) + parseFloat(v2))
        }
    });
    return dados
}

const novo =  async (txhash: string, apikey: string)=>{
    //const urlTransactionPorHash = `https://api.bscscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=${txhash}&apikey=${apikey}`
    const urlTransactionReceipt = `https://api.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&txhash=${txhash}&apikey=${apikey}`
    
    const res2 = await fetch(urlTransactionReceipt)
    const valor = await res2.json()
    console.log(valor.result.logs[0].data)
}
