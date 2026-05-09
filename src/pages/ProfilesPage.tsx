import { NavLink, Outlet } from "react-router-dom";

export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-around">
      <div className="flex flex-col gap-2">
        {profiles.map((profile) => (
          <NavLink
            to={`/profiles/${profile}`}
            key={profile}
            className={({ isActive }) =>
              `hover:text-amber-100 ${isActive ? "text-amber-300" : ""}`
            }
          >
            Profile: {profile}
          </NavLink>
        ))}
        <NavLink key={"HomePage"} to={"/"}>
          Back to HomePage
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
