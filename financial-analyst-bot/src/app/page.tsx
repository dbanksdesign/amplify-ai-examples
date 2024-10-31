"use client";

import { useAIConversation } from "@/client";
import { AIConversation } from "@aws-amplify/ui-react-ai";

export default function Home() {
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation("chat");
  const props = { messages, isLoading, handleSendMessage };
  return <AIConversation {...props} />;
}
