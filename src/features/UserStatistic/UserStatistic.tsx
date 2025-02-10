import styles from './UserStatistic.module.css';

import { FC } from 'react';
import { Box, List, ListItem, Typography } from "@mui/material";
import { UserStatisticProps } from "./UserStatistic.types";
import { Loading } from '../../widgets/Loading/Loading';
import { useTranslation } from 'react-i18next';

const UserStatistics: FC<UserStatisticProps> = ({statistic}) => {
    const {t} = useTranslation();
    
    return (
        <>
            {
                statistic
                ?
                <Box className={styles.statistic}>
                    <List>
                        <ListItem>
                            <Typography variant='caption'>{t('rating')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.rating.toFixed(1)} </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('snippets')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.snippetsCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('comments')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.commentsCount} </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('likes')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.likesCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('dislikes')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.dislikesCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('questions')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.questionsCount}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant='caption'>{t('correctAnswers')}: </Typography>
                            <Typography variant="caption" className={styles.amount}>{statistic.correctAnswersCount}</Typography>
                        </ListItem>
                        <ListItem> 
                            <Typography variant='caption'>{t('regularAnswers')}: </Typography>
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