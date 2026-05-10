import { SessionProvider } from "next-auth/react";
import { getSession } from "@/lib/auth";
import ClientProviders from "./ClientProviders";

export default async function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <SessionProvider session={session}>
      <ClientProviders>{children}</ClientProviders>
    </SessionProvider>
  );
}
