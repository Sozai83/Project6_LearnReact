import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molcules/user/UserIcon";

export const UserCard = (props) => {
    const { user } = props

    return (
        <Card>
            <UserIconWithName image={user.image} name={user.name} />
            <SDl>
                <dt>Mail</dt>
                <dd>{user.email}</dd>
                <dt>Phone</dt>
                <dd>{user.phone}</dd>
                <dt>Company</dt>
                <dd>{user.company.name}</dd>
                <dt>Website</dt>
                <dd>{user.website}</dd>
            </SDl>
        </Card>

    )
}

const SDl = styled.dl`
    text-align: left;
    dt{
        float: left
    }

    dd{
        padding-left: 32px;
        padding-bottom: 8px;
        overflow-wrap:  break-word;
    }

`