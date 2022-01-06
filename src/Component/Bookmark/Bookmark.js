import React from 'react';
import { useSelector } from 'react-redux';
import JobBox from '../JobBox/JobBox';

const Bookmark = () => {

    const bookmarks = useSelector(state => state.user?.user?.bookmarked)

    return (
        <div>
            <h1>These are your bookmarks!</h1>

            {
                bookmarks?.map(job => <JobBox key={job._id} job={job} home={false} />)
            }

        </div>
    );
};

export default Bookmark;