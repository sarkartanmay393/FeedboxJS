'use client';

import React, { useState } from 'react';
import { Button, Modal, Form, message, ConfigProvider } from 'antd';
import { FeedbackForm } from './FeedbackForm';
import type { FeedbackButtonProps, FeedbackData } from '../types';

export const FeedbackButton: React.FC<FeedbackButtonProps> = ({
  buttonText = 'Give Feedback',
  modalTitle = 'Feedback',
  onSend,
  placeholder,
  buttonClassName,
  buttonProps
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm<FeedbackData>();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleOk = () => {
    setConfirmLoading(true);
    const feedbackData = form.getFieldsValue();
    if (feedbackData.message?.length === 0 || feedbackData.feedback_type?.length === 0) {
      setConfirmLoading(false);
      message.error('Please fill in all the required fields');
      return;
    }
    onSend(feedbackData);
    setConfirmLoading(false);
    handleCloseModal();
  }

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#0070f3' } }}>
      <Button onClick={handleOpenModal} className={buttonClassName} {...buttonProps}>
        {buttonText}
      </Button>
      <Modal
        width="786px"
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCloseModal}
        onClose={handleCloseModal}
        confirmLoading={confirmLoading}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <Form
          form={form}
          name="feedback"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{
            email: '',
            message: '',
            feedback_type: 'feedback_or_suggestion',
         }}
        >
          <FeedbackForm placeholder={placeholder} />
        </Form>
      </Modal>
    </ConfigProvider>
  );
};
