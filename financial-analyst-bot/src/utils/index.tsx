import { Message, MessageProps } from "@aws-amplify/ui-react";
import { toast as SonnerToast } from "sonner";
import config from "@/../amplify_outputs.json";

export const getFormDataFromEvent = (
  event: React.FormEvent<HTMLFormElement>
): { [k: string]: FormDataEntryValue } => {
  const formData = new FormData(event.target as HTMLFormElement);
  return Object.fromEntries(formData);
};

export const customToast = (props: MessageProps) => {
  SonnerToast.custom(() => <Message {...props} />);
};

export const imgUrl = (src: string) => `https://${config.custom.cf}/${src}`;

export function formatDate(date: Date): string {
  const dateString = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return `${dateString} at ${timeString}`;
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export function convertBufferToBase64(
  buffer: ArrayBuffer,
  format: string
): string {
  let base64string = "";
  // Use node-based buffer if available
  // fall back on browser if not
  if (typeof Buffer !== "undefined") {
    base64string = Buffer.from(new Uint8Array(buffer)).toString("base64");
  } else {
    base64string = arrayBufferToBase64(buffer);
  }
  return `data:image/${format};base64,${base64string}`;
}

export function getImageTypeFromMimeType(
  mimeType: string
): "png" | "jpeg" | "gif" | "webp" {
  return mimeType.split("/")[1] as "png" | "jpeg" | "gif" | "webp";
}
