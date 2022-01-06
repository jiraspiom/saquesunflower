import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'

const Home: NextPage = () => {

  const [colheita, setColheita] = useState('')
  const [taxa, setTaxa] = useState('')

  console.log(colheita, taxa)

  function gravar(event: FormEvent){
    event.preventDefault()

    const dados = {
      colheita,
      taxa
    }

    console.log('registro gravado:', dados)

    console.log(db)

  }

  return (
    <div>
      
      <form onSubmit={gravar}>
        <input type="text" name="colheita" id="colheita"  placeholder='ex: 0.88' onChange={event => setColheita(event.target.value)}/>
        <input type="text" name="taxa" id="taxa" placeholder='ex 0.29' onChange={event => setTaxa(event.target.value)}/>

        <button type="submit">Salvar</button>

      </form>

    </div>
  )
}

export default Home