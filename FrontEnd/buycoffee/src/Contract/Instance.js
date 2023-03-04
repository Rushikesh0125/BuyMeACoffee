import { ethers, Signer } from "ethers";
import BuyMeCoffeeAbi from '../Components/abis/BuyMeCoffeeAbi.json'
import ForAbi from '../Components/abis/FrenOfRushi.json'

const BuyMeCoffeeAddress = process.env.REACT_APP_BUY_ME_COFFEE_CONTRACT_ADDRESS;
const ForAddress = process.env.REACT_APP_FREN_OF_RUSHI_CONTRACT_ADDRESS;

const {ethereum} = window;
const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner();
export const BuyMeCoffeeInstance = async () => {
    const BuyMeInstance =  new ethers.Contract(
        BuyMeCoffeeAddress,
        BuyMeCoffeeAbi,
        signer
    )
    return BuyMeInstance;
};

export const ForInstance = async () => {
    return new ethers.Contract(
        ForAddress,
        ForAbi,
        provider
    )
}