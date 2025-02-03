export type ModalType = "error" | "info" | "success" | "warning";

export interface InfoModalProps {
    message: string;
    type: ModalType;
    open: boolean;
    onClose: () => void;
}