import { MessageBubble } from "../../../../@components";

const Preview = () => {
  return (
    <div className="flex-1 px-5 py-8 overflow-y-auto">
      <div className="flex flex-col gap-5">
        {Array(7)
          .fill("")
          .map((_, i) => (
            <MessageBubble key={i} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
