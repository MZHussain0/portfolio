import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="min-h-screen h-full overflow-auto border-b-8 border-primary bg-slate-300
      text-muted">
      <div className="border-b-8 border-primary bg-primary-foreground">
        <Navbar />
      </div>
      {children}
    </main>
  );
}
