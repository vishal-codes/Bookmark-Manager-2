import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../../firebase/firebase-config';
import { signOut } from 'firebase/auth';

import { 
    ToolbarContainer,
    ToggleThemeBtn,
    SearchInput,
    SignOutWrapper,
    UserProfileImg,
    SignOutTxt
} from './ToolbarElements';
import { signOutAction } from '../../../actions';

const Toolbar = ({ handleSearchTerm, searchTerm, toggleTheme, theme }) => {

    const dispatch = useDispatch();
    
    const userPhoto = useSelector((state) => 
        state.auth.userPhoto
    );

    const signOutGoogle = () =>{
        signOut(auth).then(() => {
            dispatch(signOutAction());
            alert("Successfully logged out, buh byee! See you later :)");
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <ToolbarContainer>
            <ToggleThemeBtn theme={theme} onClick={toggleTheme} />
            <SearchInput 
                placeholder="🔎    Search for a bookmark..."
                value={searchTerm} 
                onChange={handleSearchTerm} 
                type="text" 
            />
            <SignOutWrapper onClick={signOutGoogle} >
                <UserProfileImg src={userPhoto} alt="user profile" />
                <SignOutTxt>Sign Out</SignOutTxt>
            </SignOutWrapper>
        </ToolbarContainer>
    );
}

export default Toolbar;
