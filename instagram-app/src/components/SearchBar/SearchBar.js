import React from 'react';
import './SearchBar.css';

let SearchBar = props =>{
    return (
        <div className = 'header'>
            <div className = 'left'>
                <i class="fab fa-instagram fa-4x"></i>
                <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' class = 'logopic'/>
            </div>
            <div className = 'center'>
                <form>
                    <input 
                        placeholder = 'Search'
                        name = 'searchBar'
                        type = 'text'
                        onChange = {props.search}
                    />
                </form> 
            </div>
            <div className = 'right'>
                <i class="far fa-compass fa-3x"></i>
                <i class="far fa-heart fa-3x"></i>
                <i class="far fa-user fa-3x"></i>
            </div>
        </div>
    )
}



export default SearchBar;