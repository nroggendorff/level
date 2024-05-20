const auth = "YOUR_TOKEN_HERE"; //replace YOUR_TOKEN_HERE with a valid discord authentication token
const url = "https://discord.com/api/v9/channels/CHANNEL_ID/messages/MESSAGE_ID/"; //replace CHANNEL_ID and MESSAGE_ID respectively

//replace these or whatever
const reactions = [
  "%F0%9F%87%B1",
  "%F0%9F%87%AA",
  "%F0%9F%87%B9",
  "%F0%9F%9F%A6",
  "%F0%9F%87%B2",
  "%F0%9F%87%AA",
  "%F0%9F%9F%A6",
  "%F0%9F%87%B4",
  "%F0%9F%87%BA",
  "%F0%9F%87%B9",
  "%E2%80%BC%EF%B8%8F",
  "%F0%9F%94%84"
];

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const addReaction = async (reaction) => {
  await fetch(`${url}reactions/${reaction}/@me?location=Message&type=0`, {
    method: "PUT",
    headers: { authorization: auth }
  });
};

const removeReaction = async (reaction) => {
  await fetch(`${url}reactions/${reaction}/0/@me?location=Message&burst=false`, {
    method: "DELETE",
    headers: { authorization: auth }
  });
};

const manageReactions = async () => {
  while (true) {
    for (let reaction of reactions) {
      await addReaction(reaction);
      await delay(2000);
      await removeReaction(reaction);
    }
  }
};

manageReactions().catch(error => console.error(error));
