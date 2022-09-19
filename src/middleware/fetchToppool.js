import { ethers } from "ethers";
import abi from "../middleware/abi.json";

async function fetchToppool() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log({ provider }, "hgdsbkjcnakj,");
    // console.log(process.env.REACT_APP_TEST_USDCTOKEN);
    const signer = provider.getSigner();
    const Contract = new ethers.Contract(
      "0xb96531bf3a6b8F99b989e961d0C3470b6d9A7f91",
      abi,
      provider
    );
    //   signer
    const data = await Contract.fetch();
    console.log(data, "fetch to pool");
    console.log("///////////////////");
    return data;
  }
}

export default fetchToppool;
