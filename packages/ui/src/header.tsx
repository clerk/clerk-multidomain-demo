export function Navbar({ children }: { children: React.ReactNode }) {
  return <div className="flex grow justify-end ml-2 gap-4 p-4">{children}</div>;
}

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b flex justify-center w-full">
      <header className="flex items-center justify-between p-2 container">
        {children}
      </header>
    </div>
  );
}
