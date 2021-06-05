import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getRemoteData } from "../../store/actions/thunk-action";

function SearchResultDisplay() {
  const dispatch = useDispatch();
  function SubmitSignInForm(e) {
    e.preventDefault();

    dispatch(
      getRemoteData(
        "https://robust-entity-homeway.herokuapp.com/searchResults",
      )
    );
  }

  return (
    <>
      <div className="login">
       
        <form onSubmit={SubmitSignInForm}>
          <input type="text" placeholder="country name" name="myCountry" />
          <input type="text" placeholder="work field" name="WorkField" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { search: state.thunkReducer};
};
const mapDispatchToProps = { getRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultDisplay);
