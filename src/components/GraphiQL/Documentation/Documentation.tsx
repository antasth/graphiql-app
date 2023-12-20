import { useEffect, useState } from 'react';

import { LeftOutlined } from '@ant-design/icons';
import { Button, Flex, Space } from 'antd';
import { RiHome2Line } from 'react-icons/ri';

import { Loader } from '@/components/Loader';
import { getAvailableTypes } from '@/services/graphqlApi';
import type { IGraphQLType } from '@/types';

import { TypeDescription } from './TypeDescription';
import { TypeList } from './TypeList';

interface IProps {
  readonly url: string;
}

const getTypeByName = (availableTypes: IGraphQLType[], name: string | null) => {
  if (!name) return;
  return availableTypes.find((type) => type.name === name);
};

export default function Documentation({ url }: IProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [explorer, setExplorer] = useState<IGraphQLType[]>([]);
  const [availableTypes, setAvailableTypes] = useState<IGraphQLType[]>([]);

  useEffect(() => {
    const getSchemaFromApi = async () => {
      if (!url) return;
      try {
        setIsLoading(true);
        const types = await getAvailableTypes(url);
        setAvailableTypes(types);
        setExplorer([]);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getSchemaFromApi();
  }, [url]);

  const onSelectType = (name: string | null) => {
    const type = getTypeByName(availableTypes, name);
    if (type) {
      setExplorer([...explorer, type]);
    }
  };

  const getCurrentItem = () => {
    return explorer[explorer.length - 1];
  };

  const goStepBack = () => {
    setExplorer(explorer.slice(0, -1));
  };

  const goToStart = () => {
    setExplorer([]);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Flex data-testid="documentation">
      {explorer.length === 0 ? (
        <TypeList list={availableTypes} onSelectType={onSelectType} />
      ) : (
        <Space direction="vertical" size="large">
          <Space>
            <Button icon={<LeftOutlined />} onClick={goStepBack} data-testid="btn-back">
              Back
            </Button>
            <Button icon={<RiHome2Line />} onClick={goToStart} data-testid="btn-home" />
          </Space>
          <TypeDescription type={getCurrentItem()} onSelectType={onSelectType} />
        </Space>
      )}
    </Flex>
  );
}
