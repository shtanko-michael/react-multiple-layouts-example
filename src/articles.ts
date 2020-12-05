export type Article = {
    id: string;
    title: string;
    author: string;
    authorAvatarUrl: string;
    shortDescription: string;
    views: number;
    imageUrl: string;
    date: Date;
}

const articles: Article[] = [
    {
        id: '1',
        title: 'Lorem Ipsum',
        author: 'John Doe',
        authorAvatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        views: 100,
        imageUrl: 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: new Date(2020, 1, 1)
    },
    {
        id: '2',
        title: 'Lorem Ipsum',
        author: 'John Doe',
        authorAvatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        views: 1500,
        imageUrl: 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: new Date(2020, 2, 2)
    },
    {
        id: '3',
        title: 'Lorem Ipsum',
        author: 'John Doe',
        authorAvatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        views: 666,
        imageUrl: 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: new Date(2020, 3, 3)
    },
    {
        id: '4',
        title: 'Lorem Ipsum',
        author: 'John Doe',
        authorAvatarUrl: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        views: 420,
        imageUrl: 'https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        date: new Date(2020, 4, 4)
    }
]
export default articles;