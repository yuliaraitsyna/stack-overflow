import { MarkAction } from "../../features/MarkButtons/MarkButton.types"
import { Mark } from "../Mark/Mark"
import { User } from "../User/User"

export interface Snippet {
    id: number
    code: string
    language: string
    user: User
    marks: Mark[]
    comments: number
    state: MarkAction
}