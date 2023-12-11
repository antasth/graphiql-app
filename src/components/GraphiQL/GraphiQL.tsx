import { Button, Col, Drawer, Flex, Input, Row } from 'antd';
import { ChangeEvent, useState } from 'react';
import { SiGraphql } from 'react-icons/si';
import { useTranslate } from '@/context/TranslateContext';
import { RequestEditor } from './RequestEditor';
import { ResponseViewer } from './ResponseViewer';
import { Sidebar } from './Sidebar';

import styles from './GraphiQL.module.scss';

export function GraphiQL() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [response, setResponse] = useState('');
  const [isOpenDocs, setIsOpenDocs] = useState(false);

  const { t } = useTranslate();

  const showDocumentation = () => {
    setIsOpenDocs((prevState) => !prevState);
  };

  const prettifying = () => {
    console.log('Prettifying...');
    setQuery('');
  };

  const executeQuery = () => {
    console.log('Execute query...', url);
    setResponse('');
  };

  return (
    <Flex vertical className={styles.container}>
      <Flex>
        <Input
          size="large"
          placeholder={t('GraphQL.EnterURL', 'Enter URL')}
          className={styles.input}
          value={url}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setUrl(event.target.value)}
        />
        <Button size="large" icon={<SiGraphql />} onClick={executeQuery}>
          {t('GraphQL.SendButton', 'Send Request')}
        </Button>
      </Flex>

      <Row style={{ height: '100%' }} gutter={[8, 8]}>
        <Col xs={24} sm={12}>
          <Flex style={{ height: '100%', position: 'relative' }}>
            <Sidebar onShowDocumentation={showDocumentation} onPrettifying={prettifying} />
            <RequestEditor
              query={query}
              onChangeQuery={setQuery}
              variables={variables}
              onChangeVariables={setVariables}
              headers={headers}
              onChangeHeaders={setHeaders}
            />
          </Flex>
        </Col>
        <Col xs={24} sm={12}>
          <ResponseViewer value={response} />
        </Col>
      </Row>

      <Drawer
        title={t('GraphQL.Documentation', 'Documentation')}
        placement="right"
        onClose={showDocumentation}
        open={isOpenDocs}
      >
        All Schema Types...
      </Drawer>
    </Flex>
  );
}
