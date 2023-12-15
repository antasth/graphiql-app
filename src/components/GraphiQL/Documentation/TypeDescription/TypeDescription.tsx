import type { ITypeRef } from '@/types';

interface IProps {
  type: ITypeRef;
  onSelectType: (type: ITypeRef) => void;
}

export function TypeDescription({ type }: IProps) {
  return (
    <div>
      <div>{type.name}</div>
      <div>{type.description}</div>
      <ul>
        {type.fields?.map((field) => (
          <li key={field.name}>
            {field.name}: {field.type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
