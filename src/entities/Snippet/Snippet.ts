import { SnippetState } from "../../features/MarkButtons/MarkButton.types"
import { Comment } from "../Comment/Comment"
import { Mark } from "../Mark/Mark"
import { User } from "../User/User"

export interface Snippet {
    id: number
    code: string
    language: string
    user: User
    marks: Mark[]
    comments: Comment[]
    state: SnippetState
}