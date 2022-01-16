import Head from 'next/head'
import styles from '../styles/Home.module.css'

import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'
import { FormEvent, useState } from 'react'
import { IHeroiOB } from '../types/iHeroiOB'
import { IHeroi } from '../types/iHeroi'
import { consultaApiHerois } from '../services/consultarApiHerois'
import { updateSimulator } from '../services/updateHeroi'

const Bomb = () => {

    const [carteira, setCarteira] = useState('')
    const [heroi, setHeroi] = useState([])
    const [max, setMax] = useState(0)
    const [avg, setAvg] = useState(0)
    const [min, setMin] = useState(0)

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }

    const buscarHero = async () => {
        console.log("clicou no botao")

        const heroi: any = await calcular(carteira)
        
        setHeroi(heroi?.final)
        setMax(heroi?.max)
        setAvg(heroi?.avg)
        setMin(heroi?.min)

    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Bomb Simulator</title>
                <meta name="description" content="Generated by gbs" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <main className={styles.main}>

                <h1 className={styles.title}>
                    simulator
                </h1>

                <div className={styles.description}>
                    <label htmlFor="carteira">carteira: </label>
                    <input type="text" name="carteira" id="carteira" placeholder="numero da carteira"
                        onChange={(e) => { setCarteira(e.target.value) }}
                    />
                </div>

                <div className={styles.card}>
                    <Image onClick={buscarHero}
                        src="/hero.png"
                        alt="hero"
                        width={70}
                        height={93}
                        quality={100}
                    />
                </div>
                herois: {heroi?.length}
                <div>
                    <li>
                        Max: {max} bcoin day
                    </li>
                    <li>
                        Avg: {avg} bcoin day
                    </li>
                    <li>
                        Min: {min} bcoin day
                    </li>
                </div>
                <div className={styles.grid}>
                    {heroi?.map((item: IHeroiOB) =>
                        <div key={item.id} className={styles.card}>
                            <div>{item.id} </div>
                            <div>{item.rarity} - level: {item.level}</div>

                            <div>{item.skin}</div>

                            <div>
                                <div>
                                    <Image src="/power.png" alt="power" width={32} height={32} quality={100} /> Power: {item.power}
                                </div>
                                <div>
                                    <Image src="/speed.png" alt="speed" width={32} height={32} quality={100} />  Speed: {item.speed}
                                </div>
                                <div>
                                    <Image src="/stamina.png" alt="stamina" width={32} height={32} quality={100} /> Stamina: {item.stamina}
                                </div>
                                <div>
                                    <Image src="/bomb.png" alt="bomb" width={32} height={32} quality={100} /> Bomb num: {item.bombnum}
                                </div>
                                <div>
                                    <Image src="/range.png" alt="range" width={32} height={32} quality={100} /> Bomb range: {item.bombrange}
                                </div>
                            </div>
                            ---------------------------------
                            <div>Max profit: {item.maxProfit}</div>
                            <div>Min profit: {item.minProfit}</div>
                            <div>Avg profit: {item.avgProfit}</div>
                            <div>Total profit: {item.totalProfit}</div>
                        </div>
                    )}
                </div>
            </main>
        </div>

    )
}


const calcular = async (carteira: string) => {
    var max = 0
    var avg = 0
    var min = 0
    var total = 0

    if (!carteira) {
        return console.log("Ai, preencha o campo carteira")
    }

    var dados: Array<IHeroi> = await consultaApiHerois(carteira)
    // console.log(dados)

    const final = dados?.map((item: IHeroi) => {
        return updateSimulator(item)
    })

    for (const item of final) {
        max = max + item.maxProfit
        avg = avg + item.avgProfit
        min = min + item.minProfit
        total = total + item.totalProfit
    }

    const calculado = {
        max: parseFloat(max.toFixed(2)),
        avg: parseFloat(avg.toFixed(2)),
        min: parseFloat(min.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
        final: final
    }

    return calculado

}

export default Bomb