import styles from './QuestionList.module.css';

import { useDispatch, useSelector } from "react-redux";
import { useGetQuestionsQuery } from "../../app/redux/api/questionsApi";
import { Loading } from "../Loading/Loading";
import { RootState } from "../../app/redux/store/store";
import { useEffect } from "react";
import { setQuestions } from "../../app/redux/slice/questionsSlice";
import { Question } from "../../features/Question/Question";
import {v4 as uuidv4} from 'uuid';
import { Box } from "@mui/material";

const QuestionList = () => {
    const questions = useSelector((state: RootState) => state.questions.questions);

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
                    {questions.map(question => <Question key={uuidv4()} question={question} />)}
                </Box>
            }
        </>
    )
}

export { QuestionList };