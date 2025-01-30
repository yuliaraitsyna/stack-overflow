import styles from './InfoModal.module.css';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InfoModalProps } from "./InfoModal.types";
import { Alert, Collapse } from "@mui/material";

const InfoModal: React.FC<InfoModalProps> = ({ message, type, open }) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [open]);

    return createPortal(
        <Collapse in={visible}>
            <Alert severity={type} className={styles.alert}>
                {message}
            </Alert>
        </Collapse>,
        document.body
    );
}

export { InfoModal };
