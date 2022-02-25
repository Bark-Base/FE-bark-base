import VerticalNav from "../../components/VerticalNavigation/VerticalNav";
import "./Home.css";

export default function Home() {
  return (
    <section className='homepage'>
      <h1 className="barkbase-logo">barkbase</h1>
      <VerticalNav />
    </section>
  );
}
