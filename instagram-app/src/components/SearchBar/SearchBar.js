import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';


const Header = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:100px;
    max-width: 1900px;
    margin: 20px  auto;
`;

const Left = styled.div`
    display:flex;    
`

const Right = styled.div`
    padding:5px;
`;

const Logopic = styled.img`
    height: 80px;
`;


const Search = styled.input`
    text-align: center;
    padding: 10px 50px;
    font-size: 30px;
    border:1px solid lightgray;
    border-radius: 4px;
`;

const Center = styled.div`
`;


let SearchBar = props => {
    return (
        <Header>
            <Left>
                <i class="fab fa-instagram fa-4x"></i>
                <Logopic src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' class='logopic' />
            </Left>
            <Center>
                    <Search
                        placeholder='Search'
                        name='searchBar'
                        type='text'
                        onChange={props.search}
                    />
            </Center>
            <Right>
                <i class="far fa-compass fa-3x"></i>
                <i class="far fa-heart fa-3x"></i>
                <i class="far fa-user fa-3x"></i>
            </Right>
        </Header>
    )
}



export default SearchBar;