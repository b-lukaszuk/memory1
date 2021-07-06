import Card from './card';
import randInt from '../utils/randInt';

class CardFactory {
    private _symbols: string[] = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '=',
        '+',
        '-',
        '~',
    ];
    // I changed _ to ~ because its easier to tell the difference with -

    // used for testing
    // private _symbols: string[] = [
    //     '!',
    //     '@',
    //     '#',
    //     '$',
    // ];
    private _cards: Card[] = [];

    public constructor() {
        for (let i = 0; i < this._symbols.length; i++) {
            // creates two cards of a kind
            this._cards.push(new Card(this._symbols[i]));
            this._cards.push(new Card(this._symbols[i]));
        }
    }

    public getNumOfCards(): number {
        return this._cards.length;
    }

    /**
     * returns a random card
     * or unefined if the deck is empty
     */
    public getRandCard(): Card {
        // Array.splice() returns an array and modifies the original array
        return this._cards.splice(randInt(this._cards.length), 1)[0];
    }
}

const singleton = (function() {
    let instance: CardFactory; // uninitialized so undefined

    function init() {
        return new CardFactory();
    }

    function getInstance() {
        if (!Boolean(instance)) {
            instance = init();
        }
        return instance;
    }

    return {
        getCardFactoryInstance: getInstance,
    };
})();

export default singleton;
