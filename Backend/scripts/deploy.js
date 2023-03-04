const hre = require("hardhat");

async function main() {

    //deploying contract
    const contractName = "FrenOfRushi"
    const BuyMeCoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeCoffee= await BuyMeCoffee.deploy();
    await buyMeCoffee.deployed();
    console.log(`Contract${buyMeCoffee} contract deployed at ${buyMeCoffee.address} `);
}

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  