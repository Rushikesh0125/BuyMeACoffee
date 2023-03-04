const hre = require("hardhat");

async function getBalances(address){
  const balance = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balance);
}

async function printBalances(addresses){
  for(let i = 0; i < addresses.length; i++){
    console.log(`the balance of ${addresses[i]} is ${await getBalances(addresses[i])}`);
  }
}

async function printMsges(Msges){
  for(const msg of Msges){
    const time = msg.timestamp;
    const sender = msg.name;
    const senderAddress = msg.from;
    const says = msg.message;
    console.log(`${sender} bought you a coffee at ${time} using address ${senderAddress} says : ${says}`);
  }
}


async function main() {

  const [owner, sender1, sender2, sender3] = await hre.ethers.getSigners();

  //deploying contract
  const BuyCoffeeContract = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyCoffeeContract= await BuyCoffeeContract.deploy();
  await buyCoffeeContract.deployed();
  console.log(
    `BuyMeACoffee contract deployed at ${buyCoffeeContract.address} `
  );

  const addresses =  [owner.address, buyCoffeeContract.address, sender1.address];

  console.log("-----------=====-printing funds from all party addresses---------------====--------------")
  await printBalances(addresses);

  await console.log("-----------=====-People buyiing coffee Before---------------====--------------")

  const tip = {value : hre.ethers.utils.parseEther("5")};
  await buyCoffeeContract.connect(sender1).buyCoffee("No one", "enjoy coffee", tip);
  await buyCoffeeContract.connect(sender2).buyCoffee("No one", "enjoy coffee", tip);
  await buyCoffeeContract.connect(sender3).buyCoffee("No one", "enjoy coffee", tip);

  await console.log("-----------=====-Coffeess bought already---------------====--------------")

  console.log("")

  console.log("-----------=====-printing funds in party addresses After---------------====--------------")
  await printBalances(addresses);

  console.log("-----------=====-Withdrawing funds to owner address---------------====--------------")

  await buyCoffeeContract.connect(owner).withDraw();

  console.log("-----------=====-Withdrawen funds completedy to owner address---------------====--------------")

  console.log("owner and contract address after withdrawing")
  console.log(await printBalances([owner.address, buyCoffeeContract.address]));


  console.log("----------=-=--=-=-===-==-=-=Messeges from people======-------=-=-=--=-=--===--=-=-==-=-=-=-=-")

  const MsgesList = await buyCoffeeContract.getMsges();
  await printMsges(MsgesList);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
