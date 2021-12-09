let heroes = {
    hero: {
        health: 100,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/85db0a58130757.59f09a9a48990.jpg'
    },
}
let bosses = {
    boss: {
        health: 100,
        img: 'https://static.wikia.nocookie.net/monster/images/6/6e/DragonRed.jpg'

    }
}

let heroHealth = 100


function drawAllHeroes() {
    let template = ''
    for (const key in heroes) {
        const hero = heroes[key];
        template += `
            
        <img src="${hero.img}" class="img-fluid"
                <h3 class="text-center">${key}</h3>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${hero.health}%;" aria-valuenow="${hero.health}" aria-valuemin="0"
                        aria-valuemax="100" id="${key}-health"></div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success" id="${key}-button" onclick="hitBoss('${key}')" type="button">Fight</button>
                </div>
        
        `
    }
    document.getElementById('hero').innerHTML = template
}

function drawAllBosses() {
    let template = ''
    for (const key in bosses) {
        console.log('boss key in draw', key);
        const boss = bosses[key];
        template += `
            <img src="${boss.img}" class="img-fluid"
                <h3 class="text-center">${key}</h3>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${boss.health}%;" aria-valuenow="${boss.health}" aria-valuemin="0"
                        aria-valuemax="100" id="${key}-health"></div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-success" id="${key}-button" onclick="hitBoss('${key}')" type="button">Fight</button>
                </div>
          
        `
    }
    document.getElementById('boss').innerHTML = template
}



















function hitBoss(bossKey) {
    bosses.boss.health--
    console.log(bosses.boss.health);
    drawBossHealth(bossKey)
}

function hitHero(heroKey) {
    heroes.hero.health--
    console.log(heroes.hero.health);
    drawHeroHealth(heroKey)
}



// function decreaseHealth() {
//     for (const key in characters) {
//         if (characters[key].health >= 0) {
//             console.log(decrease);
//         }
//     }
//     // drawBossHealth()
// }

function drawBossHealth(bossKey) {
    console.log('boss key in drawBossHealth', bossKey);
    document.getElementById(`${bossKey}-health`).style = `width: ${bosses[bossKey].health}%`
    if (bosses[bossKey].health >= 0) {

    }
}

function drawHeroHealth(heroKey) {

    document.getElementById(`${heroKey}-health`).style = `width: ${heroes[heroKey].health}%`
    if (heroes[heroKey].health >= 0) {

    }
}

function decreaseHeroHealth() {
    console.log('decreasing hero health');
    for (const key in heroes) {
        if (heroes.hero.health <= 100) {
            heroes.hero.health -= Math.floor(Math.random() * 10)
            drawHeroHealth(key)
        }
    }
}

function startInterval() {
    setInterval(decreaseHeroHealth, 2000)
}

drawAllHeroes()
drawAllBosses()
startInterval()

