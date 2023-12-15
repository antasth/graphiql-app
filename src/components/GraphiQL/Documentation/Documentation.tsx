import { getSchema } from '@/services/graphqlApi';
import { useEffect, useState } from 'react';

interface IProps {
  url: string;
}

export function Documentation({ url }: IProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSchemaFromApi = async () => {
      if (!url) return;
      try {
        setIsLoading(true);
        const schema = await getSchema(url);
        const availableTypes = schema.types;
        console.log(availableTypes);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getSchemaFromApi();
  }, [url]);

  return <>{isLoading ? <div>Loading...</div> : <div>All Schema Types...</div>}</>;
}
