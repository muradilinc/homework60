import React from 'react';
import Message from '../Message/Message';
import Form from '../../Form/Form';
import {MessageItem} from '../../../types';

interface Props {
  messages: MessageItem[];
  textMessage: string;
  changeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChatWindow: React.FC<Props> = ({messages, changeText, textMessage}) => {
  return (
      <div className="container mx-auto my-5 relative">
        <div className="pb-[120px] rounded h-[700px] bg-gray-200 scroll-container">
          {
            messages.map(message => <Message key={message._id} message={message}/>)
          }
          <div className="absolute bg-gray-200 bottom-0 w-full">
            <Form changeText={changeText} textMessage={textMessage}/>
          </div>
        </div>
      </div>
  );
};

export default ChatWindow;