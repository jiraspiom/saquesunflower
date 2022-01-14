
import type { NextPage } from 'next'
import { consultaApiHerois } from '../../services/consultarApiHerois'
import { updateSimulator } from '../../services/updateHeroi'

const Simulador: NextPage = () => {
  // consultaHeroi("0x64a63D24234b2Fd661682A9d5915838F632a99a5")
  var herois = cade("0x9C4d27c7c5796B8e64D626c6015463CfE4568dBF")
  console.log(herois)

  return (
    <div >
      <h1>bomb simulador </h1>

      <ul>
        
      </ul>
    </div>
  )
}

export default Simulador


async function consultaHeroi(carteria: string) {

  const listaHerois = await consultaApiHerois(carteria)

  var arrHerois = []

  for (let heroi of listaHerois) {
    arrHerois.push(updateSimulator(heroi))
  }

  return arrHerois

}

function cade(carteira: string){
  
  consultaHeroi(carteira).then((valor)=>{
    console.log( valor[0].customName)
  }).catch(erro => console.log(erro))

}












