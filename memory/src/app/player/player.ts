import randInt from "../utils/randInt";
import range from "../utils/range";
import Card from "../card/card";

class Player {
    private _id: number;
    private _color: string;
    private _points: number = 0;
    private _knownCards: Card[] = [];
    private _knownTwoSymbols: string[] = [];
    private _availableCardIds: number[] = []; // to get card id at random
    static counter: number = 0;

    public constructor(color: string, cardsIdUptoExcl: number) {
        this._id = Player.counter;
        this._color = color;
        Player.counter++;
        this._availableCardIds = range(cardsIdUptoExcl);
    }

    public getId(): number {
        return this._id;
    }

    public getPoints(): number {
        return this._points;
    }

    public getColor(): string {
        return this._color;
    }

    public addPoints(howMany: number): void {
        this._points += howMany;
    }

    public getName(): string {
        return "Player " + (this._id + 1).toString();
    }

    /**
     * returns a random guess (id of a card)
     */
    private getRandomGuess(): number {
        return this._availableCardIds[randInt(this._availableCardIds.length)];
    }

    public getFirstGuess(): number {
        let bestGuesses: number[] = this.getIdsOfCardsForTwoKnownSymbols();
        if (bestGuesses.length !== 0) {
            return bestGuesses[0];
        } else {
            return this.getRandomGuess();
        }
    }

    public getSecondGuess(prevGuess: Card): number {
        let result: number;
        let matchingCard: Card[] = [];
        matchingCard = this._knownCards.filter((card) => {
            return card.isSymbolEqual(prevGuess) && !card.isEqual(prevGuess);
        });
        if (matchingCard.length !== 0) {
            result = matchingCard[0].getId();
        } else {
            do {
                result = this.getRandomGuess();
            } while (result === prevGuess.getId());
        }
        return result;
    }

    public getKnownCards(): Card[] {
        return this._knownCards;
    }

    /**
     * returns number[] (ids) of two known cards from memory or [] if empty
     */
    private getIdsOfCardsForTwoKnownSymbols(): number[] {
        let theIds: number[] = [];
        let cards: Card[] = this._knownCards.filter((card) => {
            return card.getSymbol() === this._knownTwoSymbols[0];
        })
        if (cards.length === 2) {
            theIds = [cards[0].getId(), cards[1].getId()];
        }
        return theIds;
    }

    private handleMatchedCard(cardIn: Card): void {
        this._knownCards = this._knownCards.filter((card) => {
            return card.getId() !== cardIn.getId();
        })
        this._knownTwoSymbols = this._knownTwoSymbols.filter((symbol) => {
            return symbol !== cardIn.getSymbol();
        })
        this._availableCardIds = this._availableCardIds.filter((someId) => {
            return someId !== cardIn.getId();
        })
    };

    public handleMatchedCards(...cards: Card[]) {
        for (let i = 0; i < cards.length; i++) {
            this.handleMatchedCard(cards[i]);
        }
    }

    private updateKnownCard(cardIn: Card): void {
        let cardIdInKnownCards: boolean = this._knownCards.some(
            (card) => {
                return card.getId() === cardIn.getId()
            })
        let cardSymbolInKnownCards: boolean = this._knownCards.some(
            (card) => {
                return card.getSymbol() === cardIn.getSymbol()
            })
        if (!cardIdInKnownCards) {
            this._knownCards.push(cardIn);
        }
        if (!cardIdInKnownCards && cardSymbolInKnownCards) {
            this._knownTwoSymbols.push(cardIn.getSymbol());
        }
    }

    public updateKnownCards(...cards: Card[]): void {
        for (let i = 0; i < cards.length; i++) {
            this.updateKnownCard(cards[i]);
        }
    }
}

export default Player;
