import { LoadingOutlined } from '@ant-design/icons'
import { Spin, SpinProps } from 'antd'


export default function SpinCustom({...props}) {
    const icon = <LoadingOutlined />;
    return (
        <Spin indicator={icon} {...props}>
            {props.children}
        </Spin>
    )
}
