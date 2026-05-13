export function parseSMS(message) {
  const parts = message.split(' ');

  return {
    action: parts[0],
    amount: parts[1],
    token: parts[2],
    recipient: parts[4]
  };
}
