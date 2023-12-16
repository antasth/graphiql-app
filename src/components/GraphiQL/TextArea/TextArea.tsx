import { Input } from 'antd';
import { TextAreaProps, TextAreaRef } from 'antd/es/input/TextArea';
import { RefAttributes } from 'react';

export function TextArea({ style, ...rest }: TextAreaProps & RefAttributes<TextAreaRef>) {
  const mergedStyle = {
    fontFamily: 'monospace',
    ...style,
  };
  return <Input.TextArea style={mergedStyle} {...rest} />;
}
