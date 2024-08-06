import Header from "./Header.layout";
import Footer from "./Footer.layout";
import ScrollToTopProvider from "app/components/providers/ScrollToTopProvider";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTopProvider>
        <Header />
        {children}
        <Footer />
      </ScrollToTopProvider>
    </>
  );
};

export default Layout;
