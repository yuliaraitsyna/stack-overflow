import styles from './ConfirmModal.module.css';

import { FC } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ConfirmModalProps } from "./ConfirmModal.types";
import { createPortal } from "react-dom";
import { Box, Button, Typography } from '@mui/material';

const ConfirmModal: FC<ConfirmModalProps> = ({message, onConfirm, onClose, open}) => {
    return (
        <>
            {
                open && createPortal(
                    <>
                        <div className={styles.overlay} onClick={onClose}></div>
                        <Box className={styles.modal}>
                            <Typography variant='h6'>{message}</Typography>
                            <CloseIcon className={styles.closeButton} onClick={onClose} />
                            <Box className={styles.buttons}>
                                <Button variant='contained' onClick={onClose}>Cancel</Button>
                                <Button variant='contained' onClick={onConfirm}>OK</Button>
                            </Box>
                        </Box>
                    </>,
                    document.body
                )
            }
        </>
    )
}

export { ConfirmModal };