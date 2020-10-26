const fetch = require('node-fetch');

module.exports = {
    name: "$inspire",
    description: "Generate random inspirational quote",
    execute(msg, args) {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(data => {
                let { text, author } = data[Math.floor(Math.random() * data.length)];
                msg.reply(`${text} - by ${author}`);
            })
            .catch(err => {
                console.log(err);
                msg.reply("Oops! something went wrong");
            })
    }
}