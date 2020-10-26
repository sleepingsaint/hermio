const fetch = require('node-fetch');

module.exports = {
    name: "$food",
    description: "Random image of food",
    execute(msg, args) {
        fetch("https://foodish-api.herokuapp.com/api/")
            .then(res => res.json())
            .then(data => msg.reply(data.image))
            .catch(err => {
                console.log(err);
                msg.reply("Oops! something went wrong")
            })
    }
}