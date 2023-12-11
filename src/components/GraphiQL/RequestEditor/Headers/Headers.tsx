import { ChangeEvent } from 'react';
import { TextArea } from '@/components/GraphiQL/TextArea';

interface IProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function Headers({ value, onChange }: IProps) {
  return (
    <TextArea
      style={{ height: '100%', resize: 'none', border: 'none', marginBottom: '8px' }}
      placeholder="# Write your headers here"
      value={value}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
    />
  );
}