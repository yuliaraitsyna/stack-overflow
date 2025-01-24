import styles from './UserStatistic.module.css';

import { Box, Typography } from "@mui/material";
import { UserStatisticProps } from "./UserStatisticProps";
import { Loading } from '../../widgets/Loading/Loading';

const UserStatistics: React.FC<UserStatisticProps> = ({statistic}) => {
    return (
        <>
            {
                statistic
                ?
                <Box className={styles.statistic}>
                    <ul>
                        <li>
                            Rating: 
                            <Typography variant="caption">{statistic.rating.toFixed(1)} </Typography>
                        </li>
                        <li>
                            Snippets: 
                            <Typography variant="caption">{statistic.snippetsCount}</Typography>
                        </li>
                        <li>
                            Comments:
                            <Typography variant="caption">{statistic.commentsCount} </Typography>
                        </li>
                        <li>
                            Likes:
                            <Typography variant="caption">{statistic.likesCount}</Typography>
                        </li>
                        <li>
                            Dislikes: 
                            <Typography variant="caption">{statistic.dislikesCount}</Typography>
                        </li>
                        <li>
                            Questions: 
                            <Typography variant="caption">{statistic.questionsCount}</Typography>
                        </li>
                        <li>
                            Corrects Answers:
                            <Typography variant="caption">{statistic.correctAnswersCount}</Typography>
                        </li>
                        <li>
                            Regular Answers: 
                            <Typography variant="caption">{statistic.regularAnswersCount}</Typography>
                        </li>
                    </ul>
                </Box>
                :
                <Loading />
            }
        </>
    )
}

export { UserStatistics };