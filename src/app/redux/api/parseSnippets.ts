import { Snippet } from "../../../entities/Snippet/Snippet";
import { User } from "../../../entities/User/User";
import { ApiResponse, SnippetResponse } from "./parseSnippets.types";

function parseSnippets(apiResponse: ApiResponse): Snippet[] {
    const rawData = apiResponse.data?.data || [];
  
    return rawData.map((item: SnippetResponse) => {
      const id = Number(item.id);
      const code = item.code;
      const language = item.language;
      const user = new User(item.user?.id, item.user?.username, item.user?.role);

      let likes = 0;
      let dislikes = 0;
      let comments = 0;

      item.marks.forEach(mark => {
        switch(mark.type) {
          case 'like':
            likes++;
            break;
          case 'dislike': 
            dislikes++;
            break;
          case 'comment':
            comments++;
            break;
          default:
            throw new Error(`Mark type ${mark.type} doesn't exist.`);
        }
      });
      
      return new Snippet(id, code, language, user, likes, dislikes, comments);
    });
}

export {parseSnippets}