'use client';

import { memo } from 'react';

import WorkspaceLayout from './WorkspaceLayout';

interface MainBrowserAssistantPageProps {
  mobile?: boolean;
}

const MainBrowserAssistantPage = memo<MainBrowserAssistantPageProps>(({ mobile }) => {
  return <WorkspaceLayout mobile={mobile} />;
});

MainBrowserAssistantPage.displayName = 'MainBrowserAssistantPage';

export default MainBrowserAssistantPage;
