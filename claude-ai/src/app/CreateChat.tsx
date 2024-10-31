"use client";
import { client } from "@/client";
import { Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import React from "react";
import { ConversationsContext } from "./ConversationsProvider";

export const CreateChat = () => {
  const router = useRouter();
  const { createConversation } = React.useContext(ConversationsContext);

  const handleClick = async () => {
    const conversation = await createConversation();
    if (conversation) {
      router.push(`/chat/${conversation.id}`);
    }
    // client.conversations.chat.create().then((res) => {
    //   if (res.data?.id) {
    //     router.push(`/chat/${res.data.id}`);
    //   }
    // });
  };
  return <Button onClick={handleClick}>Create chat</Button>;
};
