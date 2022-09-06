import {
    EditOutlined, ContainerOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { children, useState } from 'react';
import '../styles/BaseStyle.css';
import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;



const BaseLayout = () => {
 
    return (
        <Layout>
            <Sider  >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={window.location.pathname}
                >
                    <Menu.Item key="/" icon={<EditOutlined />}>
                        <Link to='/'>New Bill</Link>
                    </Menu.Item>
                    <Menu.Item key="/prevBill" icon={<ContainerOutlined />}>
                        <Link to='/prevBill'>Previous Bills</Link>
                    </Menu.Item>

                </Menu>

            </Sider>

            <Layout className="site-layout">


                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                    }}
                >
                    <h1>Invoice Solutions</h1>

                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>


    );
};

export default BaseLayout;