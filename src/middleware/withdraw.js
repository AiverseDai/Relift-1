import { ethers } from "ethers";
import abi from "../middleware/abi.json";

async function donate(id, amount) {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider }, "hgdsbkjcnakj,");
    // console.log(process.env.REACT_APP_TEST_USDCTOKEN);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
      "0xb96531bf3a6b8F99b989e961d0C3470b6d9A7f91",
      abi,
      signer
    );
    //   signer
    let temp = amount * 10 ** 18;
    let temp1 = temp.toString();
    const data = await Contract.withdraw();
    await data.wait();
    alert("Transaction Sucessfull")
    return data;
  }
}

export default donate;
