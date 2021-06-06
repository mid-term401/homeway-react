import { connect } from "react-redux";
import { getRemoteData, bearerAuth } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";

import { useSelector, useDispatch } from "react-redux";

function VolunteerProfile(props) {
  const dispatch = useDispatch();
  let volunteer;

  if (props.userData.isVerified) {
    //   console.log(999)
    // let userCookie = JSON.parse(props.userData.cookie);
    // console.log(userCookie.token);
    volunteer = dispatch(
      bearerAuth(
        "https://robust-entity-homeway.herokuapp.com/volunteer",
        props.userData.id,
        props.userData.cookie
      )
    );
  }
//   console.log(volunteer);

  return (
    // <div className="volunteerProfileViewingAsVolunteer">
    <h1>Volunteer profile as volunteer</h1>
    //   <form>
    //   <label htmlFor="Password">Password</label>
    //   <input type="password" id="Password" name="password" />
    //   <label htmlFor="First-Name">First-Name</label>
    //   <input type="text" id="First-Name" name="firstname" />
    //   <label htmlFor="Last-Name">Last-Name</label>
    //   <input type="text" id="Last-Name" name="lastname" />
    //   <label htmlFor="description">Description</label>
    //   <input type="text" id="description" name="description" />
    //   <label htmlFor="skills">Skills</label>
    //   <input type="text" id="skills" name="skills" />
    //   <label htmlFor="gender">Gender:</label>
    //   <input type="radio" value="female" name="gender" />
    //   <label htmlFor="female">female:</label>
    //   <input type="radio" value="male" name="gender" />
    //   <label htmlFor="male">male:</label>
    //   <input type="radio" value="other" name="gender" />
    //   <label htmlFor="other">other:</label>
    //   <label htmlFor="Email">Email</label>
    //   <input type="text" id="Email" name="email" />
    //   <label htmlFor="Country">Country</label>
    //   <input type="text" id="Country" name="country" />
    //   <label htmlFor="Address">Address</label>
    //   <input type="text" id="Address" name="address" />
    //   <label htmlFor="Birth-Date">Birth-Date</label>
    //   <input type="text" id="Birth-Date" name="birthdate" />
    //   <label htmlFor="image">image</label>
    //   <input
    //     type="text"
    //     id="image"
    //     name="image"
    //     placeholder="please put the url for the image"
    //   />
    //   <button type="submit">Update</button>
    //   </form>
    // </div>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.loggin };
};
const mapDispatchToProps = { getRemoteData, bearerAuth };

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerProfile);



// address: "Aut veritatis aute e"
// birth_date: "2020-01-20T00:00:00.000Z"
// country: "Amet obcaecati ut m"
// description: null
// email: "mymezah0000a@mailinator.com"
// first_name: "Astra"
// id: 10
// last_name: "Mcknight"
// passport: null
// password: "$2b$10$Nq9qU6Ymi03jU6r0HY8oX.qmHItw0CNUMY0TymeZAq62KeRcvgX2G"
// profile_image: null
// rating: null
// skills: null
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiIwMDAwIiwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTYyMjk4NTAyMH0.DZ6YNWt7DA6RXbguvdpfZF4yAMFInqJoC593vYcUxPc"
// user_name: "0000"
// __proto__: Object