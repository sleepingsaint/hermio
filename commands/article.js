const fetch = require('node-fetch');

module.exports = {
    name: "$article",
    description: "Get a random article from dev.to",
    execute(msg, args) {
        fetch('https://dev.to/api/articles?top=1')
            .then(res => res.json())
            .then(data => {
                const { url } = data[Math.floor(Math.random() * data.length)];
                msg.reply(url);
            })
            .catch(err => {
                console.log(err);
                msg.reply("Oops! something went wrong.")
            })
    }
}