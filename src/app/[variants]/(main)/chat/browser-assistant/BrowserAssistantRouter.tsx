'use client';

import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';

import MainBrowserAssistantPage from './components/MainBrowserAssistantPage';

const BrowserAssistantRouter = memo(() => {
  const mobile = useMediaQuery({ maxWidth: 768 });

  return <MainBrowserAssistantPage mobile={mobile} />;
});

BrowserAssistantRouter.displayName = 'BrowserAssistantRouter';

export default BrowserAssistantRouter;
