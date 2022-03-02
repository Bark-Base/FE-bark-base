import "./Template.css";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Template({header, children}) {
  return (
    <section className="template-view">
      <header>{header}</header>
      <main>{children}</main>
      <footer><NavigationBar /></footer>
      </section>
  );
}
