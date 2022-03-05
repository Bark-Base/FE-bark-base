import VerticalNav from "../../components/VerticalNavigation/VerticalNav";
import { useUser } from "../../context/UserContext";
import "./Home.css";

export default function Home() {
  const { user } = useUser();  

  return (
    <section className="homepage">
      <h1 className="bark-base-logo">bark base</h1>
      <div className="homepage-content">
        {!user.email ? (
          <article className="home-copy">
            <h2>New Pet owner </h2>
            <p>
              Pet Facts has valuable info you need to keep your pet healthy and happy.
            </p>
            <h2>Pet misbehaving?</h2>{" "}
            <p>
              Training Videos for your new pet or naughty pet.
            </p>
            <h2>Click Login</h2>
            <p>
              And create an account so you can keep track of your pet's info on the fly.
            </p>
          </article>
        ) : null}
        <VerticalNav />
      </div>
    </section>
  );
}