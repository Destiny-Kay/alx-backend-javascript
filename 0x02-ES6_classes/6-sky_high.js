import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') {
      throw new Error('Floors must be a nunmber.');
    }
    this.floors = value;
  }

  evacuationWarningMessage() {
    return `Evacute slowly the ${this._floors} floors`;
  }
}
