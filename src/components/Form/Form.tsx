import {PaperPlaneTilt} from '@phosphor-icons/react';

const Form = () => {
  return (
    <form className="flex items-center justify-between my-5 mx-3">
      <div className="w-[95%]">
        <input
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