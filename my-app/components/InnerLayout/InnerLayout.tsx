import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ReactNode } from "react";

type InnerLayoutProps = {
  children: ReactNode;
};

const InnerLayout = ({ children }: InnerLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default InnerLayout;
