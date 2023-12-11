import { Input } from 'antd';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
import { RefAttributes } from 'react';

export function TextArea({ ...rest }: TextAreaProps & RefAttributes<TextAreaRef>) {
  return <Input.TextArea {...rest} />;
}
