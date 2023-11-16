import React from 'react';
import {MessageItem} from '../../../types';
import {parseDate} from '../../../utils/dateParser';

interface Props {
  message: MessageItem
}

const Message: React.FC<Props> = ({message}) => {
  const colors = ['ff595e', 'ffca3a', '8ac926', '1982c4', '6a4c93'];
  const textColors = {color: `#${colors[Math.floor(Math.random() * colors.length)]}`};

  return (
    <div className="bg-white relative max-w-[80%] rounded my-3 ml-2 p-4">
      <h3 style={textColors} className="my-0.5">{message.author}</h3>
      <p className="pb-5">{message.message}</p>
      <div className="right-[8px] absolute bottom-[10px] text-gray-400 font-light">{parseDate(message.datetime)}</div>
      <div className="left-[2px] bottom-[13px] absolute transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
    </div>
  );
};

export default Message;