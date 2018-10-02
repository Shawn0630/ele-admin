import React, { Component } from 'react';
import moment from 'moment';
import { Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Switch, TimePicker, InputNumber, Upload, Table, message} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { com } from "../../models/ele";
const ShopDetail = com.ele.model.dto.ele.ShopDetail;
const Promotion = com.ele.model.dto.ele.Promotion;
const FormItem = Form.Item;
const Option = Select.Option;

const residences = [{
    value: 'Canada',
    label: 'Canada',
    children: [{
        value: 'Ontario',
        label: 'Ontario',
        children: [{
            value: 'Waterloo',
            label: 'Waterloo',
        }, {
            value: 'London',
            label: 'London',
        }, {
            value: 'Toronto',
            label: 'Toronto',
        }],
    }],
    }, {
    value: 'China',
    label: 'China',
    children: [{
        value: 'Guangdong',
        label: 'Guangdong',
        children: [{
            value: 'Guangzhou',
            label: 'Guangzhou',
        }],
    }],
}];

const columns = [{
    title: 'TITLE',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
}, {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'DETAIL',
    dataIndex: 'detial',
    key: 'detial',
}, {
    title: 'ACTIONS',
    key: 'action',
    render: (text, record) => (
        <span>
            <a>Action 一 {record.name}</a>
            <span className="ant-divider" />
            <a>Delete</a>
            <span className="ant-divider" />
            <a className="ant-dropdown-link">
                More actions <Icon type="down" />
            </a>
        </span>
    ),
}];

class AddShopForm extends Component {
    state = {
        confirmDirty: false,
        loading: false
    };
    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }
    renderUploadButton() {
        return<div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
        </div>;
    }
    renderShopRegistrationForm() {
        const { getFieldDecorator } = this.props.form;
        const data = [];
        const formItemLayout = {
            labelCol: {
                xs: { span: 26 },
                sm: { span: 4},
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 20,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector" style={{ width: '60px' }}>
                <Option value="86">+86</Option>
            </Select>
        );
        const format = 'HH:mm';
        const imageUrl = this.state.imageUrl;
        const shop = new ShopDetail.create();
        shop.shopName = "test";
        shop.starNum = 4;
        console.log(shop);

        return <Row gutter={16}>
        <Col className="gutter-row" md={24}>
            <div className="gutter-box">
                <Card title="ADD SHOP" bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem {...formItemLayout} label="NAME" hasFeedback>
                        {
                            getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: 'Please enter your shop name!',
                                }],
                            })(<Input />)
                        }
                        </FormItem>
                        <FormItem {...formItemLayout} label="ADDRESS" hasFeedback>
                        {
                            getFieldDecorator('address', {
                                rules: [{
                                    required: true, message: 'Please enter your shop address!',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="CONTACT" hasFeedback>
                        {
                            getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: '请确认你的密码!',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(<Input type="password" onBlur={this.handleConfirmBlur} />)
                        }
                        </FormItem>
                        <FormItem {...formItemLayout} label={(
                            <span>DESCRIPTION&nbsp;
                                <Tooltip title="Describe your shop briefly">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )} hasFeedback
                        >
                        {
                            getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                            })(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="Category">
                            {
                                getFieldDecorator('residence', {
                                    initialValue: ['Canada', 'Ontario', 'Waterloo'],
                                    rules: [{ 
                                        type: 'array', required: true, 
                                        message: '请选择你的常住地址!' 
                                    }],
                                })(<Cascader options={residences} />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="FEATURE" className="switch">
                        {[
                            <Row gutter={8}>
                                <Col span={8}>
                                    <span>BR. GUARANTEE</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                                <Col span={8}>
                                    <span>QUA. ENSURANCE</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                                <Col span={8}>
                                    <span>BR. NEW</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                            </Row>,
                            <Row gutter={8}>
                                <Col span={8}>
                                    <span>DELI. EXCLUSIVE</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                                <Col span={8}>
                                    <span>RECPT. AVAILABLE</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                                <Col span={8}>
                                    <span>ON TIME</span>
                                    <Switch defaultChecked size="small" onChange={this.handleDisabledChange} />
                                </Col>
                            </Row>
                        ]}
                        </FormItem>
                        <FormItem {...formItemLayout} label="DELIVERY FEE">
                            <InputNumber min={0} max={100} defaultValue={5} />
                        </FormItem>
                        <FormItem {...formItemLayout} label="OPENING TIME ">
                                <Col span={12}>
                                <span> From </span>
                                <TimePicker defaultValue={moment('6:00', format)} format={format} span={12} />
                                </Col>
                                <Col span={12}>
                                <span> End </span>
                                <TimePicker defaultValue={moment('22:00', format)} format={format} span={12} />
                                </Col>
                        </FormItem>
                        <FormItem {...formItemLayout} label="PROFILE PICT. ">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload={this.beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" /> : this.renderUploadButton()}
                                </Upload>
                        </FormItem>
                        <FormItem {...formItemLayout} label="PROMOTION ">
                            <Select defaultValue="NEW" style={{ width: 150 }}>
                                <Option value={Promotion.NEW}>NEW USER</Option>
                                <Option value={Promotion.SPECIAL}>SPCIAL OFFER</Option>
                                <Option value={Promotion.DISCOUNT}>DISCOUNT</Option>
                                <Option value={Promotion.SUBTRACTION}>DEDUCT</Option>
                            </Select>
                            <Table columns={columns} dataSource={data} />
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" size="large">CREATE SHOP</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        </Col>
    </Row>
    }
    render() {
        return <div className="gutter-example">
            <BreadcrumbCustom first="Add Data" second="Add Shop" />
            {this.renderShopRegistrationForm()}
        </div>;
    }
}

const AddShop = Form.create()(AddShopForm);

export default AddShop;