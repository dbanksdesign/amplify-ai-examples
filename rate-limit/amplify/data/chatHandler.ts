import {
  ConversationTurnEvent,
  handleConversationTurnEvent,
} from "@aws-amplify/ai-constructs/conversation/runtime";

export const handler = async (event: ConversationTurnEvent) => {
  const { tokenUsage } = await handleConversationTurnEvent(event);
  // record token usage in a database or log it
  console.log(tokenUsage);
};
