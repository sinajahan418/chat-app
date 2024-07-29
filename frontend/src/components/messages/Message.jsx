const Message = () => {
  return (
    <div className="container">
      <div className="message-blue">
        <p className="message-content">This is an awesome message!</p>
        <div className="message-timestamp-left">SMS 13:37</div>
      </div>

      <div className="message-orange bg-black text-white">
        <p className="message-content">
          I agree that your message is awesome! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Numquam voluptatem expedita voluptate
          ullam itaque sed eius vero et molestiae repellendus!
        </p>
        <div className="message-timestamp-right">SMS 13:37</div>
      </div>

      <div className="message-blue">
        <p className="message-content">Thanks!</p>
        <div className="message-timestamp-left">SMS 13:37</div>
      </div>
    </div>
  );
};

export default Message;
