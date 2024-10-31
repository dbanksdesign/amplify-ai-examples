"use client";
import * as React from "react";
import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import { Sidebar } from "./Sidebar";
import { ConversationsProvider } from "./ConversationsProvider";

export const Wrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <Authenticator>
      <ConversationsProvider>
        <Flex direction="row" width="100vw" height="100vh" overflow="hidden">
          <Sidebar />
          <View flex="1" height="100%">
            {children}
          </View>
        </Flex>
      </ConversationsProvider>
    </Authenticator>
  );
};
