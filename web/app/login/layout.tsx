import { CenteredLayout } from "@/components/layout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CenteredLayout>
      {children}
    </CenteredLayout>
  );
}
