import React from "react";
import {Typography} from "@material-ui/core";

import styles from "./title.module.css";

const Title = () => {
    return (
        <div className={ styles.container }>
            <Typography variant="h5" className={ styles.container }>
                Made By Lads
            </Typography>
        </div>
    )
}

export default Title;