import { Col, Divider, Row } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import Link from '@/Atom/Link'
import styled from '@emotion/styled'

const StyledParagraph = styled.p`
  text-align: start;
  font-family: Kanit;
`

const StyledLink = styled(Link)`
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: underline !important;
  font-family: Kanit;
`

export default () => {
  return (
    <Row>
      <Col span={2}>
        <StyledParagraph>
          <InfoCircleOutlined style={{ marginRight: '8px' }}/>
        </StyledParagraph>
      </Col>
      <Col span={22}>
        <>
          <StyledParagraph>
            หากคุณเป็นฟรีแลนซ์ชาวไทยที่ต้องการลงงาน คุณสามารถ
            <StyledLink href="/">สมัครเป็นฟรีแลนซ์</StyledLink>
            เพื่อลงงานของคุณได้เลย
          </StyledParagraph>
          <Divider />
          <StyledParagraph>
            For non-Thai citizen Freelancer, see more information
            <StyledLink href="/">here</StyledLink>
            regarding our registration policy.
          </StyledParagraph>
        </>
      </Col>
    </Row>
  )
}