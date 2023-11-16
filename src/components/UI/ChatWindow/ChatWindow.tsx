import React, {useEffect} from 'react';
import MemoedMessage from '../Message/MemoedMessage';
import Form from '../../Form/Form';
import {MessageItem} from '../../../types';
import MyMessage from '../MyMessage/MyMessage';

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
      <div id="chat-container" className="pb-[90px] flex-col rounded h-[800px] bg-gray-200 scroll-container">
        <div className="flex flex-col">
          {
            messages.length !== 0 && localStorage.getItem('user') ?
              messages.map(message => {
                if(JSON.parse(localStorage.getItem('user') || '') === message.author){
                  return <MyMessage message={message}/>;
                }else {
                  return <MemoedMessage key={message._id} message={message}/>;
                }
              })
              :
              null
          }
        </div>
        <div className="absolute bg-gray-200 bottom-0 w-full rounded">
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