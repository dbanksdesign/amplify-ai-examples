"use client";

import { AIConversation } from "@aws-amplify/ui-react-ai";
import { Card } from "@aws-amplify/ui-react";
import { useAIConversation } from "@/client";

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

export const Chat = () => {
  const [
    {
      data: { messages },
      isLoading,
      hasError,
    },
    handleSendMessage,
  ] = useAIConversation("chat");

  console.log(messages);

  const props = {
    messages,
    isLoading,
    hasError,
    handleSendMessage,
    responseComponents,
  };
  return <AIConversation {...props} />;
};
