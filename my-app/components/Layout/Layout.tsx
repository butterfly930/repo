import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type LayoutPageProps = {
  children: ReactNode;
};
const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
