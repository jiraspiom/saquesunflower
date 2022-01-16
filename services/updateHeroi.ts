import { IHeroi } from "../types/iHeroi";

// price vars
var priceUSD = 0;
var volumeUSD = 0;
var priceBrl = 0;
var volumeBrl = 0;
var priceChange = 0;

// Main Vars
// Chests HP
let chestWoodHp = 80;
let chestMetalHp = 170;
let chestGoldHp = 800;
let chestCrystalHp = 1300;
let chestTreasureHp = 2000;

// Chests Rewards
let chestWoodRw = 0.01425;
let chestMetalRw = 0.0325;
let chestGoldRw = 0.1625;
let chestCrystalRw = 0.325;
let chestTreasureRw = 1.18;

let averageProfitBadHero = 0.17;
let averageProfitPerMap = 0.52;

let heroList: Array<any> = [];
let fullStats: Array<any> = [];

//const skinsImageList = ["cowboy", "witch", "vampire","knight", "frog","ninja", "flog2"];
const rarityList = [
  "common",
  "rare",
  "super rare",
  "epic",
  "legend",
  "super legend",
];

const skinsImageList = [
  { id: 1, name: "flogBall" },
  { id: 2, name: "knight" },
  { id: 3, name: "cowboy" },
  { id: 4, name: "vampire" },
  { id: 5, name: "witch" },
  { id: 6, name: "dog" },
  { id: 7, name: "flogMeme" },
  { id: 8, name: "ninja" },
  { id: 9, name: "??9??" },
  { id: 10, name: "??10??" },
  { id: 11, name: "??11??"},

];

function getEnergy(array: any) {
  var value = array.indexOf(5);
  if (value !== -1) {
    return 1;
  }
  return 0;
}

function getMana(array: any) {
  var value = array.indexOf(4);
  if (value !== -1) {
    return 1;
  }
  return 0;
}

const updateSimulator = (heroi: IHeroi) => {
  // get vars together
  var hero = heroi.id;
  var customName = heroi.id;
  var level = heroi.level;
  var rarity = heroi.rarity;
  var skin = skinsImageList.find((x) => x.id === heroi.skin)?.name;
  var color = heroi.color;
  var power = heroi.bombPower;
  var speed = heroi.speed;
  var stamina = heroi.stamina;
  var bombnum = heroi.bombCount;
  var bombrange = heroi.bombRange;
  var energy = getEnergy(heroi.abilities);
  var mana = getMana(heroi.abilities);

  // Lets calculate the time this hero needs to fully recover
  var timeToRecover;
  if (energy == 1) {
    timeToRecover = stamina * 50;
  } else {
    timeToRecover = stamina * 100;
  }

  //adicionado o pwer calculado
  power = power + level - 1

  // Lets calculate how many hits it needs for every chest
  var hitsWood = chestWoodHp / power;
  var hitsMetal = chestMetalHp / power;
  var hitsGold = chestGoldHp / power;
  var hitsCrystal = chestCrystalHp / power;
  var hitsTreasure = chestTreasureHp / power;

  // Lets calculate the profitability
  // we have a base calculation for a basic char
  // we just sum every talent, and subtract 30% if mana is enabled
  // then we calculate it against the time to recover up to 24hours
  var totalTalents = power + speed + stamina + bombnum + bombrange;

  totalTalents = (totalTalents * averageProfitBadHero) / 5;

  var totalProfit = parseFloat(totalTalents.toFixed(3));

  if (mana == 1) {
    totalProfit += totalProfit * 0.2;
  }

  if (energy == 1) {
    totalProfit = totalProfit * 2;
  }

  var maxProfit = totalProfit + totalProfit * 0.2;

  maxProfit = parseFloat(maxProfit.toFixed(3));

  var minProfit = totalProfit - totalProfit * 0.4;

  minProfit = parseFloat(minProfit.toFixed(3));

  var avgProfit: any = (avgProfit = (maxProfit + minProfit) / 2);

  // now lets update the local database
  // firstly we search if this is in the list
  // console.log(heroList);
  //var index = heroList.findIndex((obj => obj.hero == hero));
  //var heroObj = heroList[index];
  // var heroObj = heroList[0];
  var heroObj = {
    id: hero,
    skin,
    color,
    customName,
    level,
    rarity,
    power,
    speed,
    stamina,
    bombnum,
    bombrange,
    energy,
    mana,
    timeToRecover,
    hitsWood: Math.floor(hitsWood),
    hitsMetal: Math.floor(hitsMetal),
    hitsGold: Math.floor(hitsGold),
    hitsCrystal: Math.floor(hitsCrystal),
    hitsTreasure: Math.floor(hitsTreasure),
    totalProfit,
    maxProfit,
    minProfit,
    avgProfit
  };

  return heroObj;
};

const roundDown = (n: any) => {
  return Math.floor(n);
};

export { updateSimulator };
