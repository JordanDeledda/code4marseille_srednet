import React from 'react';
import ClubList from "../components/clubCards/ClubList";

const Clubs = () => {
    return (
        <div>
            <div className={"home-club"}>
                <div className={"home-sub-1"}><span>CLUB</span></div>
                <div className={"home-sub-2"}></div>
                <div className={"home-sub-3"}></div>
                <div className={"home-sub-4"}></div>
                <div className={"home-sub-5-club"}></div>
                <div className={"home-sub-6"}></div>

            </div>
            <div className="input-group p-5">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div>
            <ClubList/>
        </div>
    );
};

export default Clubs;