function helloWorld() {
  console.log('hello world')

}
function calculateStats(){
  let baseHp = document.getElementById('base-hp').value
  let baseDef = document.getElementById('base-def').value
  let baseAtk = document.getElementById('base-atk').value
  let baseSpd = document.getElementById('base-spd').value
  let spdSet = document.getElementById('spd-set').checked
  
  let percentHp = document.getElementById('hp-percent').value
  let flatHp = document.getElementById('hp-flat').value
  let percentDef = document.getElementById('def-percent').value
  let flatDef = document.getElementById('def-flat').value
  let percentAtk = document.getElementById('atk-percent').value
  let flatAtk = document.getElementById('atk-flat').value
  let speed = document.getElementById('speed').value

  let calcedHp = document.getElementById('hp-calc')
  let calcedDef = document.getElementById('def-calc')
  let calcedAtk = document.getElementById('atk-calc')
  let calcedSpd = document.getElementById('spd-calc')


  percentHp = eval(percentHp);
  flatHp = eval(flatHp);
  percentDef = eval(percentDef);
  flatDef = eval(flatDef);
  percentAtk = eval(percentAtk);
  flatAtk = eval(flatAtk);
  speed = eval(speed);

  calcedHp.innerHTML = parseInt((baseHp) * (percentHp/100)) + parseInt(baseHp) + parseInt(flatHp);
  calcedDef.innerHTML = parseInt((baseDef * (percentDef/100)) + parseInt(baseDef) + parseInt(flatDef));
  calcedAtk.innerHTML = parseInt((baseAtk * (percentAtk/100)) + parseInt(baseAtk) + parseInt(flatAtk));
  calcedSpd.innerHTML = parseInt(baseSpd) + (baseSpd * (0.25 * spdSet)) + speed;
}


let calculateButton = document.getElementById('calculate-button')
calculateButton.addEventListener('click', calculateStats)
console.log('end of script')