import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/UI/Header/Header';
import ChatWindow from '../../components/UI/ChatWindow/ChatWindow';
import Modal from '../../components/UI/Modal/Modal';
import {MessageItem} from '../../types';
import {BASE_URL} from '../../constanst/constanst';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [textMessage, setTextMessage] = useState('');
  const [author, setAuthor] = useState('');
  const [lastMessage, setLastMessage] = useState<MessageItem>();


  const textMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value);
  };

  const changeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const closeModal = (event: React.FormEvent) => {
    event.preventDefault();
    if (!localStorage.getItem('user')) {
      localStorage.setItem('user', JSON.stringify(author));
    }
    setShowModal(false);
  };

  const fetchMessage = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setMessages(response.data);
      setLastMessage(response.data[response.data.length - 1]);
    } catch (error) {
      alert('Error! ' + error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setShowModal(false);
    }
    void fetchMessage();
  }, []);



  useEffect(() => {
    const getLastMessage = async () => {
      try {
        await axios.get(BASE_URL + `?datetime=${lastMessage?.datetime}`);
      } catch (error) {
        alert('Error! ' + error);
      }
    };

    const updateLastMessage = setInterval(() => {
      if (messages.length !== 0) {
        void getLastMessage();
      }
    }, 3000);

    return () => clearInterval(updateLastMessage);
  }, [lastMessage?.datetime, messages]);


  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new URLSearchParams();
    data.set('message', textMessage);
    data.set('author', author ? author : JSON.parse(localStorage.getItem('user') || ''));

    try {
      await axios.post(BASE_URL, data).then(() => setTextMessage(''));
    } catch (error) {
      alert('Error! ' + error);
    }
    await fetchMessage();
  };

  return (
    <>
      <Modal
        show={showModal}
        title="Author"
      >
        <form onSubmit={closeModal}>
          <div>
            <label htmlFor="author">Please enter your name</label>
            <input
              className="w-full outline-0 p-2 border rounded mt-2 border-black"
              id="author"
              value={author}
              onChange={changeAuthor}
              type="text"
              placeholder="Jon Doe"
              required
            />
          </div>
          <div className="flex items-center justify-end mt-5">
            <button
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
      <Header/>
      <ChatWindow
        textMessage={textMessage}
        changeText={textMessageChange}
        messages={messages}
        sendMessage={sendMessage}
      />
    </>
  );
};

export default App;