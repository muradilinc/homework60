import Header from '../../components/UI/Header/Header';
import ChatWindow from '../../components/UI/ChatWindow/ChatWindow';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constanst/constanst';
import {MessageItem} from '../../types';

const App = () => {
  const [messages, setMessages] = useState<MessageItem[]>([]);

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setMessages(response.data);
    });
  }, []);

  if (messages.length === 0) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <Header/>
      <ChatWindow messages={messages}/>
    </>
  );
};

export default App;