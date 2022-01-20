// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IHeroi } from '../../../types/iHeroi'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IHeroi>
) {
  const {id} = req.query
  
  const valor = consultaApiHerois(id)
  
  valor.then((item)=>{
    res.status(200).json(item)
  }).catch(erro => console.log(erro))

}

const consultaApiHerois = async (carteira: any) =>{
  const _url = 'https://api.nucito.com/v1/GetHeros';
  let _body = JSON.stringify({address: carteira});
  const _headers = {'Content-type': 'application/json; charset=UTF-8',};
  const _options = { method: 'POST', headers: _headers, body: _body };

  const request: any = await fetch(_url, _options)
  const dados: any = await request.json()
  
  return dados.heros

}