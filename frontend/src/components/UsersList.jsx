import React from 'react'
import styled from 'styled-components'
import UsersCard from './UsersCard'



function UsersList() {

	return (
		<UsersListWrapper>
			<div>
				<h2>USERS IN DATABASE </h2>
			</div>
			<UsersCard />
		</UsersListWrapper>
	)
}

export default UsersList

const UsersListWrapper = styled.div`

	h2 {
		margin-bottom: 2rem;
	}

    div {
        display: flex;
    }
    
	border-radius: 10px;
	height: 80vh;
	width: 50vw;
	margin-right: 1rem;
`
