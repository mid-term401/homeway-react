// import React from "react";
// import { connect } from "react-redux";
// import { verifyUser } from "../../store/actions/thunk-action";
// import { useSelector, useDispatch } from "react-redux";

// function SignIn() {
//   const dispatch = useDispatch();
//   function SubmitSignInForm(e) {
//     e.preventDefault();

//     dispatch(
//       verifyUser(
//         "https://robust-entity-homeway.herokuapp.com/sign_in",
//         e.target.username.value,
//         e.target.password.value
//       )
//     );
//   }

//   return (
//     <>
//       <div className="login">
//         <h1>Login</h1>
//         <form onSubmit={SubmitSignInForm}>
//           <input type="text" placeholder="Username" name="username" />
//           <input type="password" placeholder="Password" name="password" />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </>
//   );
// }

// const mapStateToProps = (state) => {
//   return { signIn: state.loggin };
// };
// const mapDispatchToProps = { verifyUser };

// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
