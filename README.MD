So, in summary, i created a slack channel "*bolt*" and then I created a slack app on slack's website.

Then I integrated the app into the channel. Upon doing this, slack gave me a webhook url to send messages to the channel.

I then created a NodeJS app then reads an excel file from the app directory and converts it to json, I then transform the json to a text to be sent to the slack channel (using the webhook url obtained earlier)

##How to run the application
### Prerequisites
You need to have nodejs on your system
Then run `npm install` to install required packages

Copy the excel file to the application directory and rename it as `file.xlsx`
Run the program using `node index.js`
