import { connect } from "react-redux";
import { getRemoteData, bearerAuth } from "../../store/actions/thunk-action";
import { checkUserType } from "../../store/actions/acl-action";
import { saveID } from "../../store/actions/loggin-action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
const ServiceDisplay = (props) => {
  console.log("service", props);
  const dispatch = useDispatch();
  let service;
  useEffect(() => {
    if (props.userData.isVerified) {
      service = dispatch(
        bearerAuth(
          "https://robust-entity-homeway.herokuapp.com/host",
          `${props.userData.idHost}/service`,
          props.userData.cookie
        )
      );
    }
  }, [props.userData]);
  console.log("host id from service", props.thunkReducer.results.body[0].host_id);
  props.saveID(props.thunkReducer.results.body[0].host_id);
  if (props) {
    return (
      <div className='ServiceDisplay'>
        <form>
          <label htmlFor='title'>title</label>
          <input
            type='title'
            id='title'
            name='title'
            value={props.thunkReducer.results.body[0].title}
          />
          <label htmlFor='description'>description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={props.thunkReducer.results.body[0].description}
          />
          <label htmlFor='country'>country</label>
          <input
            type='text'
            id='country'
            name='country'
            value={props.thunkReducer.results.body[0].country}
          />
          <label htmlFor='type'>type</label>
          <input
            type='text'
            id='type'
            name='type'
            value={props.thunkReducer.results.body[0].type}
          />
          <label htmlFor='details'>details</label>
          <input
            type='text'
            id='details'
            name='details'
            value={props.thunkReducer.results.body[0].details}
          />
          <label htmlFor='duration'>duration:</label>
          <input
            type='text'
            name='duration'
            // value={props.thunkReducer.results.body.duration}
          />
          <label htmlFor='address'>address</label>
          <input
            type='text'
            name='address'
            //    value={props.thunkReducer.results.body.gender}
          />
          {/* <label htmlFor="male">male:</label>
        <input
          type="radio"
          value="other"
          name="gender"
          //    value={props.thunkReducer.results.body.gender}
        />
        <label htmlFor="other">other:</label>
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          name="email"
          value={props.thunkReducer.results.body.email}
        />
        <label htmlFor="Country">Country</label>
        <input
          type="text"
          id="Country"
          name="country"
          value={props.thunkReducer.results.body.country}
        />
        <label htmlFor="Address">Address</label>
        <input
          type="text"
          id="Address"
          name="address"
          value={props.thunkReducer.results.body.address}
        />
        <label htmlFor="Birth-Date">Birth-Date</label>
        <input
          type="text"
          id="Birth-Date"
          name="birthdate"
          value={props.thunkReducer.results.body.birth_date}
        />
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="please put the url for the image"
        /> */}
          <button type='submit'>Update</button>
        </form>
      </div>
    );
  } else {
    return <h1>hello</h1>;
  }
};
const mapStateToProps = (state) => {
  return { userData: state.loggin, thunkReducer: state.thunkReducer };
};
const mapDispatchToProps = { getRemoteData, bearerAuth, saveID };
export default connect(mapStateToProps, mapDispatchToProps)(ServiceDisplay);
