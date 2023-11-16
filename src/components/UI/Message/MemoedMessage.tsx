import React from 'react';
import {MessageItem} from '../../../types';
import {parseDate} from '../../../utils/dateParser';

interface Props {
  message: MessageItem;
}

const MemoedMessage: React.FC<Props> = React.memo(function Message({message}) {
  const colors = ['ff595e', 'ffca3a', '8ac926', '1982c4', '6a4c93'];
  const textColors = {color: `#${colors[Math.floor(Math.random() * colors.length)]}`};

  return (
    <div className="relative">
      <div className="bg-white relative inline-block rounded my-3 mx-2 p-4">
        <h3 style={textColors} className="my-0.5">{message.author}</h3>
        <div className="flex justify-between">
          <p className="max-w-[85%]">{message.message}</p>
          <div className="ml-3 self-end bottom-0 text-gray-400 font-light">{parseDate(message.datetime)}</div>
        </div>
        <div className="left-[2px] bottom-[13px] absolute transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.message !== nextProps.message;
});

export default MemoedMessage;