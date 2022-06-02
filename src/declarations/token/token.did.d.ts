import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'balance' : (arg_0: Principal) => Promise<bigint>,
  'is_payed' : (arg_0: Principal) => Promise<boolean>,
  'payOut' : () => Promise<string>,
}
