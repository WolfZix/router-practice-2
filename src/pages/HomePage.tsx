import { NavLink, useParams } from "react-router-dom";

const profiles = [1, 2, 3, 4, 5];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Home Page</h1>
      {profiles.map((profile) => (
        <NavLink
          key={profile}
          to={`/profiles/${profile}`}
          className={"hover:text-amber-100"}
        >
          Profile: {profile}
        </NavLink>
      ))}
    </div>
  );
}
