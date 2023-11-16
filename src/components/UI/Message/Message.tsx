const Message = () => {
  const colors = ['ff595e', 'ffca3a', '8ac926', '1982c4', '6a4c93'];
  const textColors = {color: `#${colors[Math.floor(Math.random() * colors.length)]}`};

  return (
    <div className="bg-white relative max-w-[80%] rounded my-3 ml-2 p-4">
      <h3 style={textColors} className="my-0.5">Author</h3>
      <p className="pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dicta error eveniet ipsam neque, provident quidem rem velit. Deserunt dolores earum facere hic iusto omnis perferendis quaerat quia sint tempore. Ad consequatur deserunt et fugit ipsam ipsum magni maiores neque numquam odio officiis, optio quis quod saepe sed similique suscipit! Animi blanditiis debitis delectus excepturi expedita, fugit maxime qui? Alias architecto at, culpa deleniti dicta dolore eos error expedita illo impedit incidunt, inventore mollitia nam non numquam omnis porro, quisquam ratione sapiente vel. Beatae, blanditiis delectus deleniti doloremque earum necessitatibus optio perspiciatis, placeat ratione tempora totam vero voluptatum? Accusamus cum eveniet ex facere fuga labore molestiae tempora temporibus vero voluptate?</p>
      <div className="right-[8px] absolute bottom-[10px] text-gray-400 font-light">2020-03-12</div>
      <div className="left-[2px] bottom-[13px] absolute transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white"></div>
    </div>
  );
};

export default Message;