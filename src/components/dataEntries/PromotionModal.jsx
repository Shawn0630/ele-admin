import React, { PureComponent } from 'react';
import { Button, 
         Modal, 
         Select, 
         Form,
         Input } from 'antd';
import { com } from '../../models/ele';
const PromotionType = com.ele.model.dto.ele.PromotionType;
const Option = Select.Option;
const FormItem = Form.Item;

export default Form.create()(class PromotionModal extends PureComponent {
    constructor() {
        super();
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCancel(){
        this.props.handleCancel();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { handleSubmit } = this.props;
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                handleSubmit(values.type, values.description);
            }
        });
    };

    // dont do so, form is put in props
    // componentWillReceiveProps(nextProps) {
    //     this.setInitialValues();
    // }


    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 26 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const { getFieldDecorator } = this.props.form;
        
        return <Modal
            visible={this.props.open}
            title="Add Promotion"
            onOk={this.handleConform}
            onCancel={this.handleCancel}
            footer={[
                <Button key="back" size="large" onClick={this.handleCancel}>Cancel</Button>,
                <Button key="submit" type="primary" size="large" onClick={this.handleSubmit}>
                    Add
                </Button>,
            ]} >
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="PROMOTION TITLE">
                    {getFieldDecorator('type', {
                        initialValue: PromotionType.NEW
                    })(
                        <Select style={{ width: 150 }} onChange={this.handleChange}>
                            <Option value={PromotionType.NEW}>NEW USER</Option>
                            <Option value={PromotionType.SPECIAL}>SPCIAL OFFER</Option>
                            <Option value={PromotionType.DISCOUNT}>DISCOUNT</Option>
                            <Option value={PromotionType.SUBTRACTION}>DEDUCT</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem {...formItemLayout} label="PROMOTION DETAIL">
                    {
                        getFieldDecorator('description', {
                            rules: [{
                                required: true, message: 'Please enter promotion details!',
                            }],
                            initialValue: ""
                        })(<Input />)
                    }
                </FormItem>
            </Form>
        </Modal>
    }
});
