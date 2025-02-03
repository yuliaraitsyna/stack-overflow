import styles from './InfoModal.module.css';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { InfoModalProps } from "./InfoModal.types";
import { Alert, Collapse } from "@mui/material";

const InfoModal: React.FC<InfoModalProps> = ({ message, type, open, onClose }) => {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
                onClose?.();
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setVisible(false);
        }
    }, [open, onClose]);

    return createPortal(
        <Collapse in={visible} timeout={0}>
            <Alert severity={type} className={styles.alert}>
                {message}
            </Alert>
        </Collapse>,
        document.body
    );
}

export { InfoModal };
