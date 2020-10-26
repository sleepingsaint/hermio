module.exports = {
    name: '$help',
    description: 'Help command for hermio',
    execute(msg, args) {
        msg.reply(`
            Hermio is meant to make your time more enjoyable.

            Commands:

            $inspire: Genereate inspirational quote
            $article: Provides new interesting article from dev.to community
            $bored: Advice you to do a random activity
            $food: Gives random food image
            $qr <text>: Generates the QR Code for the text provided. If text contains spaces enclose it in double quotes
            $help: Dispalys help
        `)
    },
};

