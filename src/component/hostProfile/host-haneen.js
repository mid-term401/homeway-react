import {
  Button as MuiButton,
  makeStyles
} from "@material-ui/core";
import {
  CloudUpload as MuiCloudUpload,
  Delete as MuiDelete
} from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import React, { createRef, useState } from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';




const Button = styled(MuiButton)(spacing);
const UploadIcon = styled(MuiCloudUpload)(spacing);
const DeleteIcon = styled(MuiDelete)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
    borderRadius: "100px",
    marginBottom:"100px",
    transform: 'translateY(-130px)',
    
  },

  photo:
  {
    marginTop:"-230px",
    marginRight:"1110px",
    transform: 'translateY(-130px)',
  },

  Name:
  {
    marginTop:"50px",
    marginLeft:"220px",
    transform: 'translateY(10px)',
  },

  Style:
  {
    marginTop:"-250px",
    marginLeft:"300px"
  },

  button:
  {
    marginTop:"-330px",
    marginLeft:"300px"
  },

  root: {
		maxWidth: 350,
		flexGrow: 1,
		// margin: '1rem',
    marginRight:"800px",
    marginTop:"100px"
	},

	typography: {
		textAlign: 'center',
		fontSize: '2rem',
	},

	h2: {
		textAlign: 'center',
		fontSize: '3rem',
		marginBottom: '7rem',
	}
}));


const AvatarUpload = () => {
  const classes = useStyles();

  const [image, _setImage] = useState(null);
  const inputFileRef = createRef(null);

  const cleanup = () => {
    URL.revokeObjectURL(image);
    inputFileRef.current.value = null;
  };

  const setImage = (newImage) => {
    if (image) {
      cleanup();
    }
    _setImage(newImage);
  };

  const handleOnChange = (event) => {
    const newImage = event.target?.files?.[0];

    if (newImage) {
      setImage(URL.createObjectURL(newImage));
    }
  };

  
  const handleClick = (event) => {
    if (image) {
      event.preventDefault();
      setImage(null);
    }
  };

  return (
    <div >
    <Typography variant="h6" gutterBottom className={classes.Name} >
    Haneen Khasawneh
  </Typography>
    <div style={{ marginTop: "30px",borderRadius: "10px", boxShadow: "0px 0px 100px 0px #3447BD", backgroundColor:"#f7f8f8cc",height: "500px", width:"1300px", padding:"20px", color:"#0c2644"}}>
     <CenteredContent >
   

       <Avatar 
      
        className={classes.large}
        $withBorder
        alt="Avatar"
        src={image || "data:image/jpeg;base64,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"}
      />
   
      <input
        ref={inputFileRef}
        accept="image/*"
        hidden
        id="avatar-image-upload"
        type="file"
        onChange={handleOnChange}
      />
      <br></br>
      <label htmlFor="avatar-image-upload">
        <Button
          variant="contained"
          color="primary"
          component="span"
          mb={2}
          onClick={handleClick}
          className={classes.photo}
        >
          {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
          {image ? "Delete" : "Upload"}
        </Button>
      </label>
     
    </CenteredContent>
    <Grid container spacing={2} >
      <Grid item xs={6} sm={3}>
        <TextField
            required
            id="userName"
            name="username"
            label="User Name"
            fullWidth
            autoComplete="username"
            defaultValue="Haneen KH"
            className={classes.Style}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
        <TextField
            
            required
            id="password"
            name="password"
            label="password"
            fullWidth
            autoComplete="new-password"
            type="password"
            className={classes.Style}
            defaultValue="haneen_345"
          />
        </Grid>
        </Grid>

        <Grid container spacing={2} style={{marginTop:"30px"}}>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="firstName"
            name="firstname"
            label="First name"
            fullWidth
            autoComplete="given-name"
            className={classes.Style}
            defaultValue="Haneen"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="lastName"
            name="lastname"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            className={classes.Style}
            defaultValue="Khasawneh"
          />
        </Grid>
        </Grid>
        
        <Grid container spacing={2} style={{marginTop:"30px"}}>
        <Grid item xs={6} sm={3}>
         <TextField
                
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
            className={classes.Style}
            defaultValue="haneen.khasawneh96@gmail.com"
                
              />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="address-line1"
            className={classes.Style}
            defaultValue="Aydun/Stree03"
          />
          
        </Grid>
        </Grid>

        <Grid container spacing={2} style={{marginTop:"30px"}}>

        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            className={classes.Style}
            defaultValue="Irbid"
          />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            className={classes.Style}
            defaultValue="Jordan"
          />
        </Grid>
       
        </Grid>

        
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
             
            Save Changes
          
          </Button>
        
    </div>
    <br></br>
    <div style={{ marginBottom: "30px" ,borderRadius: "10px", boxShadow: "0px 0px 100px 0px #3447BD", backgroundColor:"#f7f8f8cc", width:"1300px", padding:"20px", color:"#0c2644"}}>

    <Typography variant="h6" gutterBottom  >
        Services:
    </Typography>

    <Grid
						container
						justify="center"
						wrap="wrap"
						spacing={0}
						style={{ marginBottom: '10rem' }}
					>
						<Grid container item wrap="wrap" xs={10} spacing={0}>
							<Grid container justify="space-evenly" wrap="wrap" spacing={8}>
									<Card className={classes.root}>
										<CardActionArea>
											<CardMedia
												component="img"
												height="220"
												image='https://www.gardeningknowhow.com/wp-content/uploads/2021/02/basket-of-gold-400x300.jpg'
												title='Basket of Gold'
											/>
											<CardContent>
												<Typography gutterBottom variant="h5" component="h2">
												Basket of Gold
												</Typography>
											
                        <Typography
													variant="body2"
													color="textSecondary"
													component="p"
												>
                        
												Basket-of-gold plants (Aurinia saxtilis) feature bright gold flowers that seem to reflect the sun’s golden rays. Although the individual flowers are small, they bloom in large clusters that intensify the effect. The plants grow a foot (30 cm.) high and as much as 2 feet (60 cm.)
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button size="small" color="primary">
												More Details
											</Button>
											<Button
												size="small"
												color="primary"
											
											>
												Apply
											</Button>
										</CardActions>
									</Card>
								
							</Grid>
						</Grid>
					</Grid>
     </div>
    </div>
  );
};

export default AvatarUpload;
