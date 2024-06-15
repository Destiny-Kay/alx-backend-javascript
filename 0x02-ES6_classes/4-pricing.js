import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (typeof value !== 'string') {
      throw new Error('Currency must be a string');
    }
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Amount must be a Currency.');
    }
    this._amount = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }
}
