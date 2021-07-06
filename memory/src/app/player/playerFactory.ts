import Player from './player';

class PlayerFactory {
    public constructor() {
        // nothing to do here
    }

    public getPlayer(color: string, cardsIdUptoExcl: number): Player {
        return new Player(color, cardsIdUptoExcl);
    }
}

const singleton = (function() {
    let instance: PlayerFactory; // uninitialized so undefined

    function init() {
        return new PlayerFactory();
    }

    function getInstance() {
        if (!Boolean(instance)) {
            instance = init();
        }
        return instance;
    }

    return {
        getPlayerFactoryInstance: getInstance,
    };
})();

export default singleton;
