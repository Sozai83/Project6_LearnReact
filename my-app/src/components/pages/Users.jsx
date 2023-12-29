import styled from 'styled-components';
import { SearchInput } from '../molcules/SearchInput'

import { UserCard } from '../organisms/user/UserCard.jsx'


const users = [...Array(10).keys()].map((val) => {
    return (
        {
            id: val,
            name: 'Shiori' + val,
            image: 'https://source.unsplash.com/yellow-labrador-retriever-biting-yellow-tulip-flower-Sg3XwuEpybU',
            email: 'aaaa@speechSynthesis.com',
            phone: '014545643',
            company: {
                name: 'Test company'
            },
            website: 'google.com'
        }
    )
})


export const Users = () => {
    return (

        <SConteiner>
            <h2>Here are users</h2>
            <SearchInput></SearchInput>
            <SUserArea>
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SConteiner>
    )
}

const SConteiner = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    
`

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px
`