import React, { useState } from "react";
import { Breadcrumb, Typography, Space } from 'antd';
import { useParams } from 'react-router';
import data from 'articles';
import { Link } from 'react-router-dom';
import styles from './Article.module.scss';
import Avatar from 'antd/lib/avatar/avatar';

type ArticleParams = {
    id: string;
}

const Article: React.FC = () => {

    const { id } = useParams<ArticleParams>();
    const [article] = useState(data.find(x => x.id == id));

    if (!article)
        return <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/articles'>Articles</Link>
                </Breadcrumb.Item>
            </Breadcrumb>

            <Typography.Title level={3}>Article not found</Typography.Title>
        </>

    return <>
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to='/articles'>Articles</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                {article.title}
            </Breadcrumb.Item>
        </Breadcrumb>

        <div className={styles.articleWrapper}>
            <Typography.Title level={1}>{article.title}</Typography.Title>
            <Space>
                <Avatar src={article.authorAvatarUrl} size='large' />
                <div>
                    <div>{article.author}</div>
                    <div>
                        <Typography.Text type='secondary'>
                            Published {article.date.toLocaleDateString()}
                        </Typography.Text>
                    </div>
                </div>
            </Space>
            <div className={styles.articleContent}>
                <Typography.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography.Text>
            </div>
        </div>
    </>;
}

export default Article;