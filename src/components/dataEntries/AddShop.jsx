import React, { Component } from 'react';
import moment from 'moment';
import { config } from '../../config';
import { Card,
         Form,
         Input,
         Tooltip,
         Icon,
         Cascader,
         Select,
         Row,
         Col,
         Button,
         Switch,
         TimePicker,
         InputNumber,
         Upload,
         Table,
         message} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import PromotionModal from './PromotionModal';
import { com } from '../../models/ele';
import { connect } from 'dva'
const ShopDetail = com.ele.model.dto.ele.ShopDetail;
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

class AddShopForm extends Component {

    constructor() {
        super();
        this.onSuccess = this.onSuccess.bind(this);
        this.addPromotion = this.addPromotion.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    state = {
        confirmDirty: false,
        loading: false,
        imageUrl: null,
        promotions: [],
        openModal: false
    };

    componentDidMount() {
        this.setInitialValues();
    }

    // button functions
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
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
    openDialog = (e) => {
        this.setState({
            openModal: true
        })
    }
    handleCancel = (e) => {
        this.setState({
            openModal: false
        })
    }
    addPromotion = (type, detail) => {
        this.setState({
            promotions: [...this.state.promotions, {
                key: this.state.promotions.length + 1,
                title: type,
                detail: detail
            }],
            openModal: false
        });
    }
    handleDelete = (index) => {
        const promotions = [...this.state.promotions]; 
        promotions.splice(index, 1);
        this.setState({
            promotions: promotions
        });
    }

    // upload function releated
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
    onStart(file) {
    }
    onSuccess(ret) {
        this.setState({
            imageUrl: `${config.apiRoot}/img/${ret}`
        })
    }
    onError(err) {
    }
    renderUploadButton() {
        return <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
        </div>;
    }

    setInitialValues = () => {
        const { form } = this.props;
        form.setFieldsValue({
            garantee: true,
            ensurance: true,
            new: true,
            exclusive: true,
            available: true,
            ontime: true,
            deliveryFee: 5,
        })
    }

    // shop Registration Form
    renderShopRegistrationForm() {
        const { getFieldDecorator } = this.props.form;
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
        const promotions = this.state.promotions;
        console.log(promotions);
        const shop = new ShopDetail.create();

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
            dataIndex: 'detail',
            key: 'detail',
            render: text => <a>{text}</a>,
        }, {
            title: 'ACTIONS',
            key: 'action',
            render: (text, record, index) => (
                <Button type="primary" shape="circle" icon="close" onClick={this.handleDelete} />
            ),
        }];

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
                                }],
                            })(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="CONTACT" hasFeedback>
                        {
                            getFieldDecorator('contact', {
                                rules: [{
                                    required: true, message: 'Please enter your contact information!',
                                }],
                            })(<Input />)
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
                            getFieldDecorator('description', {
                                rules: [{ required: true, message: 'Please enter your shop desscription!', whitespace: true }],
                            })(<Input />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="Category">
                            {
                                getFieldDecorator('category', {
                                    initialValue: ['Canada', 'Ontario', 'Waterloo'],
                                    rules: [{ 
                                        type: 'array', required: true, 
                                        message: 'Please enter your shop category' 
                                    }],
                                })(<Cascader options={residences} />)}
                        </FormItem>
                        <FormItem {...formItemLayout} label="FEATURE" className="switch">
                        {[
                            <Row gutter={8}>
                                <Col span={8}>
                                <span>BR. GUARANTEE</span>
                                {
                                    getFieldDecorator('garantee', {
                                        valuePropName: 'checked'
                                    })(<Switch size="small" />)
                                }
                                </Col>
                                <Col span={8}>
                                    <span>QUA. ENSURANCE</span>
                                    {
                                        getFieldDecorator('ensurance', {
                                            valuePropName: 'checked'
                                        })(<Switch size="small" />)
                                    }
                                </Col>
                                <Col span={8}>
                                    <span>BR. NEW</span>
                                    {
                                        getFieldDecorator('new', {
                                            valuePropName: 'checked'
                                        })(<Switch size="small" />)
                                    }
                                </Col>
                            </Row>,
                            <Row gutter={8}>
                                <Col span={8}>
                                    <span>DELI. EXCLUSIVE</span>
                                    {
                                        getFieldDecorator('exclusive', {
                                            valuePropName: 'checked'
                                        })(<Switch size="small" />)
                                    }
                                </Col>
                                <Col span={8}>
                                    <span>RECPT. AVAILABLE</span>
                                    {
                                        getFieldDecorator('available', {
                                            valuePropName: 'checked'
                                        })(<Switch size="small" />)
                                    }
                                </Col>
                                <Col span={8}>
                                    <span>ON TIME</span>
                                    {
                                        getFieldDecorator('ontime', {
                                            valuePropName: 'checked'
                                        })(<Switch size="small" />)
                                    }
                                </Col>
                            </Row>
                        ]}
                        </FormItem>
                        <FormItem {...formItemLayout} label="DELIVERY FEE">
                            {
                                getFieldDecorator('deliveryFee', {
                                })(<InputNumber min={0} max={100} />)
                            }
                           
                        </FormItem>
                        <FormItem {...formItemLayout} label="OPENING TIME ">
                                <Col span={12}>
                                <span> From </span>
                                {
                                    getFieldDecorator('openTime', {
                                        initialValue: moment('6:00', format)
                                    })(
                                    <TimePicker id={"open_time_picker"} format={format} span={12} />)
                                }
                                </Col>
                                <Col span={12}>
                                <span> End </span>
                                {
                                    getFieldDecorator('closeTime', {
                                        initialValue: moment('22:00', format)
                                    })(
                                    <TimePicker id={"close_time_picker"} format={format} span={12} />)
                                }
                                </Col>
                        </FormItem>
                        <FormItem {...formItemLayout} label="PROFILE PICT. ">
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    customRequest={this.customRequest}
                                    action={`${config.apiRoot}/img`}
                                    headers={{'X-Requested-With':null}}
                                    onStart={this.onStart}
                                    onSuccess={this.onSuccess}
                                    onError={this.onError}
                                    beforeUpload={this.beforeUpload}
                                >
                                    {this.state.imageUrl ? <img src={imageUrl} alt="avatar" className="img-preview" /> : this.renderUploadButton()}
                                </Upload>
                        </FormItem>
                        <FormItem {...formItemLayout} label="PROMOTION ">
                            <Button shape="circle" icon="plus" onClick={this.openDialog} />
                            <Table columns={columns} dataSource={this.state.promotions} />
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

    // render function
    render() {
        return <div className="gutter-example">
            <BreadcrumbCustom first="Add Data" second="Add Shop" />
            {this.state.openModal ? <PromotionModal open={this.state.openModal} handleCancel={this.handleCancel} handleSubmit={this.addPromotion} /> : null}
            {this.renderShopRegistrationForm()}
        </div>;
    }
}

const AddShop = Form.create()(AddShopForm);

export default connect(({ global, result }) => ({
    global: global,
    result: result
}))(AddShop);