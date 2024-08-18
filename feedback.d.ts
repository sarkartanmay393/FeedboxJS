declare module 'feedboxjs' {
    export type ModalProps = {
        isOpen: boolean;
        onClose: () => void;
        title?: string;
        children: React.ReactNode;
    };

    export type FeedbackData = {
        message: string;
        email?: string;
    };

    export type FeedbackFormProps = {
        onSend: (feedback: FeedbackData) => void;
        placeholder?: string;
        buttonText?: string;
        className?: string;
        styles?: React.CSSProperties;
    };
    export type FeedbackButtonProps = {
        buttonText?: string;
        modalTitle?: string;
        onSend: (feedback: FeedbackData) => void;
        placeholder?: string;
        buttonClassName?: string;
        buttonStyles?: React.CSSProperties;
    };

    export function FeedbackButton(props: FeedbackButtonProps): JSX.Element;
    export function FeedbackForm(props: FeedbackFormProps): JSX.Element;
    export function Modal(props: ModalProps): JSX.Element;
}
