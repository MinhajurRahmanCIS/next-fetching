import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
const page = async () => {
    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <div>
            <h1>Gallery</h1>
            {/* <Image src="/images/1.png" alt="pre" height="1080" width="1920" />
             */}
             <div>
                {
                    [1,2,3]?.map((img, i) => 
                    <Image key={i} src={`/images/${img}.png`} alt="img" height="1080" width="1920"/>)
                }
             </div>
        </div>
    );
};

export default page;