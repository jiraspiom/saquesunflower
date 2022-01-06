import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'

const Bomb: NextPage = (props: props) => {

  const [colheita, setColheita] = useState('')
  const [taxa, setTaxa] = useState('')

  console.log(colheita, taxa)

  async function gravar(event: FormEvent){
    event.preventDefault()

    const dados = {
      colheita,
      taxa
    }

    console.log('registro gravado:', dados)

  }

  return (
      <div >

        <div>
      
        {/* <form onSubmit={consultar}>
          <input type="text" name="colheita" id="colheita"  placeholder='ex: 0.88' onChange={event => setColheita(event.target.value)}/>
          <input type="text" name="taxa" id="taxa" placeholder='ex 0.29' onChange={event => setTaxa(event.target.value)}/>

          <button type="submit">Consultar</button>

        </form> */}

      </div>


        <div>
          <h1> {props.final.A } </h1>
        </div>
        
        <div>
          {props.final.B }
        </div>

         <div>
          {props.final.C }
        </div>

        <div>
          {props.final.D }
        </div> 

        <div>
          {props.final.E }
        </div>
        
        <div>
          {props.final.F }
        </div>

        <div>
          {props.final.G }
        </div>
        
        <div>
          {props.final.H }
        </div>

        <div>
          {props.final.I }
        </div>
          
      </div>
    )
}

export default Bomb

export async function getStaticProps() {
    //'https://claim.bombcrypto.io/claim-orders?limit=100&offset=0&walletAddress=0xF2DBC330ad5c7d3c8389fCF8DaFF19dccD461Dd3'
    const bomb = 'https://claim.bombcrypto.io/claim-orders?limit=100&offset=0'
    
    const colher = 4.48
    //const colher = 0.88
    const taxaMtic = 0.29

    const urlMatic = 'https://api.coingecko.com/api/v3/coins/wmatic'
    const urlSff = 'https://api.coingecko.com/api/v3/coins/sunflower-farm'

    const resMatic = await fetch(urlMatic)
    const dados_matic = await resMatic.json()

    const resSff = await fetch(urlSff)
    const dados_sff = await resSff.json()


    const maticBrl = dados_matic.market_data.current_price.brl
    const maticUsd = dados_matic.market_data.current_price.usd

    console.log(dados_matic.id)
    console.log(maticBrl)
    console.log(maticUsd)
    
    const taxabrl = taxaMtic * maticBrl
    const taxausd = taxaMtic * maticUsd

    const sunflower = dados_sff.id
    const sffBrl = dados_sff.market_data.current_price.brl
    const sffUsd = dados_sff.market_data.current_price.usd

    const sff_colheirtaBrl = sffBrl * colher
    const sff_colheirtaUsd = sffUsd * colher
    
    const saqueBrl = sffBrl * colher 
    const saqueUsd = sffUsd * colher

    const valorReal = saqueBrl - taxabrl
    const valorUSD = saqueUsd - taxausd
    
    
    const A = sunflower
    const B = `1 ${sunflower} em real: R$ ${sffBrl}`
    const C = `1 ${sunflower} em dolar: $ ${sffUsd} `
    const D = `colher ${colher} ${sunflower}: R$ ${sff_colheirtaBrl}`
    const E = `colher ${colher} ${sunflower}:  $ ${sff_colheirtaUsd}`
    
    const F = `taxa de ${taxaMtic} matic para salvar em Real: R$ ${taxabrl}`
    const G =`taxa de ${taxaMtic} matic para salvar em Dolar: $ ${taxausd}`

    const H = 'VALOR FINAL brl: ' + valorReal
    const I = 'VALOR FINAL usd: ' + valorUSD

    const final = {
      A: A,
      B: B,
      C: C,
      D: D,
      E: E,
      F: F,
      G: G,
      H: H,
      I: I
    }

    const Dados = {
      moeda: sunflower,
      sff_1_Brl: sffBrl,
      sff_1_Usd: sffUsd,
      colheita: colher,
      saqueBrl: saqueBrl,
      saqueUsd: saqueUsd,
      taxaMtic: taxaMtic,
      taxabrl: taxabrl,
      taxausd: taxausd,
      valorReal: valorReal,
      valorUSD: valorUSD
    }

    return {
      props: {
      dados_matic,
      dados_sff,
      final
      },
    }
  }