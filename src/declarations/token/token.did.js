export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'balance' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'is_payed' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'payOut' : IDL.Func([], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
