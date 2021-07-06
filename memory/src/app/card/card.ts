class Card {
    private _symbol: string;
    private _covered: boolean;
    private _matched: boolean;
    private _id: number;
    static counter: number = 0;

    public constructor(symbol: string) {
        this._symbol = symbol;
        this._covered = true; // covered/uncovered right now
        this._matched = false; // is matched with other card of a pair
        this._id = Card.counter;
        Card.counter += 1;
    }

    public getId(): number {
        return this._id;
    }

    public getSymbol(): string {
        return this._symbol;
    }

    public isSymbolEqual(other: Card) {
        return this._symbol === other._symbol;
    }

    public isEqual(other: Card) {
        return this._id === other._id;
    }

    public toString(): string {
        return this._covered ? '' : this._symbol;
    }

    public toggleCovered(): void {
        this._covered = !this._covered;
    }

    public toggleMatched(): void {
        this._matched = !this._matched;
    }

    public isMatched(): boolean {
        return this._matched;
    }

    public isCovered() {
        return this._covered;
    }

    // for setting class of the displayed card in html
    public getStatus(): string {
        if (this._matched) {
            return 'matched';
        } else if (this._covered) {
            return 'covered';
        } else {
            return 'uncovered';
        }
    }
}

export default Card;
