import { useEffect, useState } from 'react';

import { getAvailableTypes } from '@/services/graphqlApi';
import type { ITypeRef } from '@/types';

import { TypeDescription } from './TypeDescription';
import { TypeList } from './TypeList';

interface IProps {
  url: string;
}

export function Documentation({ url }: IProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [explorer, setExplorer] = useState<ITypeRef[]>([]);
  const [availableTypes, setAvailableTypes] = useState<ITypeRef[]>([]);

  useEffect(() => {
    const getSchemaFromApi = async () => {
      if (!url) return;
      try {
        setIsLoading(true);
        const types = await getAvailableTypes(url);
        setAvailableTypes(types);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getSchemaFromApi();
  }, [url]);

  const onSelectType = (type: ITypeRef) => {
    setExplorer([...explorer, type]);
  };

  const getCurrentItem = () => {
    return explorer[explorer.length - 1];
  };

  const goStepBack = () => {
    setExplorer(explorer.slice(0, -1));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {explorer.length === 0 ? (
        <TypeList list={availableTypes} onSelectType={onSelectType} />
      ) : (
        <>
          <button onClick={goStepBack}>Back</button>
          <TypeDescription type={getCurrentItem()} onSelectType={onSelectType} />
        </>
      )}
    </div>
  );
}
