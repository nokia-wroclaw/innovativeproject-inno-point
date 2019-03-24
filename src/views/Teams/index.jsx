import React, { Component } from "react";
import { Container, Header, Members, OptionBar, Footer} from './style';
import Grid from '@material-ui/core/Grid';
import ListOfMembers from '../../components/Members';
import Options from '../../components/Options';
import UserList from '../../components/UsersList';

class Teams extends Component {
  
    render(){
      return (
      <Container>
        <Grid container spacing={24} justify="center" alignItems="center" >
          <Grid component={Header}> </Grid>
          <Grid item xs={6} sm={5} component={Members}>
            <ListOfMembers/>
          </Grid>
          <Grid item xs={6} sm={3} component={OptionBar}>
            <UserList/>
          </Grid>
          <Grid item component={Footer}> </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Teams;