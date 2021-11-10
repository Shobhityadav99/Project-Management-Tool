import React from 'react'
import '../css/searchbar.css'

export const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <div className="searchbar-left">
                <div className="searchbar-left-search-container">
                <input className="searchbar-left-searchbox" type="text" placeholder="Search..."></input>
                <i className="fas fa-search searchbar-left-searchicon"></i>
                </div>
            </div>
            <div className="searchbar-right">
            <i className="fas fa-calendar-alt searchbar-right-calendaricon"></i>
            <i className="fas fa-plus searchbar-right-plusicon"></i>
            <i class="fas fa-user-circle searchbar-right-usericon"></i>
            Nishchay and 4 others
            </div>
        </div>
    )
}
