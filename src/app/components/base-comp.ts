import { ThrowStmt } from "@angular/compiler";
import { stringify } from "@angular/core/src/util"

export interface Choice {
    name: string;
    value: string;
}

export class DataSource {
    getOptions(key: string): Choice[] {
        return [{ name: 'a', value: 'AAAA' }, { name: 'b', value: 'BBBB' }]
    }
}

export class Base {
    key: string
    _options: Choice[]
    get options() {
        return this._options;
    }
    constructor(key: string) {
        this.key = key;
        this._options = new DataSource().getOptions(this.key)

    }
}
