import {Chats} from '@phosphor-icons/react';

const Header = () => {
  return (
    <div className="bg-black p-5">
      <div className="container mx-auto">
        <div className="text-white flex justify-center">
          <Chats className="mr-5" size={32}/>
          <h3 className="text-3xl">Chat App</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;