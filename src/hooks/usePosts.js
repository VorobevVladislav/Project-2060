import { useMemo } from 'react';

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        else return posts;
    }, [sort, posts]);

    return sortedPosts;
}


export const usePosts = (post, sort, querySearch) => {
    const sortedPosts = useSortedPosts(post, sort);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(querySearch.toLowerCase()))
    }, [querySearch, sortedPosts]);

    return sortedAndSearchedPosts;
}
