const fetch = require('node-fetch');
const url = require('url');

module.exports = {
    name: "$qr",
    description: "generate qr code",
    execute(msg, args) {
        let arg = args.join(" ");
        arg = arg.replace(/^"(.+(?="$))"$/, '$1');
        msg.channel.send(`https://image-charts.com/chart?chs=200x200&cht=qr&chl=${encodeURIComponent(arg)}&choe=UTF-8`);
    }
}