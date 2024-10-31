import { ConfigureAmplify } from "./ConfigureAmplify";
import { Wrapper } from "./Wrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <ConfigureAmplify />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
