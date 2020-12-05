import React, { useCallback, useState } from "react";
import { MailOutlined, KeyOutlined } from '@ant-design/icons';
import { Input, Spin, Form, Button } from 'antd';
import { useAuth } from 'components';
import { useHistory } from 'react-router';
import wait from 'utils/wait';
import { Rule } from 'antd/lib/form';

const Login: React.FC = () => {
    const auth = useAuth();
    const [form] = Form.useForm();
    const history = useHistory();

    const [loading, setLoading] = useState(false);

    const login = useCallback(async () => {
        setLoading(true);

        // api request
        await wait(500);
        auth.login();

        history.replace(`/articles`);
        setLoading(false);
    }, []);

    const emailRules: Rule[] = [
        {
            required: true,
            message: 'Required field'
        },
        {
            type: 'email',
            message: 'Enter valid email'
        }
    ];

    const passwordRules: Rule[] = [
        {
            required: true,
            message: 'Required field'
        }
    ];

    return <Form form={form}
        onFinish={() => login()}
        layout='vertical'
        style={{ minWidth: '80%' }}>

        <Spin tip={'Loading'} spinning={loading}>
            <Form.Item label={'Email'} name="email" rules={emailRules}>
                <Input tabIndex={1} prefix={<MailOutlined />} placeholder={'Enter email'} />
            </Form.Item>

            <Form.Item label={'Password'} name="password" rules={passwordRules}>
                <Input.Password tabIndex={2} prefix={<KeyOutlined />} placeholder={'Enter password'} />
            </Form.Item>

            <Button type='primary' htmlType='submit'>
                Login
            </Button>
        </Spin>
    </Form>
}

export default Login;