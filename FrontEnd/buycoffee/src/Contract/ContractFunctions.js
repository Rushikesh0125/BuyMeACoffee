import { BuyMeCoffeeInstance } from "./Instance";
import { ForInstance } from "./Instance";
import { formatEther } from "ethers/lib/utils";


const getMsgList = async() => {
    const buyMeCoffee = await BuyMeCoffeeInstance();
    const Msges = await buyMeCoffee.getMsges(); 
    return Msges;
}

const buyACoffee = async(name, message) => {
    const buyMeCoffeeInst = await BuyMeCoffeeInstance();
    const tip = {value : formatEther("0.1")};
    try{await buyMeCoffeeInst.buyCoffee(name, message,tip);}
    catch(err){
        console.log(err)
    }
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

export default {getMsgList, buyACoffee, withDrawFunds,isFren,mintFor}