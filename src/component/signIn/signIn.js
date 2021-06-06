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

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='contained' color='primary' type='button' onClick={handleOpen}>
        Login
      </Button>

      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container className={classes.paper}>
            <Typography className='loginTitle' variant='h3'>
              Home Way
            </Typography>
            <Typography className='loginText' variant='h4'>
              Login
            </Typography>
            <form className={classes.root} noValidate autoComplete='off'>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField className='inputTextLogin' label='Enter Your User Name' />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField className='inputTextLogin' label='Enter Your Password' />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    className='inputTextLogin searchBtn'
                    variant='contained'
                    color='primary'
                    onClick={handleOpen}
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
