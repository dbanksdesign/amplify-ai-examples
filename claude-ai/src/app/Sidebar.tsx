import { client } from "@/client";
import * as React from "react";
import { Schema } from "../../amplify/data/resource";
import { Button, Flex, ScrollView, Text, View } from "@aws-amplify/ui-react";
import { CreateChat } from "./CreateChat";
import { ConversationsContext } from "./ConversationsProvider";

export const Sidebar = () => {
  const { conversations } = React.useContext(ConversationsContext);
  // const [conversations, setConversations] = React.useState<
  //   Schema["chat"]["type"][]
  // >([]);

  const handleUpdate = async ({ id }: { id: string }) => {
    client.conversations.chat
      .update({
        id,
        name: "New Name",
      })
      .then((res) => {
        console.log(res);
        //update local state
      });
  };

  // React.useEffect(() => {
  //   client.conversations.chat.list().then((res) => {
  //     if (res.data) {
  //       setConversations(res.data);
  //     }
  //   });
  // }, []);

  console.log(conversations);

  return (
    <Flex direction="column" width="500px" height="100%">
      <ScrollView flex="1">
        <Flex direction="column">
          {conversations.map((conversation) => (
            <Flex direction="row" key={conversation.id} alignItems="center">
              <Flex direction="column" flex="1">
                <Text>{conversation.name ?? conversation.id}</Text>
                <Text>
                  {new Date(conversation.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      hour12: false,
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </Text>
                <Text>{JSON.stringify(conversation.metadata)}</Text>
              </Flex>
              <Button onClick={() => handleUpdate({ id: conversation.id })}>
                X
              </Button>
            </Flex>
          ))}
        </Flex>
      </ScrollView>
      <Flex direction="row" padding="large">
        <CreateChat />
      </Flex>
    </Flex>
  );
};
