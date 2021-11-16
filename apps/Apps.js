import React, {useState} from "react";
import styles from "./styles/Apps.module.css";
import PropTypes from 'prop-types'
import App from "./templates/App";
import Button from "../../core/inputs/button/Button";
import Modal from "../../core/navigation/modal/Modal";

export default function Apps(props) {
    const [open, setOpen] = useState(false)

    return (
        <div className={styles.appsContainer}
             onBlur={event => {
                 // if (!event.currentTarget.contains(event.relatedTarget))
                 // setOpen(false)
             }}>
            <Button
                onClick={() => {
                    setOpen(!open)
                }}
                highlight={open}
                className={styles.buttonContainer}
            >
                <span
                    className="material-icons-round">apps</span>

            </Button>
            <Modal
                variant={'fit'}
                open={open}
                handleClose={() => setOpen(false)}
                blurIntensity={0}
                className={styles.appsWrapper}
                animationStyle={'fade'}
            >

                {props.buttons.map((button, index) => (
                    <React.Fragment key={'app-button-' + index}>
                        <App {...button}/>
                    </React.Fragment>
                ))}

            </Modal>
        </div>
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
