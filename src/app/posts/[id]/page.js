import { getPostDetails } from '@/services/postApi';
import React from 'react';

const PostDetailsPage = async ({ params }) => {
    const {title, body} = await getPostDetails(params.id);
    return (
        <div className="hero p-20">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">
                        {body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostDetailsPage;
