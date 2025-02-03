import { Snippet } from "../../../entities/Snippet/Snippet";
import { User } from "../../../entities/User/User";
import { MarkAction } from "../../../features/MarkButtons/MarkButton.types";
import { ApiResponse, SnippetResponse } from "./parseSnippets.types";

function parseSnippets(apiResponse: ApiResponse): Snippet[] {
    const rawData = apiResponse.data?.data || [];
  
    return rawData.map((item: SnippetResponse) => {
      const id = Number(item.id);
      const code = item.code;
      const language = item.language;
      const user = new User(item.user?.id, item.user?.username, item.user?.role);
      const marks = item.marks;
      const comments = item.comments.length;
      let state = MarkAction.DEFAULT;
      
      marks.forEach(mark => {
          if(mark.user === user) {
            if(mark.type === 'like') {
                state = MarkAction.LIKE;
            }
            else {
                  state = MarkAction.DISLIKE;
            }
          }
          else {
              state = MarkAction.DEFAULT;
          }
      });
      
      return {id, code, language, user, marks, comments, state} as Snippet;
    });
}

export {parseSnippets}