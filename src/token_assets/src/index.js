import { token } from "../../declarations/token";
import { Principal } from "@dfinity/principal";

async function balance(){
  const input  = document.querySelector('.input');
  const p = Principal.fromText(input.value);
  const balance  = await token.balance(p);
  document.querySelector('.balance').innerHTML = `Your balance is ${balance.toLocaleString()}`;
}


document.querySelector('.cehck_balance').addEventListener('click', balance);