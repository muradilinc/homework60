import Message from '../Message/Message';
import Form from '../../Form/Form';

const ChatWindow = () => {
  return (
      <div className="container mx-auto my-5 relative">
        <div className="pb-[120px] rounded h-[700px] bg-gray-200 overflow-auto">
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <Message/>
          <div className="absolute bg-gray-200 bottom-0 w-full">
            <Form/>
          </div>
        </div>
      </div>
  );
};

export default ChatWindow;