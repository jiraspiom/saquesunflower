import Web3 from "web3"


const bHouse = async (add: string)=>{
    //apagar 
    const address = `0x73152179eDe5e6C62FF3E43F2c6cf7Cfd640EBc9`
    const contractaddress = '0xea3516feb8f3e387eec3004330fd30aff615496a'
    const apikey = 'CF5QKMTA5QHSRY7JPJKPSWCB4Y474518M3'

    const urlApi = `https://api.bscscan.com/api?module=account&action=tokennfttx&contractaddress=${contractaddress}&address=${address}&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey=${apikey}`

    const resApi = await fetch(urlApi)
    const api = await resApi.json()

    const txhash = api.result[0].hash
    
    console.log(api.result[0].hash);
    console.log(api.result[0].tokenName);
    console.log(api.result[0].tokenID)
    console.log(api.result[0].blockNumber)


    transaction(txhash, apikey, api.result[0].blockNumber)

    console.log(api);
    return(api)

}

export default bHouse

const transaction = async (txhash: string, apikey: string, bloco: any) =>{
    const urlTransactionPorHash = `https://api.bscscan.com/api?module=proxy&action=eth_getTransactionByHash&txhash=${txhash}&apikey=${apikey}`

    const  bsc = 'https://bsc-dataseed.binance.org/'
    const web3 = new Web3(bsc)
    
    web3.eth.getTransaction(txhash)
    .then((valor)=>{
        const tx = valor
        const trn = web3.utils.fromWei(tx.value, 'ether')
        //console.log(trn);
    })
    
    web3.eth.getTransactionReceipt(txhash)
    .then((valor)=>{
        console.log(valor);
    })
    
    // const res2 = await fetch(urlTransactionPorHash)
    // const valor = await res2.json()

    // console.log(valor.result)

}