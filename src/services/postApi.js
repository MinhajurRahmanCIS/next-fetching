export const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POST_API_URL}posts`);
    const data = await res.json();
    return data;
}

export const getPostDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_POST_API_URL}posts/${id}`);
    const data = await res.json();
    return data;
}