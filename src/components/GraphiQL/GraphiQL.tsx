import { Suspense, lazy, useState } from 'react';

import { App, AutoComplete, Button, Col, Drawer, Flex, Row } from 'antd';
import { SiGraphql } from 'react-icons/si';

import { Loader } from '@/components/Loader';
import { DEFAULT_ENDPOINTS } from '@/constants/endpoints';
import { useTranslate } from '@/context/TranslateContext';
import { getData } from '@/services/graphqlApi';

import { RequestEditor } from './RequestEditor';
import { ResponseViewer } from './ResponseViewer';
import { Sidebar } from './Sidebar';

import styles from './GraphiQL.module.scss';

const Documentation = lazy(() =>
  import('./Documentation').then((module) => ({
    default: module.Documentation,
  }))
);

export function GraphiQL() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [response, setResponse] = useState('');
  const [isOpenDocs, setIsOpenDocs] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslate();
  const { notification } = App.useApp();

  const showDocumentation = () => {
    if (!isUrlValid()) {
      return;
    }
    setIsOpenDocs(!isOpenDocs);
  };

  const prettifying = () => {
    console.log('Prettifying...');
    setQuery('');
  };

  const isUrlValid = () => {
    if (!url) {
      notification.error({
        message: t('Errors.RequestIsNotAvailable', 'Request is not available'),
        description: t('Errors.UrlIsEmpty', 'The URL cannot be empty'),
      });
      return false;
    }
    return true;
  };

  const isQueryValid = () => {
    if (!query) {
      notification.error({
        message: t('Errors.RequestIsNotAvailable', 'Request is not available'),
        description: t('Errors.QueryIsEmpty', 'The query cannot be empty'),
      });
      return false;
    }
    return true;
  };

  const executeQuery = async () => {
    if (!isUrlValid() || !isQueryValid()) {
      return;
    }
    try {
      setIsLoading(true);
      const data = await getData(url, { query, variables, headers });
      setResponse(data);
    } catch (error) {
      notification.error({
        message: t('Errors.UnexpectedError', 'Unexpected error'),
        description: t('Errors.FailedGetData', 'Failed to get data from the selected API'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex vertical className={styles.container} data-testid="graphql-editor">
      <Flex>
        <AutoComplete
          size="large"
          placeholder={t('GraphQL.EnterURL', 'Enter URL')}
          className={styles.input}
          options={DEFAULT_ENDPOINTS}
          filterOption={(inputValue, option) => option!.value.includes(inputValue)}
          value={url}
          onChange={setUrl}
          data-testid="url-input"
        />
        <Button
          size="large"
          icon={<SiGraphql />}
          onClick={executeQuery}
          loading={isLoading}
          data-testid="btn-send-request"
        >
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
        <Suspense fallback={<Loader />}>
          <Documentation url={url} isOpen={isOpenDocs} />
        </Suspense>
      </Drawer>
    </Flex>
  );
}
