import HostProfile from "./host";
import VolunteerProfile from "../volunteerProfile/volunteer";
import cookie from "react-cookies";
import { useSelector } from "react-redux";
import jwt from "jsonwebtoken";

export default function Profile() {
  const state = useSelector((state) => {
    return {
      userData: state.loggin,
      thunkReducer: state.thunkReducer,
    };
  });
  console.log("🚀🚀🚀 ~~~~ state ~~~~ state🚀🚀🚀🚀🚀🚀", state);
  let token = cookie.load("auth");
  const { role } = jwt.decode(token);

  if (state.userData.routeId) {
    return (
      <>
        <HostProfile />
      </>
    );
  }

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
