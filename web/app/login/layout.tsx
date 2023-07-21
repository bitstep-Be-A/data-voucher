import { CenteredContainer } from "@/components/container";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CenteredContainer>
      {children}
    </CenteredContainer>
  );
}
