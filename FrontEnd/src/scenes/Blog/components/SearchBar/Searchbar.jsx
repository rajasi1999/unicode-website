import React, { Component } from 'react';
import { Paper, InputBase, IconButton, createMuiTheme, MuiThemeProvider, Tooltip } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const myTheme=createMuiTheme(
    {
        overrides:{
            MuiInputBase:{
                input:{
                    fontSize: 20,
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                    color: "#707070",
                    opacity: "0.3",
                    flex: 1
                }
            }
        },
    }
);

class Searchbar extends Component {
    state = {  }
    styles={
        paper:{
            display: "flex",
            borderRadius: "10px",
            boxShadow: "6px 6px 16px #d6d6d6",
            marginBottom:"40px"
        },
        icon:{
            padding: 10,
            opacity: "0.2"
        },
        input:{
            flex: 1
        },
        pinkBar:{
            borderRadius: "10px 0px 0px 10px",
            background: "#FF7171",
            height: "60px",
            width: 10
        }
    }
    render() { 
        return ( 
            <MuiThemeProvider theme={myTheme} >
            <Tooltip title="Search" aria-label="Search">
                <Paper style={this.styles.paper} >
                <div style={this.styles.pinkBar} ></div>
                <IconButton style={this.styles.icon} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <InputBase fullWidth placeholder="Search" />
                </Paper>
            </Tooltip>
            </MuiThemeProvider>
         );
    }
}
 
export default Searchbar;