import React, { PureComponent } from 'react';
import { Layout, notification, Icon } from 'antd';
import './style/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { connect } from 'dva';
import Routes from './routes';
const { Content, Footer } = Layout;

class App extends PureComponent {
    state = {
        collapsed: false,
    };
    componentWillMount() {
        const user = JSON.parse(localStorage.getItem('user'));
        //user && this.receiveData(user, 'auth');
        this.receiveData({a: 213}, 'auth');
        // fetchData({funcName: 'admin', stateName: 'auth'});
        this.getClientWidth();
        window.onresize = () => {
            console.log('屏幕变化了');
            this.getClientWidth();
            // console.log(document.body.clientWidth);
        }
    }
    componentDidMount() {
        const openNotification = () => {
            notification.open({
              message: '博主-Shawn',
              description: (
                  <div>
                      <p>
                          GitHub地址： <a href="https://github.com/Shawn0630" target="_blank" rel="noopener noreferrer">https://github.com/Shawn0630</a>
                      </p>
                      <p>
                          博客地址： <a href="https://Shawn0630.github.io/" target="_blank" rel="noopener noreferrer">https://Shawn0630.github.io/</a>
                      </p>
                  </div>
              ),
              icon: <Icon type="smile-circle" style={{ color: 'red' }} />,
              duration: 0,
            });
            localStorage.setItem('isFirst', JSON.stringify(true));
        };
        const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        !isFirst && openNotification();
        this.getClientWidth();
    }
    getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
        const clientWidth = document.body.clientWidth;
        this.receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    receiveData(data, category) {
        const { dispatch } = this.props;
        dispatch({
            type: "global/receiveData",
            payload: {
                data: data,
                category: category
            }
        })
    };
    getShopList() {
        const { dispatch } = this.props;
        dispatch({
            type: "result/getShopList"
        })
    }
    render() {
        // console.log(this.props.auth);
        // console.log(this.props.responsive);
        const { auth, responsive } = this.props;
        if (responsive.data == null) return <div />;

        return (
            <Layout>
                {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                <Layout style={{flexDirection: 'column'}}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                    <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                        <Routes auth={auth} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                    Ele-Admin ©{new Date().getFullYear()} Created by shawn.jiang.ca@gmail.com
                    </Footer>
                </Layout>
                
                {/* {
                    responsive.data.isMobile && (   // 手机端对滚动很慢的处理
                        <style>
                        {`
                            #root{
                                height: auto;
                            }
                        `}
                        </style>
                    )
                } */}
            </Layout>
        );
    }
}

export default connect(({ global }) => ({
    auth: global.auth,
    responsive: global.responsive
}))(App);

