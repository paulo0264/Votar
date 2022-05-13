import React from "react";
import { UserInformationContainer, CardMedia } from "./UserInformation.style";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link';

interface UserInformationProps {
  button: string;
  name: string;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <Card>
        <CardActionArea>
          <CardMedia
            alt="Contemplative Reptile"
            src="/img/home/processo.jpeg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h4">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="outlined" color="primary">
          <Link href="/Votar">{props.button}</Link>
          </Button>
        </CardActions>
      </Card>
      
    </UserInformationContainer>
    /*<UserInformationContainer>
            <AvatarStyled src={props.picture} />
            <UserName>{props.name}</UserName>
            <UserDescription>{props.description}</UserDescription>
        </UserInformationContainer>*/
  );
};

export default UserInformation;
