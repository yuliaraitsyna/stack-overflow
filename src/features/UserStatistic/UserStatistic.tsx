import styles from './UserStatistic.module.css';

import { Box, List, ListItem, Typography } from "@mui/material";
import { UserStatisticProps } from "./UserStatisticProps";
import { Loading } from '../../widgets/Loading/Loading';

const UserStatistics: React.FC<UserStatisticProps> = ({statistic}) => {
    return (
        <>
            {
                statistic
                ?
                <Box className={styles.statistic}>
                    <List>
                        <ListItem>
                            <Typography variant='caption'>Rating: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.rating.toFixed(1)} </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Snippets:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.snippetsCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Comments:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.commentsCount} </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Likes:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.likesCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Dislikes:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.dislikesCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Questions:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.questionsCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>Corrects Answers:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.correctAnswersCount}</Typography>
                        </ListItem>
                        <ListItem> 
                            <Typography variant='caption'>Regular Answers:</Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.regularAnswersCount}</Typography>
                        </ListItem>
                    </List>
                </Box>
                :
                <Loading />
            }
        </>
    )
}

export { UserStatistics };