import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <SFooter>
            &copy; 2021 test inc.
        </SFooter>
    )
}

const SFooter = styled.footer`
    background-color: #11999e;
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;

`