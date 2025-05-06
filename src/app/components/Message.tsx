import IMessage from "../interfaces/IMessage";

interface MessageProps {
  message: IMessage;
}

const Message = ({ message }: MessageProps) => {
  return (
    <div className="bg-white border shadow-sm rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">ID: #{message.id}</span>
        <span className="text-sm font-semibold text-indigo-600">
          {message.user}
        </span>
      </div>
      <p className="text-gray-700 text-base">{message.text}</p>
    </div>
  );
};

export default Message;
