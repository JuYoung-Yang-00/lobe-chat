'use client';

import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    background: ${token.colorBgContainer};
    border-left: 1px solid ${token.colorBorderSecondary};
  `,
  content: css`
    padding: 16px;
    overflow-y: auto;
  `,
  header: css`
    padding: 12px 16px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
    font-weight: 600;
    font-size: 14px;
  `,
  placeholder: css`
    color: ${token.colorTextSecondary};
    text-align: center;
    padding: 24px;
  `,
}));

interface BrowserPanelProps {
  mobile?: boolean;
}

const BrowserPanel = memo<BrowserPanelProps>(({ mobile }) => {
  const { styles } = useStyles();

  return (
    <Flexbox className={styles.container} height="100%" width={mobile ? '100%' : 400}>
      <div className={styles.header}>Browser Automation</div>
      <Flexbox className={styles.content} flex={1}>
        <div className={styles.placeholder}>
          Browser automation view will appear here when a task is running.
        </div>
      </Flexbox>
    </Flexbox>
  );
});

BrowserPanel.displayName = 'BrowserPanel';

export default BrowserPanel;
