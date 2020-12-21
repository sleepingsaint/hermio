# HERMIO

A simple discord bot to make your time more enjoyable.
Join the [server](https://discord.gg/qc3dvTA) to see the bot in action.

## Commands

| Command       | Description   | 
| ------------- | ------------- | 
$inspire | Genereate inspirational quote
$article | Provides new interesting article from dev.to community
$bored | Suggests a random activity
$food | Displays random food image
$qr **text** | Generates the QR Code for the text provided. If text contains spaces enclose it in double quotes
$urlshortner **url** | Generates the tiny url of the given url
$help | Dispalys help 

## Usage

Create .env file in the project root directory and add your **Discord BOT TOKEN**

```
BOT_TOKEN=<YOUR_BOT_TOKEN>
```

## Code is hosted on repl.it

The code hosted on repl stops working if we close the tab.
But if we run the code like hosting a web server it stays idle for 30 min ( for me it is around 5 min I have no idea why? ).
So to send requests to the server I have used __freshping__ to send the request every 1 minute so the code server keeps running and bot stays alive.

Another alternative is __uptime robot__, but it uses premium for 1 min intervals.
