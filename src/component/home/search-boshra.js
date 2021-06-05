import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { postRemoteData } from "../../store/actions/thunk-action";

function SearchForm() {
  const dispatch = useDispatch();
  function SubmitSignInForm(e) {
    e.preventDefault();

    dispatch(
      postRemoteData(
        "https://robust-entity-homeway.herokuapp.com/searchResults",
        {
          myCountry: e.target.myCountry.value,
          WorkField: e.target.WorkField.value
        }, ''
      )
    );
  }

  return (
    <>
      <div className="login">
       
        <form onSubmit={SubmitSignInForm}>
          <input type="text" placeholder="country name" name="myCountry" />
          <input type="password" placeholder="work field" name="WorkField" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return { search: state.thunkReducer};
};
const mapDispatchToProps = { postRemoteData };

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
