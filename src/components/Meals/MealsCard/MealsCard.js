import Link from 'next/link';
import React from 'react';

const PostsCard = ({meals}) => {
    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title">meals</h2>
                <p>meals</p>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post.id}`} className="btn btn-neutral">Like</Link>
                </div>
            </div>
        </div>
    );
};

export default PostsCard;