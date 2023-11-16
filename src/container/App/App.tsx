import Header from '../../components/UI/Header/Header';
import ChatWindow from '../../components/UI/ChatWindow/ChatWindow';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../constanst/constanst';
import {MessageItem} from '../../types';
import Modal from '../../components/UI/Modal/Modal';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [messages, setMessages] = useState<MessageItem[]>([]);
  const [message, setMessage] = useState({});
  const [textMessage, setTextMessage] = useState('');
  const [author, setAuthor] = useState('');


  const textMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextMessage(event.target.value);
  };

  const changeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const createUserId = () => {
    const id = Math.random();
    localStorage.setItem('user', JSON.stringify(id));
  };

  const closeModal = (event: React.FormEvent) => {
    event.preventDefault();
    setShowModal(false);
  };

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      createUserId();
    }
    axios.get(BASE_URL).then((response) => {
      setMessages(response.data);
    });
  }, []);

  // const sendMessage = () => {
  //   setMessage(prevState => ({
  //     ...prevState,
  //
  //   }))
  // };

  if (messages.length === 0) {
    return (
      <p>Loading...</p>
    );
  }


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
      <ChatWindow textMessage={textMessage} changeText={textMessageChange} messages={messages}/>
    </>
  );
};

export default App;