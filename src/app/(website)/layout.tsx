import FooterSection from "@/components/app/footer/Footer";
import Header from "@/components/app/header/Header";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="flex-1">{children}</main>

      <FooterSection />
    </>
  );
}
