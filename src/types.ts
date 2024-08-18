import { type ButtonProps } from "antd";

export type FeedbackButtonProps = {
  buttonText?: string;
  modalTitle?: string;
  onSend: (feedback: FeedbackData) => void;
  placeholder?: string;
  buttonClassName?: string;
  buttonProps?: ButtonProps;
};

export type FeedbackData = {
  feedback_type: string;
  message: string;
  email?: string;
};

export type FeedbackFormProps = {
  placeholder?: string;
  className?: string;
};