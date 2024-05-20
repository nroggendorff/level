# level
A simple way to level up in a server without getting rate-limited

## Features
Adds a set of predefined reactions to a specified message.
Removes the reactions after a short delay (2000 ms).
Continuously repeats the process.

## Prerequisites
Node.js installed on your system.
A valid Discord user token.

## Installation
Clone the repository or download the script file.

Open a terminal and navigate to the directory containing the script.

## Usage
Execute the script by running:
```bash
node main.js
```

## Constants
auth: Your Discord bot token or user token.
url: The API endpoint for the specific message you want to react to.
reactions: An array of reaction Unicode codes.

## Functions
addReaction(reaction): Adds a reaction to the message.
removeReaction(reaction): Removes a reaction from the message.
manageReactions(): The main function that loops through the reactions, adding and then removing them in sequence.

## Error Handling
The script includes basic error handling, logging any errors to the console.

## Notes
Be careful with the usage of this script, as spamming reactions might violate Discord's terms of service.
Make sure to have the appropriate permissions to add and remove reactions in the target channel.

### License
This project is licensed under a [custom license](LICENSE).
