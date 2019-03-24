import React, { Component } from "react";
import { root } from './style';
import listData from "./listData";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class ListOfMembers extends Component {
    render() {
        return(
            <List className={root}>
                { listData.map(list => (
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar src={list.img} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={list.name}
                        />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default ListOfMembers;
