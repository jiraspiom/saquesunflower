const consultaApiHerois = async (carteira: string) =>{

  const _url = 'https://api.nucito.com/v1/GetHeros';
  // let _body = JSON.stringify({address: '0x9C4d27c7c5796B8e64D626c6015463CfE4568dBF'});
  let _body = JSON.stringify({address: carteira});
  const _headers = {'Content-type': 'application/json; charset=UTF-8',};
  const _options = { method: 'POST', headers: _headers, body: _body };


  const request: any = await fetch(_url, _options)
  const dados: any = await request.json()
  
  return dados.heros

}

export {consultaApiHerois}