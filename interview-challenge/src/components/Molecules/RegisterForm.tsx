// import Input from '../Atom/Input'
import Paragraph from '../Atom/Paragraph'
import Link from '../Atom/Link'
import UploadInput from './UploadInput'
import { ReactNode, useState } from 'react'
import styled from '@emotion/styled'
import moment from 'moment'
import { Button, Checkbox, Form, Input, Select, DatePicker, Modal } from 'antd'
import { pPrefixList, tPrefixList } from '../../../config/InputPrefix'
import { useForm, Controller, SubmitHandler } from "react-hook-form";

const FormSectionTitle = styled(Paragraph)`
	font-size: 16px;
	text-align: start;
`

const { Option } = Select

const phonePrefix = (): ReactNode => {
	const phoneList = pPrefixList()
	const Options = phoneList.map((phoneInfo, index) => {
		return (
			<Option key={`phone-${index}`} value={phoneInfo.prefix} style={{ width: '240px' }}>
				({phoneInfo.prefix}) {phoneInfo.name}
			</Option>
		)
	})
	return (
		<Select defaultValue={null} className="select-before" style={{ width: '60px' }}>
			{Options}
		</Select>
	)
}

const countryPrefix = (): ReactNode => {
  const countryList = tPrefixList()
  const options = countryList.map((countryName, index) => {
    return (
      <Option key={`country-${index}`} value={countryName}>
        { countryName }
      </Option>
    )
  })
  return (
    <Select defaultValue={null} style={{ width: '100% '}}>
      { options }
    </Select>
  )
}

const StyledDatePicker = styled(DatePicker)`
	width: 100%;
`

interface IFormInputs {
  example: string
  deadline: string
	projectdetails: string
	uploadfile: string
	email: string
	name: string
	budget: string
	phone: string
	country: string
	lineid: string
	privacy: boolean
	marketing: boolean
}

export default () => {
	const [jobDescription, updateJobDescription] = useState('')
	const [jobExample, updatejobExample] = useState('')
	const [budget, updateBudget] = useState('')
	const [deadline, updateDeadline] = useState('')
	const [email, updateEmail] = useState('')
  const [line, updateLine] = useState('')
	const [phone, updatePhoneNumber] = useState('')
  const [privacy, updatePrivacy] = useState(false)
  const [marketing, updateMarketing] = useState(false)

	const [openDatePicker, updateOpenDatePicker] = useState(false)

	const onFinish = () => (
		Modal.success({
			title: 'เราได้รับข้อมูลของท่านเรียบร้อยแล้ว.',
			visible: true,
			content: (
				<>
					<Paragraph>ขอขอบคุณที่ไว้วางใจพวกเรา Fastwork.</Paragraph>
					<Paragraph>ท่านสามารถแจ้งหมายเลขต่อไปนี้กับเจ้าหน้าที่เพื่อติดตามสถานะของท่าน: SB029591CS</Paragraph>
					<Paragraph>ทีมงานจะติดต่อกลับเพื่อยืนยันข้อมูลภายใน 1-2 วันทำการ.</Paragraph>
					<Paragraph>หากพบข้อสงสัย สามารถติดต่อได้ที่เบอร์โทรศัพท์ 02-114-7008 จันทร์-ศุกร์ 9.30 - 22.00 น.</Paragraph>
				</>
			),
			onOk() {}
		})
	)

	const onFailed = () => (
		Modal.error({
			title: 'เกิดข้อผิดพลาด.',
			visible: true,
			content: (
				<>
					<Paragraph>เกิดข้อพลาดขึ้นระหว่างการส่งข้อมูล</Paragraph>
					<Paragraph>หมายเลขปัญหาเพื่อแจ้งให้กับผู้ดูแลระบบ: CODE:50102 </Paragraph>
					<Paragraph>หากไม่สามารถส่งข้อมูลซ้ำได้. สามารถติดต่อได้ที่เบอร์โทรศัพท์ 02-114-7008 จันทร์-ศุกร์ 9.30 - 22.00 น.</Paragraph>
				</>
			),
			onOk() {}
		})
	)

	const { handleSubmit, control, reset } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);


	return (
		<Form name="basic" labelCol={{ span: 8 }} initialValues={{ remember: true }} onSubmitCapture={handleSubmit(onSubmit)} onFinish={onFinish} onFinishFailed={onFailed} autoComplete="off">
			<FormSectionTitle color="var(--black)">รายละเอียดของงาน</FormSectionTitle>
			<>
				<Controller
					name="projectdetails"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item rules={[{ required: true, message: 'Please input Project details!' }]} style={{ display: 'inline-block', width: 'calc(100% - 116px)' }}>
							<Input.TextArea placeholder="รายละเอียดของงาน (Project Details)" value={jobDescription} onChange={(e) => updateJobDescription(e.target.value)} style={{ height: '100px', resize: 'none' }} />
						</Form.Item>
					)}
				/>
				<Controller
					name="uploadfile"
					control={control}
					defaultValue={""}
					rules={{ required: false }}
					render={() => (
						<Form.Item style={{ display: 'inline-block', width: '100px', marginLeft: '16px' }}>
							<UploadInput className="ml-auto" />
						</Form.Item>
					)}
				/>
				<Controller
					name="example"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item rules={[{ required: true, message: 'Please input Project details!' }]} style={{ display: 'inline-block', width: '100%' }}>
							<Input type="text" name="example" placeholder="ลิ้งค์ตัวอย่างผลงาน" value={jobExample} onChange={(e) => updatejobExample(e.target.value)} />
						</Form.Item>
					)}
				/>
				<Controller
					name="budget"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)'}}>
							<Input type="text" name="budget" placeholder="ราคางานที่ตั้งไว้ (ฺBudget)" value={budget} onChange={(e) => updateBudget(e.target.value)} />
						</Form.Item>
					)}
				/>
				<Controller
					name="deadline"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px' }}>
							<StyledDatePicker name="deadline" placeholder="วันที่ต้องการรับงาน" open={openDatePicker} inputReadOnly defaultValue={moment()} onChange={(_, dateString) => { updateOpenDatePicker(!openDatePicker); updateDeadline(dateString)} } />
						</Form.Item>
					)}
				/>
			</>
			<FormSectionTitle color="var(--black)">ข้อมูลติดต่อกลับ</FormSectionTitle>
      <>
				<Controller
					name="email"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item>
							<Input type="email" name="email" value={email} placeholder="อีเมล (E-mail)" onChange={(e) => updateEmail(e.target.value)} />
						</Form.Item>
					)}
				/>
				<Controller
					name="phone"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item rules={[{ required: true, message: 'Please input your phone number!' }]}>
							<Input addonBefore={phonePrefix()} value={phone} onChange={(e) => updatePhoneNumber(e.target.value)} placeholder="Phone number" style={{ width: '100%' }} />
						</Form.Item>
					)}
				/>
				<Controller
					name="country"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item rules={[{ required: true, message: 'Please input your Country!' }]}>
							{ countryPrefix() }
						</Form.Item>
					)}
				/>
				<Controller
					name="lineid"
					control={control}
					defaultValue={""}
					rules={{ required: true }}
					render={() => (
						<Form.Item rules={[{ required: true, message: 'Please input your LINE ID!' }]}>
							<Input value={line} placeholder="Line" style={{ width: '100%' }} onChange={(e) => updateLine(e.target.value)} />
						</Form.Item>
					)}
				/>
				<Controller
					name="privacy"
					control={control}
					defaultValue={false}
					rules={{ required: true }}
					render={() => (
						<Form.Item style={{ textAlign: 'start' }} rules={[{ required: true, message: 'Please Accept Privacy & Policy' }]}>
							<Checkbox checked={privacy} onChange={(e) => updatePrivacy(e.target.checked)} />
							<span style={{ marginLeft: '8px' }}>ฉันได้อ่านและยอมรับ <Link href='/'>นโยบายคุ้มครองความเป็นส่วนตัว*</Link></span>
						</Form.Item>
					)}
				/>
				<Controller
					name="marketing"
					control={control}
					defaultValue={false}
					rules={{ required: true }}
					render={() => (
						<Form.Item style={{ textAlign: 'start' }}>
							<Checkbox checked={marketing} onChange={(e) => updateMarketing(e.target.checked)} />
							<span style={{ marginLeft: '8px' }}>ฉันสนใจรับข้อมูลข่าวสาร ส่วนลด และโปรโมชันจาก Fastwork</span>
						</Form.Item>
					)}
				/>
        <Form.Item>
          <Button htmlType='submit'>ส่งรายละเอียด</Button>
        </Form.Item>
        <p>ทีมงานจะติดต่อกลับอย่างเร็วที่สุด</p>
      </>
		</Form>
	)
}
