import { connect } from "react-redux";
import { getRemoteData, bearerAuth,updateRemoteData } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";
import {useEffect,useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { If, Else, Then } from "react-if";
import ShowForm from './updateFormHost';

const HostProfileViewingAsHost = (props) => {
  console.log("hostprops", props.thunkReducer);
  const [flag, setFlag] = useState(false)

    const dispatch = useDispatch();
    let host;
    useEffect( ()=>{
    if (props.userData.isVerified) {
 
      dispatch(
        bearerAuth(
          "https://robust-entity-homeway.herokuapp.com/host",
          props.userData.id,
          props.userData.cookie
        )
      );
      host = props
    }
  }, [props.userData])

  
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
        <h1>Host profile as Host</h1>
        <button onClick={buttonClicked}>update</button>
      </div>
    </>
  );
} else {
    return(
      <ShowForm />
    )
}

  //   return (
  //     <div className="hostProfileViewingAsHost">
  //   <h1>volunteerProfileViewingAsHost</h1>
  //   <label htmlFor="Password">Password</label>
  //   <input type="password" id="Password" name="password"/>
  //   <label htmlFor="First-Name">First-Name</label>
  //   <input type="text" id="First-Name" name="firstname" />
  //   <label htmlFor="Last-Name">Last-Name</label>
  //   <input type="text" id="Last-Name" name="lastname"/>
  //   <label htmlFor="description">Description</label>
  //   <input type="text" id="description" name="description"/>
  //   <label htmlFor="skills">Skills</label>
  //   <input type="radio" value="female" name="gender" />
  //   <label htmlFor="female">female</label>
  //   <input type="radio" value="male" name="gender" />
  //   <label htmlFor="male">male</label>
  //   <input type="radio" value="other" name="gender" />
  //   <label htmlFor="other">other</label>
  //   <label htmlFor="Email">Email</label>
  //   <input type="text" id="Email" name="email" />
  //   <label htmlFor="Country">Country</label>
  //   <input type="text" id="Country"  name="country" />
  //   <label htmlFor="Address">Address</label>
  //   <input type="text" id="Address" name="address" />
  //   <label htmlFor="Birth-Date">Birth-Date</label>
  //   <input type="text" id="Birth-Date"name="birthdate" />
  //   <label htmlFor="image">image</label>
  //   <input type="text" id="image" name="image" placeholder="please put the url for the image"/>
  //   <button >Update Data</button>
  //   <button >Delete Account</button>
  //   <button >Add Service</button>
  // </div>
  //   )
  } 

const mapStateToProps = (state) => {
    return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, updateRemoteData };
  
export default connect(mapStateToProps, mapDispatchToProps)(HostProfileViewingAsHost);


// address: "s"
// birth_date: "2021-12-12T00:00:00.000Z"
// category: "farming"
// country: "s"
// description: null
// email: "0000"
// first_name: "samer"
// id: 6
// last_name: "alnajjar"
// password: "$2b$10$lrafeUoZaHqPBTH2yygHnOTGuGvHxUkgb/Za.HcwfTBOT8BMvdGwu"
// profile_image: null
// rating: null
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IjExMTEiLCJyb2xlIjoiaG9zdCIsImlhdCI6MTYyMjk5NTM5NH0.RKP54Y3q0K4dwAPs0CLgHNcKFIsKoSRTv6_-FfX_2vc"
// user_name: "1111"