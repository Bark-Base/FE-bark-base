import VerticalNav from "../../components/VerticalNavigation/VerticalNav";
import { useUser } from "../../context/UserContext";
import "./Home.css";


export default function Home() {

  const {user} = useUser()

  return (
    <section className='homepage'>
      <h1 className="barkbase-logo">barkbase</h1>
      <VerticalNav />
    </section>
  );
}
