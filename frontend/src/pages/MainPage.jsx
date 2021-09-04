import React from 'react'
import UsersList from '../components/UsersList'
import AddUserForm from '../components/AddUserForm'
import styled from 'styled-components'

function MainPage() {
	return (
		<MainPageWrapper>
			<UsersList />
			<AddUserForm />
		</MainPageWrapper>
	)
}

export default MainPage


const MainPageWrapper = styled.div`
display: flex;




`
