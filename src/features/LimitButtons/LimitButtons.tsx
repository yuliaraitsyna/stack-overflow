import styles from './LimitButtons.module.css';

import { Button, ButtonGroup } from "@mui/material";
import { useState, MouseEvent, useEffect } from "react"
import { LimitButtonsProps } from "./LimitButtons.types";
import { LIMITS } from "../../app/redux/slices/snippetsSlice/snippetsSlice.types";
import { v4 as uuidv4 } from 'uuid'

const LimitButtons: FC<LimitButtonsProps> = ({onLimitChange}) => {
    const [pagesLimit, setPagesLimit] = useState(LIMITS[0]);

    useEffect(() => {
        onLimitChange(pagesLimit);
    }, [pagesLimit, onLimitChange])

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        setPagesLimit(Number(target.textContent));
    }

    return (
        <ButtonGroup  className={styles.limitButtons}>
            {LIMITS.map(limit => <Button key={uuidv4()} onClick={handleClick} variant={limit === pagesLimit ? 'contained' : 'outlined'}>{limit}</Button>)}
        </ButtonGroup>
    )

}

export {LimitButtons}