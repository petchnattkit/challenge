import Card from '@/Atom/Card'
import Typo from '@/Atom/Typography'
import Paragraph from '@/Atom/Paragraph'
import styled from '@emotion/styled'
import RegisterForm from '@/Molecules/RegisterForm'
import InvitationSection from '@/Molecules/InvitationForm'

const CardTitle = styled(Typo)`
	text-align: center;
	font-size: 24px !important;
	margin-top: 0px;
	margin-bottom: 0px !important;
`

const CardSubtitle = styled(Paragraph)`
	font-size: 16px !important;
`

const CardBody = styled.div`
	margin-top: 40px;
`

const StyledInvitationSection = styled(Card)`
	margin-top: 16px;
`


export default () => {
	return (
		<>
			<Card>
				<CardTitle level={2}>กรอกรายละเอียดที่คุณต้องการ</CardTitle>
				<CardSubtitle>เฉพาะลูกค้าที่ต้องการจ้างงานเท่านั้น</CardSubtitle>
				<CardBody>
					<RegisterForm />
				</CardBody>
			</Card>
			<StyledInvitationSection>
				<InvitationSection />
			</StyledInvitationSection>
		</>
	)
}
