function getMessageStatus(n, timestamps, messages, k) {
  //I need smth to keep time and message
  const newMap = new Map();
  //check if a message is ine newMap
  //message key, value - timestamp
  //message, timestamps  is an array

  //return - array of booleand
  const result = [];
  for (let i = 0; i < messages.length; i++) {
    if (newMap.has(messages[i])) {
      //yes? check the time stamps!
      //timestaps - old time is it too soon?? early than the k time??
      if (timestamps[i] - newMap.get(messages[i]) > k) {
        result.push(true);
      } else {
        result.push(false);
      }
      //regardless of different returns- I update time in newMap according to message;
      newMap.set(messages[i], timestamps[i]);
    } else {
      //put it in newMap
      newMap.set(messages[i], timestamps[i]);
      result.push(true);
    }
  }

  //1- hello-true
  //4 -bye-true
  //5-bye - 5-4 = 1 - false

  return result;
}

console.log(
  getMessageStatus(
    6,
    [1, 4, 5, 10, 11, 14],
    ["Hello", "bye", "bye", "hello", "bye", "hello"],
    5
  )
);
