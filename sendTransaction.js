const sendTransaction = async () => {
  console.log('sending transaction')
  const web3 = new Web3(magic.rpcProvider);
  const from = (await web3.eth.getAccounts())[0];
  const to = "0xaCA9B6D9B1636D99156bB12825c75De1E5a58870";
  const value = web3.utils.toWei("0.00123"); // Convert 1 ether to wei

  // Submit transaction to the blockchain and wait for it to be mined
  const transaction = await web3.eth.sendTransaction({
    from,
    to,
    value,
  });
  console.log(transaction);
};
