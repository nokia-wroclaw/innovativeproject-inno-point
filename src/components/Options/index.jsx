/** @jsx React.DOM **/
import React, { Component } from "react";
import {root, heading} from './style';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InvitePerson from '../../components/UsersList'

class Options extends Component {
    render() {
        return (
          <ExpansionPanel className={root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={heading}>Invite new Member</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <InvitePerson/>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      }
}

export default Options;