import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="py-16">
      <div className="px-16">{children}</div>
    </section>
  );
};

export default Container;
