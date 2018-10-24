const toRead = `<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/Word-Guess-Game/" target="_blank" class="card">
        <h3>Hangman</h3>
        <img src="assets/images/hangman-game.PNG" class="portimage" alt="Hangman">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/unit-4-game/" target="_blank" class="card">
        <h3>RPG Game</h3>
        <img src="assets/images/RPG-game.PNG" class="portimage" alt="RPG Game">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/TriviaGame/" target="_blank" class="card">
        <h3>Trivia Game</h3>
        <img src="assets/images/trivia-game.PNG" class="portimage" alt="Trivia Game">
    </a>
</div>

<!-- <div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="#" target="_blank" class="card">
        <h3>Rutgers Info Widget</h3>
        <img src="assets/images/four_pic.png" class="portimage" alt="Rutgers Info Widget">
    </a>
</div> -->

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/RPS-Multiplayer/" target="_blank" class="card">
        <h3>Rock Paper Scissors</h3>
        <img src="assets/images/RPS-game.PNG" class="portimage" alt="Rock Paper Scissors">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/giphy-games/" target="_blank" class="card">
        <h3>Giphy Api</h3>
        <img src="assets/images/giphy-gifs.PNG" class="portimage p-image-two" alt="Giphy Logo">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/08_project-1/" target="_blank" class="card">
        <h3>Chef in your Pantry (Group)</h3>
        <img src="assets/images/chef-in-your-pantry.PNG" class="portimage p-image-two" alt="Chef's Group">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://github.com/Cragady/liri-node-app" target="_blank" class="card">
        <h3>liri.js</h3>
        <img src="assets/images/liriJS.PNG" class="portimage p-image-two" alt="liri.js terminal application">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://github.com/Cragady/Word-Guess-Cli" target="_blank" class="card">
        <h3>Word-Guess <br>(Command Line)</h3>
        <img src="assets/images/word-guess-pic.PNG" class="portimage p-image-two" alt="word-guess-game terminal application">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://github.com/Cragady/bamazon-cli" target="_blank" class="card">
        <h3>Bamazon Cli</h3>
        <img src="assets/images/word-guess-pic.PNG" class="portimage p-image-two" alt="word-guess-game terminal application">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://immense-reef-53914.herokuapp.com/" target="_blank" class="card">
        <h3>Friend Finder</h3>
        <img src="assets/images/friend-finder2.PNG" class="portimage p-image-two" alt="Friend-Finder">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://infinite-escarpment-10093.herokuapp.com/" target="_blank" class="card">
        <h3>Burger</h3>
        <img src="assets/images/burgers.png" class="portimage p-image-two" alt="Burger">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://arcane-sea-52510.herokuapp.com/" target="_blank" class="card">
        <h3>Burger Sequel</h3>
        <img src="assets/images/Burgers2.PNG" class="portimage p-image-two" alt="Burger Sequel">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://calm-ocean-96864.herokuapp.com/" target="_blank" class="card">
        <h3>Book-MarkY!</h3>
        <img src="assets/images/Book-MarkY!.PNG" class="portimage p-image-two" alt="Book-MarkY!">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://nameless-sands-15542.herokuapp.com/" target="_blank" class="card">
        <h3>News Scraper</h3>
        <img src="assets/images/web-scraper.PNG" class="portimage p-image-two" alt="News Scraper">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://cragady.github.io/Clicky-Game/" target="_blank" class="card">
        <h3>Clicky Game</h3>
        <img src="assets/images/clicky.PNG" class="portimage p-image-two" alt="Clicky Game">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://pure-lake-85163.herokuapp.com" target="_blank" class="card">
        <h3>NYT Scrubber</h3>
        <img src="assets/images/nyt-scrubber.PNG" class="portimage p-image-two" alt="Clicky Game">
    </a>
</div>

<div class="work col-12 col-sm-6 col-lg-4 text-center">
    <a href="https://fathomless-lake-80884.herokuapp.com/" target="_blank" class="card">
        <h3>IntroNerd</h3>
        <img src="assets/images/intronerd.PNG" class="portimage p-image-two" alt="Clicky Game">
    </a>
</div>`;
const fs = require('fs');
const arrFileWrite = [];
function PortDat(link, title, piPath){
    this.link = link;
    this.title = title;
    this.piPath = piPath;
};

const reader = toRead.split(' ');
let link, title, piPath, lastDat, swath;
for(let i = 0; i < reader.length; i++){
    if(reader[i].includes('href=')){
        link = reader[i].slice(5).replace(/"/g, '');
        // console.log(reader[i].slice(5));
    };
    if(reader[i].includes('<h3>')){
        let s = i;
        let wordPass = reader[i];
        while(!reader[s].includes('</h3>')){
            s++;
            wordPass += reader[s]
        };
        // console.log('"' + wordPass.slice(4, wordPass.length - 6) + '"');
        title = wordPass.slice(4, wordPass.length -6);
    };
    if(reader[i].includes('src=')){
        // console.log(reader[i].slice(4), `
        // new line
        // `);
        piPath = reader[i].slice(4).replace(/"/g, '');
    };
    if(piPath === lastDat){
        swath = false;
    } else {
        swath = true;
    }
    if(swath === true){
        let entry = new PortDat(link, title, piPath);
        arrFileWrite.push(entry);
        // console.log(entry);
    }
    if(piPath !== undefined){
        lastDat = piPath;
    }
};

fs.writeFile('portData.json', JSON.stringify(arrFileWrite, null, 4), function(err){
    if(err) throw err;
    console.log('savederundo!');
});