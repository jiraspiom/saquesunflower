import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { FormEvent, useState } from 'react'
import { iDados } from '../../types/iDados'

const Bomb = () => {

    const [taxa, setTaxa] = useState('')
    //const [campo, setCampo] = useState('')

    const[A, setA] = useState('')
    const[B, setB] = useState('')
    const[C, setC] = useState('')
    const[D, setD] = useState('')
    const[E, setE] = useState('')
    const[F, setF] = useState('')
    const[G, setG] = useState('')
    const[H, setH] = useState('')
    const[I, setI] = useState('')


    const onSubmit = (e: FormEvent) =>{
        e.preventDefault();
        // setCampo(taxa)
    }

    const colveFlor = async () => {
        console.log("clicou na colveflor")
        // setCampo(taxa)

        var oi = await calcular(Number(taxa))
        setA(oi.A)
        setB(oi.B)
        setC(oi.C)
        setD(oi.D)
        setE(oi.E)
        setF(oi.F)
        setG(oi.G)
        setH(oi.H)
        setI(oi.I)

    }

    return (
        <div>
            <div>
                <label htmlFor="taxa">Valor da taxa em Matic: </label>
                <input type="number" name="taxa" id="taxa" placeholder="ex. 0,210" 
                    step="0.001" min="0" max="1"
                    onChange={(e) => {setTaxa(e.target.value) }}
                />     
            </div>
            <div>
                <Image onClick={colveFlor}
                src="/couveFlor.png"
                alt="colveFlor"
                width={44}
                height={44}
                quality={100}
                />
            </div>
            <div>
                <div>
                    <h1>
                        Clique na colveflor para visualiar o resultado

                    </h1>
                </div>
               
                <div>{A}</div>    
                <div>{B}</div>
                <div>{C}</div>
                <div>{D}</div>
                <div>{E}</div>
                <div>{F}</div>
                <div>{G}</div>
                <div>{H}</div>
                <div>{I}</div>
            </div>
        </div>

    )
}

const buscarValoresApiCoinGecko = async () =>{
    const url_Matic = 'https://api.coingecko.com/api/v3/coins/wmatic'
    const url_Sff = 'https://api.coingecko.com/api/v3/coins/sunflower-farm'

    const resMatic = await fetch(url_Matic)
    const dadosMatic = await resMatic.json()

    const resSff = await fetch(url_Sff)
    const dadosSff = await resSff.json()

    const maticBrl = dadosMatic.market_data.current_price.brl
    const maticUsd = dadosMatic.market_data.current_price.usd

    const sunflower = dadosSff.id
    const sffBrl = dadosSff.market_data.current_price.brl
    const sffUsd = dadosSff.market_data.current_price.usd

    const Dados : iDados = {
        moeda: sunflower,
        maticBrl: maticBrl,
        maticUsd: maticUsd,
        sffBrl: sffBrl,
        sffUsd: sffUsd,
      }

    return Dados
}

const calcular = async (taxa: number) =>{
    var dados: iDados = await buscarValoresApiCoinGecko()
    var taxaMtic = 0

    if (taxa){
        taxaMtic = taxa
    }else{
        taxaMtic = 0.29
    }
    var taxaMtic = taxa
    var colher = 0.88

    const taxabrl = taxaMtic * dados.maticBrl
    const taxausd = taxaMtic * dados.maticUsd

    const sff_colheirtaBrl = dados.sffBrl * colher
    const sff_colheirtaUsd = dados.sffUsd * colher
    
    const saqueBrl = dados.sffBrl * colher 
    const saqueUsd = dados.sffUsd * colher

    const valorReal = saqueBrl - taxabrl
    const valorUSD = saqueUsd - taxausd


    const A = dados.moeda
    const B = `1 ${dados.moeda} em real: R$ ${dados.sffBrl}`
    const C = `1 ${dados.moeda} em dolar: $ ${dados.sffUsd} `
    const D = `colher ${colher} ${dados.moeda}: R$ ${sff_colheirtaBrl}`
    const E = `colher ${colher} ${dados.moeda}:  $ ${sff_colheirtaUsd}`
    
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

    //console.log(final)
    return final
}

export default Bomb