const fetch = require('node-fetch');

module.exports = {
    name: "$bored",
    description: "Activity to get rid of boredom",
    execute(msg, args) {
        fetch('http://www.boredapi.com/api/activity/')
            .then(res => res.json())
            .then(data => {
                const { activity, type } = data;
                msg.reply(`${activity} - ${type}`)
            })
            .catch(err => {
                console.log(err);
                msg.reply("Oops! something went wrong.")
            })
    }
}