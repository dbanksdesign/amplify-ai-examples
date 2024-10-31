"use client";
import * as React from "react";
import { AIConversation } from "@aws-amplify/ui-react-ai";
import { Card } from "@aws-amplify/ui-react";
import { client, useAIConversation } from "@/client";
import { ConversationsContext } from "@/app/ConversationsProvider";

const responseComponents = {
  WeatherCard: {
    description: "Used to display the weather in a city",
    component: ({ city }) => {
      return (
        <Card variation="outlined">
          <h3>Weather Card {city}</h3>
        </Card>
      );
    },
    // there needs to be a way for the component itself
    // to tell the chat what it rendered
    // can we do that will a callback?
    props: {
      city: {
        type: "string",
        description: "The city to get the weather for",
      },
    },
  },
} as const;

const onResponse = (message) => {
  // client.generations.chatNamer({
  //   content:
  // })
  console.log(message);
};

export const Chat = ({ id }: { id: string }) => {
  const { updateConversation } = React.useContext(ConversationsContext);
  const [
    {
      data: { messages },
      isLoading,
      hasError,
    },
    handleSendMessage,
  ] = useAIConversation("chat", { id });

  // console.log(messages);

  const props = {
    messages,
    isLoading,
    hasError,
    handleSendMessage: (message) => {
      handleSendMessage(message);
      // only run this on the first message...
      client.generations
        .chatNamer({
          content: message.content.map((c) => c.text),
        })
        .then((res) => {
          updateConversation({
            id,
            name: res.data?.name ?? "",
          });
        });
    },
    responseComponents,
  };
  return <AIConversation {...props} />;
};
