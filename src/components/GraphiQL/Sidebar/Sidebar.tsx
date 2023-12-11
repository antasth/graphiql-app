import { Button, Flex, Tooltip } from 'antd';
import { LuPaintbrush } from 'react-icons/lu';
import { GrBook } from 'react-icons/gr';

import styles from './Sidebar.module.scss';

interface IProps {
  onShowDocumentation: () => void;
  onPrettifying: () => void;
}

export function Sidebar({ onShowDocumentation, onPrettifying }: IProps) {
  return (
    <Flex vertical gap="small" className={styles.sidebar}>
      <Tooltip title="Show documentation" placement="left">
        <Button shape="circle" size="large" icon={<GrBook />} onClick={onShowDocumentation} />
      </Tooltip>
      <Tooltip title="Prettify" placement="left">
        <Button shape="circle" size="large" icon={<LuPaintbrush />} onClick={onPrettifying} />
      </Tooltip>
    </Flex>
  );
}
