import { BuyMeCoffeeInstance } from "./Instance";
import { ForInstance } from "./Instance";
import { formatEther } from "ethers/lib/utils";


const getMsgList = async() => {
    const buyMeCoffee = await BuyMeCoffeeInstance();
    const Msges = await buyMeCoffee.getMsges(); 
    return Msges;
}


const withDrawFunds = async() => {
    const buyMeCoffee = await BuyMeCoffeeInstance();
    try{
        await buyMeCoffee.withDraw();
    }catch(err){
        console.log(err.message);
    }
}

const isFren = async (address) => {
    const buyMeCoffee = await BuyMeCoffeeInstance();
    return await buyMeCoffee.isFriend(address);
}

const mintFor = async (address, amount) => {
    const forToken =  await ForInstance();
    await forToken.mint(address, amount);
}

export default {getMsgList, withDrawFunds,isFren,mintFor}