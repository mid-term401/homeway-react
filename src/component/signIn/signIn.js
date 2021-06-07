import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { verifyUser } from "../../store/actions/thunk-action";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../../store/actions/loggin-action";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 4,
    margin: 10,
    width: 600,
  },
}));

function SignIn(props) {
  const classes = useStyles();
  let boolean = props.signIn.isOpen;
  const [open, setOpen] = React.useState(false);
  // console.log(44444, boolean)
  const handleOpen = () => {
    setOpen(boolean);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  function SubmitSignInForm(e) {
    e.preventDefault();

    dispatch(
      verifyUser(
        "https://robust-entity-homeway.herokuapp.com/sign_in",
        e.target.username.value,
        e.target.password.value
      )
    );
  }
  // console.log(33333,props.signIn.isOpen)
  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.signIn.isOpen}
        onClose={() => {
          props.toggleOpen(props.signIn.isOpen);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.signIn.isOpen}>
          <Container className={classes.paper}>
            <Typography className='loginTitle' variant='h3'>
              Home Way
            </Typography>
            <Typography className='loginText' variant='h4'>
              Login
            </Typography>
            <form
              onSubmit={SubmitSignInForm}
              className={classes.root}
              noValidate
              autoComplete='off'
            >
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    className='inputTextLogin'
                    type='text'
                    name='username'
                    label='Enter Your User Name'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    className='inputTextLogin'
                    type='password'
                    name='password'
                    label='Enter Your Password'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    className='inputTextLogin searchBtn'
                    variant='contained'
                    color='primary'
                    onClick={handleOpen}
                    type='submit'
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Typography className='loginTextLink' variant='h6'>
              I don't have an account Become a volunteer
            </Typography>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { signIn: state.loggin };
};
const mapDispatchToProps = { verifyUser, toggleOpen };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
