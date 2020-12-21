const fetch = require('node-fetch');

module.exports = {
    name: "$urlshortner",
    description: "Tiny version of the url",
    execute(msg, args) {
        let url = args[0];
        fetch(`http://tinyurl.com/api-create.php?url=${url}`)
            .then(res => res.text())
            .then(data => msg.reply(data))
            .catch(err => {
                console.log(err);
                msg.reply("Oops! something went wrong.")
            })
    }
}