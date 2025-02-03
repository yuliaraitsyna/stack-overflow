import styles from './InfoModal.module.css';

import { createPortal } from "react-dom";
import { InfoModalProps } from "./InfoModal.types";
import { Alert, Collapse } from "@mui/material";

const InfoModal: React.FC<InfoModalProps> = ({message, type, open}) => {
    return createPortal(
        <Collapse in={open}>
            <Alert severity={type} className={styles.alert}>
                {message}
            </Alert>
        </Collapse>,
        document.body
    )
}

export { InfoModal };