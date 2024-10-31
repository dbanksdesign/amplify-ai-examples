"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import { Chat } from "./Chat";

export default function Home() {
  return (
    <Authenticator>
      <Chat />
    </Authenticator>
  );
}
