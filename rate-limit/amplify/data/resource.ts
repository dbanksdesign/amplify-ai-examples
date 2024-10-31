import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { defineConversationHandlerFunction } from "@aws-amplify/backend-ai/conversation";

const chatHandler = defineConversationHandlerFunction({
  entry: "./chatHandler.ts",
  name: "customChatHandler",
  models: [{ modelId: a.ai.model("Claude 3 Haiku") }],
});

const schema = a.schema({
  chat: a.conversation({
    aiModel: a.ai.model("Claude 3 Haiku"),
    systemPrompt: `You are a helpful assistant`,
    handler: chatHandler,
  }),

  pirateChat: a.conversation({
    aiModel: a.ai.model("Claude 3 Haiku"),
    systemPrompt: `You are a helpful assistant`,
  }),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
