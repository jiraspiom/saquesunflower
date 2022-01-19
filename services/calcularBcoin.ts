import { IHeroi } from "../types/iHeroi"

const classificacaoBomber = async (dados: Array<IHeroi>) =>{
    var raridades = {
        common: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0},
        rare: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0},
        superRare: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0},
        epic: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0},
        legend: {level1: 0, level2: 0, level3: 0, level4: 0, level5: 0},
        superLegend:{level1: 0, level2: 0, level3: 0, level4: 0, level5: 0}
    }

    raridades.common.level1 = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 1).length
    raridades.common.level2 = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 2).length
    raridades.common.level3 = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 3).length
    raridades.common.level4 = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 4).length
    raridades.common.level5 = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 5).length
    
    raridades.rare.level1 = dados.filter(x => x.rarity === 'Rare' &&  x.level === 1).length
    raridades.rare.level2 = dados.filter(x => x.rarity === 'Rare' &&  x.level === 2).length
    raridades.rare.level3 = dados.filter(x => x.rarity === 'Rare' &&  x.level === 3).length
    raridades.rare.level4 = dados.filter(x => x.rarity === 'Rare' &&  x.level === 4).length
    raridades.rare.level5 = dados.filter(x => x.rarity === 'Rare' &&  x.level === 5).length
    
    raridades.superRare.level1 = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 1).length
    raridades.superRare.level2 = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 2).length
    raridades.superRare.level3 = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 3).length
    raridades.superRare.level4 = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 4).length
    raridades.superRare.level5 = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 5).length
    
    raridades.epic.level1 = dados.filter(x => x.rarity === 'Epic' &&  x.level === 1).length
    raridades.epic.level2 = dados.filter(x => x.rarity === 'Epic' &&  x.level === 2).length
    raridades.epic.level3 = dados.filter(x => x.rarity === 'Epic' &&  x.level === 3).length
    raridades.epic.level4 = dados.filter(x => x.rarity === 'Epic' &&  x.level === 4).length
    raridades.epic.level5 = dados.filter(x => x.rarity === 'Epic' &&  x.level === 5).length
    
    raridades.legend.level1 = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 1).length
    raridades.legend.level2 = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 2).length
    raridades.legend.level3 = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 3).length
    raridades.legend.level4 = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 4).length
    raridades.legend.level5 = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 5).length
    
    raridades.superLegend.level1 = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 1).length
    raridades.superLegend.level2 = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 2).length
    raridades.superLegend.level3 = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 3).length
    raridades.superLegend.level4 = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 4).length
    raridades.superLegend.level5 = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 5).length
    
    console.log(raridades)

    return raridades
  
  }

  
  const quantidadeRaridade = (dados: Array<IHeroi>) =>{
        //contar raridade
        var raridade = {
          common: 0,
          rare: 0,
          superRare: 0,
          epic:0,
          legend:0,
          superLegend:0
      }
  
  
      raridade.common = dados.filter(x => x.rarity === 'Comomm').length 
      raridade.rare = dados.filter(x => x.rarity === 'Rare').length 
      raridade.superRare = dados.filter(x => x.rarity === 'Super Rare').length 
      raridade.epic = dados.filter(x => x.rarity === 'Epic').length 
      raridade.legend = dados.filter(x => x.rarity === 'Legendary').length 
      raridade.superLegend = dados.filter(x => x.rarity === 'Super Legendary').length 
      
      return raridade
  }

  const calcularBcoin = (dados: Array<IHeroi>) =>{

    var level1 = 0
    var level2 = 0
    var level3 = 0
    var level4 = 0
    var level5 = 0
    let qtd = 0
    
    //commum
    qtd = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 1).length
    level1 += (qtd * 10)

    qtd = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10) + (qtd * 1)
    
    qtd = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 2)

    qtd = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 4)
    
    qtd = dados.filter(x => x.rarity === 'Comomm' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 7)
    
    //raro
    qtd = dados.filter(x => x.rarity === 'Rare' &&  x.level === 1).length
    level1 += (qtd * 10) 

    qtd =  dados.filter(x => x.rarity === 'Rare' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10 ) + (qtd * 2)

    qtd =  dados.filter(x => x.rarity === 'Rare' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 4)

    qtd =  dados.filter(x => x.rarity === 'Rare' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 5)

    qtd =  dados.filter(x => x.rarity === 'Rare' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 9)
    
    // super raro
    qtd = dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 1).length
    level1 += (qtd * 10) 
    
    qtd =  dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10 ) + (qtd * 2)
    qtd =  dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 4)
    
    qtd =  dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 5)
    
    qtd =  dados.filter(x => x.rarity === 'Super Rare' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 10)
    
    // epic
    qtd = dados.filter(x => x.rarity === 'Epic' &&  x.level === 1).length
    level1 += (qtd * 10)
    
    qtd =  dados.filter(x => x.rarity === 'Epic' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10 ) + (qtd * 3)
    
    qtd =  dados.filter(x => x.rarity === 'Epic' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 7)
    
    qtd =  dados.filter(x => x.rarity === 'Epic' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 11)
    
    qtd =  dados.filter(x => x.rarity === 'Epic' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 22)
    
    // legendari
    qtd = dados.filter(x => x.rarity === 'Legendary' &&  x.level === 1).length
    level1 += (qtd * 10) 
    
    qtd =  dados.filter(x => x.rarity === 'Legendary' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10 ) + (qtd * 7)
    
    qtd =  dados.filter(x => x.rarity === 'Legendary' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 18)
    
    qtd =  dados.filter(x => x.rarity === 'Legendary' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 40)
    
    qtd =  dados.filter(x => x.rarity === 'Legendary' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 146)
    
    // super legendari
    qtd = dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 1).length
    level1 += (qtd * 10) 
    
    qtd =  dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 2).length
    level2 += (qtd * 10) + (qtd * 10 ) + (qtd * 9)
    
    qtd =  dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 3).length
    level3 += (qtd * 10) + (qtd * 30 ) + (qtd * 25)
    
    qtd =  dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 4).length
    level4 += (qtd * 10) + (qtd * 70 ) + (qtd * 56)
    
    qtd =  dados.filter(x => x.rarity === 'Super Legendary' &&  x.level === 5).length
    level5 += (qtd * 10) + (qtd * 150 ) + (qtd * 199)
    
    var total = level1 + level2 + level3 + level4 + level5

    return total
  
  }

  export {calcularBcoin, quantidadeRaridade, classificacaoBomber}