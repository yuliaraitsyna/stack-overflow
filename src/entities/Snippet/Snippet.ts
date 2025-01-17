import { User } from "../User/User"

export class Snippet {
    #id: number
    #code: string
    #language: string
    #user: User
    #likes: number
    #dislikes: number
    #comments: number

    constructor(id: number, code: string, language: string, user: User, likes: number, dislikes: number, comments: number) {
        this.#id = id;
        this.#code = code;
        this.#language = language;
        this.#user = user;
        this.#likes = likes;
        this.#dislikes = dislikes;
        this.#comments = comments;
    }

    set id(id: number) {
        this.#id = id;
    }

    set code(code: string) {
        this.#code = code;
    }

    set language(language: string) {
        this.#language = language;
    }

    set user(user: User) {
        this.#user = user;
    }

    set likes(likes: number) {
        this.#likes = likes;
    }

    set dislikes(dislikes: number) {
        this.#dislikes = dislikes;
    }

    set comment(comment: number) {
        this.#comments = comment;
    }

    get id() {
        return this.#id;
    }

    get code() {
        return this.#code;
    }

    get language() {
        return this.#language;
    }

    get user() {
        return this.#user;
    }

    get likes() {
        return this.#likes;
    }

    get dislikes() {
        return this.#dislikes;
    }

    get comments() {
        return this.#comments;
    }
}