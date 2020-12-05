import React, { useCallback } from "react";
import { Button, Layout, Menu } from "antd";
import styles from './BasicLayout.module.scss';
import { OrderedListOutlined } from '@ant-design/icons';
import { useAuth } from 'components';
import { useHistory } from 'react-router';

const BasicLayout: React.FC = ({ children }) => {
    const auth = useAuth();
    const history = useHistory();

    return <Layout className={styles.layout}>
        <Layout.Sider width={250}>
            <div className={styles.logo}>
                Logo
            </div>
            <Menu theme="dark" defaultSelectedKeys={['articles']}>
                <Menu.Item key='articles'
                    icon={<OrderedListOutlined />}
                    onClick={() => history.push('/articles')}>
                    Articles
                </Menu.Item>
            </Menu>
        </Layout.Sider>
        <Layout>
            <Layout.Header className={styles.header}>
                <Button type='text' onClick={() => auth.logout()}>
                    Log out
                    </Button>
            </Layout.Header>
            <Layout.Content className={styles.layoutContent}>
                {children}
            </Layout.Content>
        </Layout>
    </Layout>;
}
export default BasicLayout;