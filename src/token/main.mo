import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
actor Token{
  var onwer: Principal = Principal.fromText("ug5r5-74qxz-4dkqw-bjx6f-2wlit-3pqay-unom3-memsb-xgv4t-ljf2z-sae");
  var totalSuply :Nat = 10**9;

  var symbol = "ASC";
  var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    //                                           ^_____________________________________Initial_size.
    //                                              ^^^^^^^^^^^^^^^____________________How to look for a key.
    //                                                                ^^^^^^^^^^^^^^____How to store a key.
  balances.put(onwer,totalSuply);
  
  public query func balance(person: Principal) : async Nat{

    let b :Nat = switch (balances.get(person))  {
      case null 0;
      case (?result) result;
    };
    return b;
  };

  public func is_payed(caller: Principal) : async Bool{
    return balances.get(caller) != null
  };
    
  public shared(msg) func payOut(): async Text{
    // "2vxsx-fae" is anonymus user

    if (balances.get(msg.caller) != null) {
      return "You alreayd got your payment";
    } else{
      balances.put(msg.caller,10000);
      return "ok";
    }
    
  };

  public shared(msg) func transfer(to: Principal, amout:Nat): async Text{
    let balance_from = await balance(msg.caller);
    let balance_to = await balance(to);

    if (balance_from < amout) {
      return "You don't have enought money";
    };
    balances.put(msg.caller,balance_from - amout);
    balances.put(to,balance_to + amout);
    
    return "ok";
  };

}