import {User} from '../add-user/user.model';

export enum Currency {
  UAH,
  USD,
  EUR
}

export class Wallet {
  constructor(
    public id?: number,
    public amount?: number,
    public currency?: Currency,
    public user?: User
  ) {
  }
}
