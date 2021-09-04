import React, { useState } from 'react'
import styled from 'styled-components'

function AddUserForm() {

    const [ username, setUsername ] = useState({username: ''})


    function formControl(e) {
        e.preventDefault()

    }

	return (
		<FormWrapper>
            <h2>ADD USER TO DATABASE</h2>

			<form onSubmit={formControl} >

				<input 

                type='text' 
                onChange={(e) => setUsername({ username: e.target.value })} 
                />
                
				<button type='submit'>ADD USER</button>

			</form>

		</FormWrapper>
	)
}

export default AddUserForm

const FormWrapper = styled.div`
   margin-left: 1rem 0rem;

   h2 {
         margin: 1rem 0rem;
     }
     form {
         display: flex;

         button{
             width: auto;
         }
         


        input {
            width: 100%;
        }
     }




`
