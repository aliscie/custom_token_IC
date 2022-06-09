import { token, canisterId, createActor } from "../../declarations/token";
import { Principal } from "@dfinity/principal";
import {AuthClient} from '@dfinity/auth-client';

async function balance(){
  // const input  = document.querySelector('.input');
  const authClient = await AuthClient.create();
  const identity = await authClient.getIdentity();
  const authedCanister = await createActor(canisterId,{
    agentOptions: {
      identity
    }
  });

  // const p = Principal.fromText(input.value);
  // const balance  = await token.balance(p);

  var balanceElement = document.querySelector('.balance');
  balanceElement.innerHTML = '<div class="section-loading"> <ul class="list-bars"><li></li><li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div>'
  const balance  = await authedCanister.balance(identity._principal.toString());
  balanceElement.innerHTML = `Your balance is ${balance.toLocaleString()}`;
}

const init = async ()=>{

  const authClient = await AuthClient.create();
  if (authClient.isAuthenticated()){
    document.querySelector('.auth').textContent = "Alreaed logedin"
  } else{
    authClient.login({
      identityProvider:'https://identity.ic0.app/#authorize',
      onSuccess: ()=>{
        console.log('login success');
      }
    })
  }
  
}

document.querySelector('.cehck_balance').addEventListener('click', balance);
document.querySelector('.auth').addEventListener('click', init);

