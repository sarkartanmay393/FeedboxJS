import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from './Modal';
import { FeedbackForm, FeedbackData } from './FeedbackForm';

type FeedbackButtonProps = {
  buttonText?: string;
  modalTitle?: string;
  onSend: (feedback: FeedbackData) => void;
  placeholder?: string;
  buttonClassName?: string;
  buttonStyles?: React.CSSProperties;
};

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  buttonText = 'Give Feedback',
  modalTitle = 'Feedback',
  onSend,
  placeholder,
  buttonClassName,
  buttonStyles,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Button onClick={handleOpenModal} className={buttonClassName} style={buttonStyles}>
        {buttonText}
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={modalTitle}>
        <FeedbackForm onSend={onSend} placeholder={placeholder} />
      </Modal>
    </>
  );
};
