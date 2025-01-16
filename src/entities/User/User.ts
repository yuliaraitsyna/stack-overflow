export class User {
    #username: string;
    #role: string;

    constructor(id: number, username: string, role: string) {
        this.#username = username;
        this.#role = role;
    }

    set username(username: string) {
        this.#username = username;
    }

    set role(role: string) {
        this.#role = role;
    }

    get username() {
        return this.#username;
    }

    get role() {
        return this.#role;
    }
}