import React, { useCallback, useState } from "react";
import { EyeOutlined } from '@ant-design/icons';
import { Card, Avatar, Row, Col, Space } from 'antd';
import { useHistory } from 'react-router';
import data, { Article } from 'articles';
const { Meta } = Card;

const Articles: React.FC = () => {
    const history = useHistory();
    const [articles] = useState(data);

    const goToArticle = useCallback((x: Article) => {
        history.push(`/articles/${x.id}`);
    }, []);

    return <Row gutter={[16, 16]}>
        {articles.map(x => <Col xxl={6} xl={12} lg={24} md={24}>
            <Card hoverable
                cover={<img alt="example" src={x.imageUrl} />}
                onClick={() => goToArticle(x)}>
                <Meta
                    avatar={<Avatar src={x.authorAvatarUrl} />}
                    title={x.title}
                    description={<Space direction='vertical'>
                        <div>{x.shortDescription}</div>
                        <div>
                            <Space size='small' align='center'>
                                <EyeOutlined />
                                {x.views}
                            </Space>
                        </div>
                    </Space>}
                />
            </Card>
        </Col>)}
    </Row>;
}

export default Articles;