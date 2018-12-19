import React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';
import style from '../style/index.less';


const {
    Header, Content, Footer, Sider
} = Layout;

@observer
class View extends React.Component {
    static propTypes = {
        store: PropTypes.shape({
            siderList: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired,
        route: PropTypes.shape({
            routes: PropTypes.arrayOf(PropTypes.shape({}))
        }).isRequired
    }


    render() {
        const { store, route } = this.props;
        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0
                }}
                >
                    <div className="logo"><Icon type="calendar" /></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
                        {store.siderList.map((item, index) => {
                            return (
                                <Menu.Item key={index.toString()} onClick={this.dealRoute}>
                                    <Icon type={item.type} />
                                    <span className="nav-text"><Link to={item.to}>{item.name}</Link></span>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '12px 12px 0', overflow: 'initial' }}>
                        {renderRoutes(route.routes)}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default View;
