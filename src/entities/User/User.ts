export class User {
    #id: number;
    #username: string;
    #role: string;

    constructor(id: number, username: string, role: string) {
        this.#id = id;
        this.#username = username;
        this.#role = role;
    }
    
    set id(id: number) {
        this.#id = id;
    }

    set username(username: string) {
        this.#username = username;
    }

    set role(role: string) {
        this.#role = role;
    }

    get id() {
        return this.#id;
    }

    get username() {
        return this.#username;
    }

    get role() {
        return this.#role;
    }
}