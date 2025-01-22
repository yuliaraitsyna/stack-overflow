import { Typography } from "@mui/material";
import { UserStatisticProps } from "./UserStatisticProps";

const UserStatistics: React.FC<UserStatisticProps> = ({statistic}) => {
    return (
        <>
            {
                statistic
                ?
                <>
                    <Typography variant="caption">Rating: {statistic.rating.toFixed(1)} </Typography>
                    <Typography variant="caption">Snippets: {statistic.snippetsCount}</Typography>
                    <Typography variant="caption">Comments:{statistic.commentsCount} </Typography>
                    <Typography variant="caption">Likes: {statistic.likesCount}</Typography>
                    <Typography variant="caption">Dislikes: {statistic.dislikesCount}</Typography>
                    <Typography variant="caption">Questions: {statistic.questionsCount}</Typography>
                    <Typography variant="caption">Corrects Answers: {statistic.correctAnswersCount}</Typography>
                    <Typography variant="caption">Regular Answers: {statistic.regularAnswersCount}</Typography>
                </>
                :
                <Typography variant="caption">No statistics available</Typography>
            }
        </>
    )
}

export { UserStatistics };