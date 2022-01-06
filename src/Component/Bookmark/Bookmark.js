import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import JobBox from '../JobBox/JobBox';

const Bookmark = () => {

    const bookmarks = useSelector(state => state.user?.user?.bookmarked)

    const navigate = useNavigate()

    return (
        <div>

            {
                bookmarks?.length ?
                    bookmarks?.map(job => <JobBox key={job._id} job={job} home={false} bookmark={true} />) :
                    <>
                        <h4>
                            Sorry nothing found in your bookmark!
                        </h4>
                        <Button onClick={() => navigate('/browseJobs')}>
                            Browse Jobs
                        </Button>
                    </>
            }

        </div>
    );
};

export default Bookmark;