import React from 'react';
import Thumbnail from '../Thumbnail';
import FlipMove from 'react-flip-move';
import ReactLoading from 'react-loading';

function Results({ requests }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {requests ? (
                requests.map((results) => (
                    <Thumbnail key={results.id} result={results} />
                ))
            ) : (
                <ReactLoading
                    type="bubbles"
                    color="#F0F8FF"
                    height={'20%'}
                    width={'20%'}
                />
            )}
        </FlipMove>
    );
}

export default Results;
