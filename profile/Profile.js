import PropTypes from 'prop-types'
import React, {useContext, useEffect, useState} from 'react'
import styles from './styles/Profile.module.css'
import Button from "../../core/inputs/button/Button";
import ToolTip from "../../core/feedback/tooltip/ToolTip";
import {Avatar} from "@material-ui/core";
import RailContext from "../../core/navigation/rail/RailContext";
import Dropdown from "../../core/navigation/dropdown/Dropdown";
import {ExitToAppRounded} from "@material-ui/icons";

const profileTemplate = {
    name: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string
}
export default function Profile(props) {
    const [open, setOpen] = useState(false)
    const extended = useContext(RailContext)

    useEffect(() => {
        if (!props.profile || Object.keys(props.profile).length === 0)
            setOpen(false)
    }, [props.profile])


    return (
        <div
            className={styles.appsContainer}
        >
            {props.profile && Object.keys(props.profile).length > 0 ?
                <Dropdown
                    align={"top"} jusitify={'end'}
                    className={styles.buttonContainer}
                    options={[
                        {

                            label: props.profile.name,
                            icon: <Avatar style={{width: '30px', height: '30px'}} src={props.profile.image}/>,
                            onClick: () => props.redirect(0)
                        },
                        {

                            label:'Sair',
                            icon: <ExitToAppRounded/>,
                            onClick: () => props.redirect(1)
                        }
                    ]}
                    styles={{
                        paddingLeft: '2px',
                        paddingRight: '2px',
                        justifyContent: extended ? 'space-between' : 'center'
                    }}
                >

                    {extended ?
                        <>
                            <div style={{
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap'
                            }}>
                                Bem vindo
                            </div>


                            <div className={styles.overflowEllipsis}
                                 style={{maxWidth: '100%'}}>
                                {props.profile.name}
                            </div>
                        </>
                        :
                        null
                    }
                    <Avatar style={{width: '30px', height: '30px'}} src={props.profile.image}/>
                    <ToolTip content={props.profile.name}/>
                </Dropdown>

                :
                <Button
                    className={styles.buttonContainer}
                    onClick={() => props.fallbackProfileButton.onClick()}
                    styles={{
                        justifyContent: 'center',
                        minWidth: '100px',
                        gap: '8px'
                    }}
                >
                    {extended ?
                        <div>
                            {props.fallbackProfileButton.label}
                        </div>
                        :
                        null
                    }
                    {props.fallbackProfileButton.icon}
                </Button>
            }



        </div>
    )
}
Profile.propTypes = {
    redirect: PropTypes.func.isRequired,
    profile: PropTypes.shape(profileTemplate),
}
