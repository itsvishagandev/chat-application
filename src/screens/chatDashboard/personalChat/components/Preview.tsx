import { MessageBubble } from "../../../../components";
import { IProfile } from "../PersonalChat";

export interface IMessage {
  text: string;
  sentBy: number;
  date: string;
}
interface IPreview {
  profile: IProfile | null;
  messages: IMessage[];
}

const Preview = ({ profile, messages }: IPreview) => {
  return (
    <div className="flex-1 px-5 py-8 overflow-y-auto">
      {!!messages?.length && profile && (
        <div className="flex flex-col gap-5">
          {messages.map((message, i) => (
            <MessageBubble
              picture={profile?.picture}
              message={message}
              key={i}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Preview;
