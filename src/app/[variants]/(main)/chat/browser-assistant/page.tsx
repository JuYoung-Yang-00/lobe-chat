'use client';

import dynamic from 'next/dynamic';

import { BrandTextLoading } from '@/components/Loading';

const BrowserAssistantRouter = dynamic(() => import('./BrowserAssistantRouter'), {
  loading: BrandTextLoading,
  ssr: false,
});

export default BrowserAssistantRouter;
