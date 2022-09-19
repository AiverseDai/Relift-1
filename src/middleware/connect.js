
async function connect(){
    if (typeof window.ethereum !== 'undefined') {
  
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(window.ethereum.selectedAddress)
        console.log(account)
        document.getElementById('show').innerHTML = "Connected🔐";
      }
}

export default connect;