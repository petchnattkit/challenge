import styled from '@emotion/styled'
import { Col, Row } from 'antd'
import Link from '@/Atom/Link'
import Paragraph from '@/Atom/Paragraph'
import FooterConfig from '../../config/Footer.json'
import Spacer from '@/Atom/Spacer'
import { ReactNode } from 'react'

const StyledFooter = styled.footer`
  background-color: var(--primary600);
  padding-top: 48px;
  padding-bottom: 60px;
`

const StyledRow = styled(Row)`
  max-width: 1152px;
  margin: auto;
`

const StyledList = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
`

const StyledListContainer = styled.ul`
  text-align: start;
  margin: 0px;
  padding: 0px;
`

const StyledParagraph = styled(Paragraph)`
  text-align: start;
  margin: 0px 0px 4px 0px;
  color: var(--white);
  font-weight: bold;
`

const StyledLink = styled(Link)`
  color: var(--white) !important;
  font-weight: 400;
`

const FooterNode = (): ReactNode => {
  return FooterConfig.map( (colConfig, colIndex) => {
    return (
      <Col key={`col-${colIndex}`} span={4}>
        <StyledParagraph>{ colConfig.title }</StyledParagraph>
        <StyledListContainer>
          { colConfig.child.map( (childMenu, index) => {
            return (<StyledList key={`${colConfig}-${index}`} >
              <StyledLink href={childMenu.link}>{ childMenu.title }</StyledLink>
            </StyledList>
            )
          })}
        </StyledListContainer>
      </Col>
    )
  })
}

const StyledText = styled.span`
  margin-left: 4px;
  color: var(--white);
  font-size: 14px;
`

export default () => {
  return (
    <StyledFooter>
      <StyledRow>
        { FooterNode() }
        <Col span={8}>
          <StyledParagraph>ติดต่อเรา</StyledParagraph>
          <StyledListContainer>
            <StyledList>
              <img src="/images/email-logo.png" width="14px" height="14px" loading='lazy' />
              <StyledText>hello@fastwork.co</StyledText>
            </StyledList>
            <StyledList>
              <img src="/images/messenger-logo.png" width="14px" height="14px" loading='lazy' />
              <StyledText>Facebook Messenger</StyledText>
            </StyledList>
            <StyledList>
              <img src="/images/tel-logo.png" width="14px" height="14px" loading='lazy' />
              <StyledText>02-114-7008</StyledText>
            </StyledList>
            <Spacer top={12} />
            <StyledList>
              <StyledText>จันทร์-ศุกร์ 9.30 - 22.00 น.</StyledText>
            </StyledList>
            <StyledList>
              <StyledText>เสาร์ - อาทิตย์, วันหยุดนักขัตฤกษ์ 10.00-19.00 น.</StyledText>
            </StyledList>
          </StyledListContainer>
        </Col>
      </StyledRow>
    </StyledFooter>
  )
}