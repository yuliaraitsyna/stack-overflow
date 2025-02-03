export interface ConfirmModalProps {
    message: string;
    onConfirm: () => void;
    open: boolean;
    onClose: () => void;
}