
import type { NextPage } from 'next'
import { useState } from 'react'
import internal from 'stream'
import { consultaApiHerois } from '../../services/consultarApiHerois'
import { updateSimulator } from '../../services/updateHeroi'
import { IHeroiOB } from '../../types/iHeroiOB'

const Simulador: NextPage = () => {
  // consultaHeroi("0x64a63D24234b2Fd661682A9d5915838F632a99a5")
 

  // var herois = consultaHeroi("0x9C4d27c7c5796B8e64D626c6015463CfE4568dBF")
  var objetos: Array<Ob>
  const [A, setA] = useState([])

  interface Ob {
    id: number,
    nome: string,
    telefone: number
  }

  objetos = [
    {id: 0, nome: "NomeA", telefone: 55555},
    {id: 1, nome: "NomeB", telefone: 222222},
    {id: 2, nome: "NomeC", telefone: 33333}
  ]

  const metodo =  async () =>{
    var dados = await consultaHeroi("0x9C4d27c7c5796B8e64D626c6015463CfE4568dBF")
    // var dados = await consultaHeroi("0x3CBfA79aaC3E8711d34Aad25e54032aA830f4de4")
    // var dados = await  consultaHeroi("0x64a63D24234b2Fd661682A9d5915838F632a99a5")
    return dados
    
  }

  
  var tess = metodo()
  tess.then((req)=>{
    //todo tirar comentario
    //setA(req)
    console.log(req)
  }).catch(erro => console.log(erro))

  return (
    <div >
      <h1>bomb simulador </h1>

      <section>
        <ol>
          {A.map((ab: IHeroiOB) => {
            return <li key={ab.id}> {ab.id} {ab.rarity} {ab.skin} - {ab.power} </li>
          })}
        </ol>
       
      </section>

    </div>
  )
}

export default Simulador


async function consultaHeroi(carteria: string) {

  const listaHerois = await consultaApiHerois(carteria)

  var arrHerois = new Array()

  for (let heroi of listaHerois) {
    arrHerois.push(updateSimulator(heroi))
  }

  var arra = JSON.parse(JSON.stringify(arrHerois))

  return arra

}













