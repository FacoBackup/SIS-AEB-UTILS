import React from "react";
import styles from "./styles/Apps.module.css";
import PropTypes from 'prop-types'
import Dropdown from "../../core/navigation/dropdown/Dropdown";
import {ToolTip} from "mfc-core";

export default function Apps(props) {

    return (
        <Dropdown
            align={"top"} jusitify={'end'}
            className={styles.buttonContainer}
            options={props.buttons}
            styles={{
                paddingLeft: '2px',
                paddingRight: '2px',
            }}
        >
            <span className="material-icons-round">apps</span>
            <ToolTip content={'Sistemas'} align={"middle"} justify={'end'}/>
        </Dropdown>
    )
}
Apps.propTypes = {

    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.any,
            disabled: PropTypes.bool,
            onClick: PropTypes.func.isRequired
        })
    )
}
