import { FC } from "react"
import { UserProfile } from "../types/userProfile"
import axios from 'axios'


type Props = {
    user: UserProfile
}


const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px"
}

export const UserCard: FC<Props> = (props) => {

    const { user } = props;


    return (
        <div style={style}>
            <dl>
                <dt>Name</dt>
                <dd>{user.name}</dd>
                <dt>Email</dt>
                <dd>{user.email}</dd>
                <dt>Address</dt>
                <dd>{user.address}</dd>
            </dl>
        </div>
    )
}