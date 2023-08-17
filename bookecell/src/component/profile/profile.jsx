import { Navlink } from "react-router-dom";
import classes from "./profile.module.css";
import { Button , Tab ,Tabs , Textfeid } from "@material-ui/core";

export const profile =() => {
    return(
    <h1 className={classes.heading}>
        profile component <Navlink to="/user">user</Navlink>
<Button
 varient ="contained"
 color = "primary"
 size = "small"
 className = "click-btn"
 classes={{}}
 >
    click me !
 </Button>
 <Button>normal</Button>
 <Textfeid className="input-element" classes={{}} />
 <input />
 <Tabs>
 <Tab classes={{selected:"selected-tab"}}>Hello</Tab>
 <Tab >Hello 2 </Tab>
 </Tabs>
 </h1>
  );
};
