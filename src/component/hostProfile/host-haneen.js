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
    borderRadius: "100px"
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
    <CenteredContent >
    <div style={{ borderRadius: "10px", boxShadow: "0px 0px 100px 0px #3447BD", backgroundColor:"#f7f8f8cc", width:"1300px", padding:"20px", color:"#0c2644"}}>
   
      <Avatar style={{marginLeft:"550px"}}
        className={classes.large}
        $withBorder
        alt="Avatar"
        src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_LhOQMcZSeL5pMHOg4oSOXJt000eVCaGjCUnklfW5SID9LdBXAGyd9YnWzDjHvAK4NU&usqp=CAU"}
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
        >
          {image ? <DeleteIcon mr={2} /> : <UploadIcon mr={2} />}
          {image ? "Delete" : "Upload"}
        </Button>
      </label>
      </div>
    </CenteredContent>
  );
};

export default AvatarUpload;
