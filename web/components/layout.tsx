"use client";

export const CenteredLayout = ({ children }: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      { children }
    </div>
  )
}
