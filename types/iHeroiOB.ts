export interface IHeroiOB{
    id: number,
    skin: string,
    color: number,
    rarityCor: string,
    customName: string,
    level: number,
    rarity: string,
    power: number,
    speed: number,
    stamina: number,
    bombnum: number,
    bombrange: number,
    energy: number,
    mana: number,
    abilities: [],
    timeToRecover: number,
    hitsWood: number,
    hitsMetal: number,
    hitsGold: number,
    hitsCrystal: number,
    hitsTreasure: number,
    totalProfit: number,
    maxProfit: number,
    minProfit: number,
    avgProfit: number,
    claimed: number,
    taxa: number,
    saques: number,
    quantidadePorRaridade: IRaridade
    totalBcoinGasto: number
}

interface IRaridade {
    common: number
    epic: number
    legend: number
    rare: number
    superLegend: number
    superRare: number
}