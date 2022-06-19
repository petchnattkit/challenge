import Container from '@/Atom/Container'
import Typo from '@/Atom/Typography'
import Image from '@/Atom/Image'
import Column from '@/Atom/Column'
import styled from '@emotion/styled'
import RegisterCard from '@/Organisms/RegisterCard'

const Heading3 = styled(Typo)`
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  font-size: 24px;
  line-height: 34px;
`

const Heading2 = styled(Typo)`
  margin-top: 0px !important;
  margin-bottom: 0px !important;
  font-size: 32px;
  line-height: 40px;
`

const Spacer = styled.div`
  margin-bottom: 20px;
`

const GapRight = styled.div`
  margin-right: 72px;
`

const StyledImage = styled(Image)`
  position: sticky;
  top: 60px;
`

export default () => {
  return (
    <Container flex justify='center' items='stretch'>
      <Column col={6}>
        <Heading3 level={3}>Personal Assistant Service</Heading3>
        <Heading2 level={2} color="var(--primary600)">เราหาฟรีแลนซ์ให้...แค่อึดใจเดียว</Heading2>
        <Spacer />
        <StyledImage src="/images/pa-step-th.png" alt="fastwork-process-step" width='480px' height='427px'/>
      </Column>
      <GapRight />
      <Column col={6}>
        <RegisterCard />
      </Column>
    </Container>
  )
}