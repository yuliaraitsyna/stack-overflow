import styles from './QuestionList.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useGetQuestionsQuery } from "../../app/redux/api/questionsApi/questionsApi";
import { Loading } from "../Loading/Loading";
import { useEffect } from "react";
import { setQuestions } from "../../app/redux/slices/questionsSlice/questionsSlice";
import { Question } from "../../features/Question/Question";
import {v4 as uuidv4} from 'uuid';
import { Box } from "@mui/material";
import { userSelector } from '../../app/redux/selectors/authSelectors';
import { questionsSelector } from '../../app/redux/selectors/questionsSelectors';

const QuestionList = () => {
    const questions = useSelector(questionsSelector);
    const user = useSelector(userSelector);

    const {data: fetchedQuestions, isLoading} = useGetQuestionsQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if(fetchedQuestions) {
            dispatch(setQuestions(fetchedQuestions));
        }
    }, [fetchedQuestions, dispatch])
    return (
        <>
            {
                isLoading
                ?
                <Loading />
                :
                <Box className={styles.list} >
                    {questions.map(question => <Question key={uuidv4()} question={question} isOwned={question.user.id === (user && user.id)} />)}
                </Box>
            }
        </>
    )
}

export { QuestionList };