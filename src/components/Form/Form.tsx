import React from 'react';
import {PaperPlaneTilt} from '@phosphor-icons/react';

interface Props {
  textMessage: string;
  changeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<Props> = ({textMessage, changeText}) => {
  return (
    <form className="flex items-center justify-between my-5 mx-3">
      <div className="w-[95%]">
        <input
          value={textMessage}
          onChange={changeText}
          className="w-full p-3 outline-0 rounded-2xl"
          type="text"
          placeholder="Message"
        />
      </div>
      <div className="flex justify-end">
        <button className="p-[10px] bg-violet-400 rounded-[50%] text-white">
          <PaperPlaneTilt size={32} />
        </button>
      </div>
    </form>
  );
};

export default Form;