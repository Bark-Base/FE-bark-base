import VerticalNav from "../../components/VerticalNavigation/VerticalNav";
import { useUser } from "../../context/UserContext";
import "./Home.css";

export default function Home() {
  const { user } = useUser();

  return (
    <section className="homepage">
      <h1 className="barkbase-logo">barkbase</h1>
      <div></div>
      <div>
        {!user?.email ? (
          <article className="temp-text">
            <h3>New Pet owner? </h3>
            <span>
              Go to Facts to get the info you need to keep your pet (and
              yourself) happy.
            </span>{" "}
            <br />
            <h3>Pet misbehaving?</h3>{" "}
            <span>
              Go to Training for great videos on how to tame that pet.
            </span>
            <br />
            <h3>Click Login</h3>
            <span>
              {" "}
              to make an account so you can keep track of your pet's health and
              contacts.
            </span>
          </article>
        ) : null}
        <VerticalNav />
      </div>
    </section>
  );
}
