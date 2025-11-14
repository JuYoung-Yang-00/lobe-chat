import Link from 'next/link';
import { memo } from 'react';

import ListItem from '../ListItem';

const BROWSER_ASSISTANT_ID = 'browser-assistant';

const BrowserAssistant = memo(() => {
  return (
    <Link aria-label="AI Browser" href="/browser-assistant">
      <ListItem
        active={false}
        avatar="🤖"
        key={BROWSER_ASSISTANT_ID}
        styles={{
          container: {
            gap: 12,
          },
          content: {
            gap: 6,
            maskImage: `linear-gradient(90deg, #000 90%, transparent)`,
          },
        }}
        title="AI Browser"
      />
    </Link>
  );
});

export default BrowserAssistant;
