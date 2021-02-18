const signMessage = async () => {
  const web3 = new Web3(magic.rpcProvider);
  const message = Math.round(Date.now() / 1000).toString();
  const from = (await web3.eth.getAccounts())[0];
  const signature = await web3.eth.personal.sign(message, from);
  console.log({ message, signature, from });
  return `${signature}-${message}`;
};
