const { getHighscoreDB, postHighscoreDB } = require("../models/highscore.js");

async function getHighscore(request, response) {
const highscore = await getHighscoreDB();
// console.log(highscore);
response.send(highscore);
}

async function postHighscore(request, response) {
const position = await postHighscoreDB(request.body)
// console.log(position);
const highscore = await getHighscoreDB();
// console.log(highscore);


response.send({
    highscore: highscore,
    position: position
});
}

module.exports = { getHighscore, postHighscore };