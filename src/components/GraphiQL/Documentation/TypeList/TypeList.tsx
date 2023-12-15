import type { ITypeRef } from '@/types';

interface IProps {
  list: ITypeRef[];
  onSelectType: (type: ITypeRef) => void;
}

export function TypeList({ list, onSelectType }: IProps) {
  return (
    <div>
      <h3>All Schema Types:</h3>
      <ul>
        {list.map((type) => (
          <li key={type.name} onClick={() => onSelectType(type)}>
            {type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
