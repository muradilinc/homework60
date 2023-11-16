import Message from '../Message/Message';
import Form from '../../Form/Form';
import React from 'react';
import {MessageItem} from '../../../types';

interface Props {
  messages: MessageItem[]
}

const ChatWindow: React.FC<Props> = ({messages}) => {
  return (
      <div className="container mx-auto my-5 relative">
        <div className="pb-[120px] rounded h-[700px] bg-gray-200 scroll-container">
          {
            messages.map(message => <Message key={message._id} message={message}/>)
          }
          <div className="absolute bg-gray-200 bottom-0 w-full">
            <Form/>
          </div>
        </div>
      </div>
  );
};

export default ChatWindow;