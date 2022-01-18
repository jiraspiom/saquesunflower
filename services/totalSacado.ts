
const totalSacado = async (carteira: string) =>{
    //
    const url = `https://claim.bombcrypto.io/claim-orders?&limit=100&offset=0&walletAddress=${carteira}`
    const req: any = await fetch(url)
  
    const dados: any = await req.json()
    
    return dados
  
  }

export default totalSacado