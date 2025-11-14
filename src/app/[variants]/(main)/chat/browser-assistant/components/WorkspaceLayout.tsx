import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import ConversationArea from '../../components/ConversationArea';
import BrowserPanel from './BrowserPanel';

interface WorkspaceLayoutProps {
  mobile?: boolean;
}

const DesktopWorkspace = memo(() => {
  return (
    <Flexbox
      height={'calc(100% - 49px)'}
      horizontal
      style={{ overflow: 'hidden', position: 'relative' }}
      width={'100%'}
    >
      <Flexbox flex={1} height={'100%'} style={{ overflow: 'hidden', position: 'relative' }}>
        <BrowserPanel mobile={false} />
      </Flexbox>
      <Flexbox height={'100%'} style={{ overflow: 'hidden', position: 'relative' }} width={400}>
        <ConversationArea mobile={false} />
      </Flexbox>
    </Flexbox>
  );
});

DesktopWorkspace.displayName = 'DesktopWorkspace';

const MobileWorkspace = memo(() => {
  // const { styles } = useStyles();

  return (
    <MobileContentLayout>
      <Flexbox height={'100%'} style={{ overflow: 'hidden' }} width={'100%'}>
        <BrowserPanel mobile />
        <Flexbox flex={1} style={{ overflow: 'hidden' }}>
          <ConversationArea mobile />
        </Flexbox>
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
