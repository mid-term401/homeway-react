import { connect } from "react-redux";
import {
  getRemoteData,
  bearerAuth,
  updateRemoteData,
} from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";
import { useEffect, useState } from "react";
import { If, Else, Then } from "react-if";

import { useSelector, useDispatch } from "react-redux";

import ShowForm from './updateFormVolunteer'

function VolunteerProfile(props) {
  console.log("props3", props.thunkReducer);
const [flag, setFlag] = useState(false)
  const dispatch = useDispatch();
  let volunteer;
  useEffect(() => {
      if (props.userData.isVerified) {
        dispatch(
          bearerAuth(
            "https://robust-entity-homeway.herokuapp.com/volunteer",
            props.userData.id,
            props.userData.cookie
          )
        );
        volunteer = props;
      }
  
  }, [props.userData]);

  console.log("props4", props.thunkReducer.results.body);

  const buttonClicked = () => {
      console.log("test")
      setFlag(true)
  }

  if (!flag) {
    return (
      <>
        {/* <If condition={props.userData.isVerified}>
            <div>Hello</div>
        </If> */}
        <div className="volunteerProfileViewingAsVolunteer">
          <h1>Volunteer profile as volunteer</h1>
          <button onClick={buttonClicked}>update</button>
        </div>
      </>
    );
  } else {
      return(
        <ShowForm />
      )
  }
}

// const ShowForm = (props) => {
//     console.log('props55', props)
//     const [flag, setFlag] = useState(false)
//   return (
//     // <If condition={!flag}>
//     //   <Then>Waiting for data</Then>
//     //   <Else>
//         <form>
//           <label htmlFor="Password">Password</label>
//           <input
//             type="password"
//             id="Password"
//             name="password"
//             value={flag ? props.thunkReducer.results.body.password : ""}
//           />
//           <label htmlFor="First-Name">First-Name</label>
//           <input
//             type="text"
//             id="First-Name"
//             name="firstname"
//             value={props.thunkReducer.results.body.first_name}
//           />
//           <label htmlFor="Last-Name">Last-Name</label>
//           <input
//             type="text"
//             id="Last-Name"
//             name="lastname"
//             value={props.thunkReducer.results.body.last_name}
//           />
//           <label htmlFor="description">Description</label>
//           <input
//             type="text"
//             id="description"
//             name="description"
//             value={props.thunkReducer.results.body.description}
//           />
//           <label htmlFor="skills">Skills</label>
//           <input
//             type="text"
//             id="skills"
//             name="skills"
//             value={props.thunkReducer.results.body.skills}
//           />
//           <label htmlFor="gender">Gender:</label>
//           <input
//             type="radio"
//             value="female"
//             name="gender"
//             // value={props.thunkReducer.results.body.gender}
//           />
//           <label htmlFor="female">female:</label>
//           <input
//             type="radio"
//             value="male"
//             name="gender"
//             //    value={props.thunkReducer.results.body.gender}
//           />
//           <label htmlFor="male">male:</label>
//           <input
//             type="radio"
//             value="other"
//             name="gender"
//             //    value={props.thunkReducer.results.body.gender}
//           />
//           <label htmlFor="other">other:</label>
//           <label htmlFor="Email">Email</label>
//           <input
//             type="text"
//             id="Email"
//             name="email"
//             value={props.thunkReducer.results.body.email}
//           />
//           <label htmlFor="Country">Country</label>
//           <input
//             type="text"
//             id="Country"
//             name="country"
//             value={props.thunkReducer.results.body.country}
//           />
//           <label htmlFor="Address">Address</label>
//           <input
//             type="text"
//             id="Address"
//             name="address"
//             value={props.thunkReducer.results.body.address}
//           />
//           <label htmlFor="Birth-Date">Birth-Date</label>
//           <input
//             type="text"
//             id="Birth-Date"
//             name="birthdate"
//             value={props.thunkReducer.results.body.birth_date}
//           />
//           <label htmlFor="image">image</label>
//           <input
//             type="text"
//             id="image"
//             name="image"
//             placeholder="please put the url for the image"
//           />
//           <button type="submit">Update</button>
//         </form>
//     //   </Else>
//     // </If>
//   );
// };

const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(VolunteerProfile);

//  address: "Aut veritatis aute e"
//  birth_date: "2020-01-20T00:00:00.000Z"
//  country: "Amet obcaecati ut m"
//  description: null
//  email: "mymezah0000a@mailinator.com"
//  first_name: "Astra"
//  id: 10
//  last_name: "Mcknight"
//  passport: null
//  password: "$2b$10$Nq9qU6Ymi03jU6r0HY8oX.qmHItw0CNUMY0TymeZAq62KeRcvgX2G"
//  profile_image: null
//  rating: null
// skills: null
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm5hbWUiOiIwMDAwIiwicm9sZSI6InZvbHVudGVlciIsImlhdCI6MTYyMjk4NTAyMH0.DZ6YNWt7DA6RXbguvdpfZF4yAMFInqJoC593vYcUxPc"
// user_name: "0000"
// __proto__: Object
