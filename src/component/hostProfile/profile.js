import HostProfile from "./host";
import VolunteerProfile from "../volunteerProfile/volunteer";
import cookie from "react-cookies";
import jwt from "jsonwebtoken";

export default function Profile() {
  let token = cookie.load("auth");
  const { role } = jwt.decode(token);

  if (role === "host") {
    return (
      <>
        <HostProfile />
      </>
    );
  } else if (role === "volunteer")
    return (
      <>
        <VolunteerProfile />
      </>
    );
}
