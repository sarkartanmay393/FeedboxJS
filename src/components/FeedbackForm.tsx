'use client';

import React from 'react';
import { Input, Select, Form } from 'antd';
import type { FeedbackFormProps } from '../types';

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  placeholder = 'Enter your feedback...',
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-4 p-4 ${className}`}>
      <Form.Item
        required
        name="feedback_type"
        label="Select feedback type: "
        rules={[{ required: true, message: 'Please select an option' }]}
      >
        <Select defaultValue="feedback_or_suggestion">
          <Select.Option value="feedback_or_suggestion">Feedback/Suggestion</Select.Option>
          <Select.Option value="new_feature">New Feature</Select.Option>
          <Select.Option value="bug_report">Bug Report</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Type email" name="email">
        <Input
          type="email"
          placeholder="Your email (optional)"
        />
      </Form.Item>

      <Form.Item
        required
        label="Type feedback"
        name="message"
        rules={[{ required: true, message: 'Please enter your feedback' }]}
      >
        <Input.TextArea
          required
          placeholder={placeholder}
          rows={4}
        />
      </Form.Item>
    </div>
  );
};
