import React, { Fragment } from "react";
import { Panel } from "./style";
import { iconStyle, tableStyle, Container, Picture } from "./style";

import { Person } from "@material-ui/icons";



export default ({ user, theme_color, gridArea }) => {
    return (
        <Container gridAre={gridArea}>
            { 
                user && user.map((element, index) => {
                    const { name, surname, github_picture } = element;
                    return (
                        <div className="User">
                            { element.github_picture ? (
                                <Picture
                                    src={element.github_picture}
                                    theme_color={theme_color}
                                />
                            ) : (
                                <Person style={iconStyle} />
                            )}
                        </div>
                    );
                })}
        </Container>
    );
};