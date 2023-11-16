import React from 'react';
import {parseDate} from '../../../utils/dateParser';
import {MessageItem} from '../../../types';

interface Props {
  message: MessageItem;
}
const MyMessage: React.FC<Props> = ({message}) => {
  return (
    <div className="flex justify-end relative">
      <div className="bg-white relative inline-block rounded my-3 mx-2 p-4">
        <h3 className="my-0.5">{message.author}</h3>
        <div className="flex justify-between">
          <p className="max-w-[85%]">{message.message}</p>
          <div className="ml-3 self-end bottom-0 text-gray-400 font-light">{parseDate(message.datetime)}</div>
        </div>
        <div className="right-[-15px] bottom-[13px] absolute transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
      </div>
    </div>
  );
};

export default MyMessage;