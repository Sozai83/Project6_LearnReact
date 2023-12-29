import styled from 'styled-components'

export const Card = (props) => {

    const { children } = props;

    return (
        <SCard>{children}</SCard>
    )
}


const SCard = styled.div`
    padding: 20px 10px;
    background-color: #fff;
    box-shadow: #ddd 0px 0px 10px 2px;
    border-radius: 16px;

`