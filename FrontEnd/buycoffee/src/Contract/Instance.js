import { ethers, Signer } from "ethers";
import BuyMeCoffeeAbi from '../Components/abis/BuyMeCoffeeAbi.json'
import ForAbi from '../Components/abis/FrenOfRushi.json'

const BuyMeCoffeeAddress = process.env.BUY_ME_COFFEE_CONTRACT_ADDRESS;
const ForAddress = process.env.FREN_OF_RUSHI_CONTRACT_ADDRESS;

const {ethereum} = window;
const provider = ethers.getDefaultProvider();
export const BuyMeCoffeeInstance = async () => {
    return new ethers.Contract(
        BuyMeCoffeeAddress,
        BuyMeCoffeeAbi,
        provider
    )
}

export const ForInstance = async () => {
    return new ethers.Contract(
        ForAddress,
        ForAbi,
        provider
    )
}