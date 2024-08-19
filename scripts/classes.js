export class Pokemon {
    constructor(name, type, hp, moves) {
        this._name = name;
        this._type = type;
        this._hp = hp;
        this._moves = moves;
    }
    /*
       Methods
        - Attack(move)
        - Use Item(trainerItem)
        - Faint
    */

}

export class Trainer {
    constructor(name, items, pkmnParty) {
        this._name = name;
        this._items = items;
        this._pkmnParty = pkmnParty;
    }
    /*
       Methods
        - Throw poke-ball
    */
}

export class Attack {
    constructor(name, damage, type) {
        this._name = name;
        this._damage = damage;
        this._type = type;
    }
}

export class Item {
    constructor(name) {
        this._name = name;
    }
}
