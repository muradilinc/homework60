import React, {useEffect} from 'react';
import MemoedMessage from '../Message/MemoedMessage';
import Form from '../../Form/Form';
import {MessageItem} from '../../../types';

interface Props {
  messages: MessageItem[];
  textMessage: string;
  changeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sendMessage: (event: React.FormEvent) => void;
}

const ChatWindow: React.FC<Props> = ({messages, changeText, textMessage, sendMessage}) => {
  useEffect(() => {
    const chatContainer = document.getElementById('chat-container') as HTMLElement;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="container mx-auto my-5 relative">
      <div id="chat-container" className="pb-[90px] flex-col rounded h-[700px] bg-gray-200 scroll-container">
        <div className="flex flex-col">
          {
            messages.length !== 0 ?
              messages.map(message => <MemoedMessage key={message._id} message={message}/>)
              :
              null
          }
        </div>
        <div className="absolute bg-gray-200 bottom-0 w-full">
          <Form
            changeText={changeText}
            textMessage={textMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;