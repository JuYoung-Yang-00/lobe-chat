'use client';

import { Input as AntdInput } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    height: 100%;
    display: flex;
    flex-direction: column;
  `,
  inputArea: css`
    padding: 16px;
    border-top: 1px solid ${token.colorBorderSecondary};
  `,
  messageList: css`
    flex: 1;
    overflow-y: auto;
    padding: 16px;
  `,
  placeholder: css`
    color: ${token.colorTextSecondary};
    text-align: center;
    padding: 48px 24px;
  `,
}));

interface BrowserConversationAreaProps {
  mobile?: boolean;
}

const BrowserConversationArea = memo<BrowserConversationAreaProps>(() => {
  const { styles } = useStyles();

  return (
    <Flexbox className={styles.container}>
      <div className={styles.messageList}>
        <div className={styles.placeholder}>Start chatting to control the browser automation</div>
        <div className={styles.inputArea}>
          <AntdInput.TextArea
            autoSize={{ maxRows: 8, minRows: 1 }}
            placeholder="Type your message here..."
            variant="borderless"
          />
        </div>
      </div>
    </Flexbox>
  );
});

BrowserConversationArea.displayName = 'BrowserConversationArea';

export default BrowserConversationArea;
