import "./Template.css";
import NavigationBar from "../NavigationBar/NavigationBar";

export default function Template({children}) {
  return (
    <section className="template-view">
      <main>{children}</main>
      <footer><NavigationBar /></footer>
      
      </section>
  );
}
