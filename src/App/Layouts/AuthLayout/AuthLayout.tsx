import React from 'react';
import { Layout, Row, Col } from 'antd';
import styles from './AuthLayout.module.scss';

const AuthLayout: React.FC = ({ children }) => {
    return <Layout className={styles.authLayout}>
        <Row>
            <Col span={16}></Col>
            <Col span={8} >
                <div className={styles.rightSidebar}>
                    {children}
                </div>
            </Col>
        </Row>
    </Layout>;
}
export default AuthLayout;