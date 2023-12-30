import styled from 'styled-components';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';

export const Top = () => {

    const navigate = useNavigate();
    const { setUserInfo } = useContext(UserContext);

    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true })
        return navigate("/users")
    }

    const onClickUser = () => {
        setUserInfo({ isAdmin: false })
        return navigate("/users")
    }



    return (
        <SConteiner>
            <h2>This is the top page</h2>
            <SecondaryButton onClick={onClickAdmin}>Admin User</SecondaryButton>
            <SecondaryButton onClick={onClickUser}>Normal User</SecondaryButton>
        </SConteiner>
    )
}

const SConteiner = styled.div`
    text-align: center;
    
`