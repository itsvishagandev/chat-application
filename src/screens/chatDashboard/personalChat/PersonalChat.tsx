import { Header, MessageBar, Preview } from "./components";

const PersonalChat = () => {
  return (
    <main className="flex-1 flex flex-col bg-secondary h-screen border-r border-l border-lightBlue-200 overflow-hidden">
      <Header />
      <Preview />
      <MessageBar />
    </main>
  );
};

export default PersonalChat;
