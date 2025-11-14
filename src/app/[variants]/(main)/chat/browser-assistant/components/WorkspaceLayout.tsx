import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import BrowserConversationArea from './BrowserConversationArea';
import BrowserPanel from './BrowserPanel';

const useStyles = createStyles(({ css, token }) => ({
  header: css`
    padding: 12px 16px;
    border-bottom: 1px solid ${token.colorBorderSecondary};
    font-weight: 600;
    font-size: 16px;
    background: ${token.colorBgContainer};
  `,
}));

interface WorkspaceLayoutProps {
  mobile?: boolean;
}

const DesktopWorkspace = memo(() => {
  const { styles } = useStyles();

  return (
    <>
      <div className={styles.header}>Browser Assistant</div>
      <Flexbox
        height={'calc(100% - 49px)'}
        horizontal
        style={{ overflow: 'hidden', position: 'relative' }}
        width={'100%'}
      >
        <Flexbox height={'100%'} style={{ overflow: 'hidden', position: 'relative' }} width={'100%'}>
          <BrowserConversationArea mobile={false} />
        </Flexbox>
        <BrowserPanel mobile={false} />
      </Flexbox>
    </>
  );
});

DesktopWorkspace.displayName = 'DesktopWorkspace';

const MobileWorkspace = memo(() => {
  const { styles } = useStyles();

  return (
    <MobileContentLayout header={<div className={styles.header}>Browser Assistant</div>}>
      <Flexbox height={'100%'} style={{ overflow: 'hidden' }} width={'100%'}>
        <Flexbox flex={1} style={{ overflow: 'hidden' }}>
          <BrowserConversationArea mobile />
        </Flexbox>
        <BrowserPanel mobile />
      </Flexbox>
    </MobileContentLayout>
  );
});

MobileWorkspace.displayName = 'MobileWorkspace';

const WorkspaceLayout = memo<WorkspaceLayoutProps>(({ mobile }) => {
  if (mobile) {
    return <MobileWorkspace />;
  }

  return <DesktopWorkspace />;
});

WorkspaceLayout.displayName = 'WorkspaceLayout';

export default WorkspaceLayout;
