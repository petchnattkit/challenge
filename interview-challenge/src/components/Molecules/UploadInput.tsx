import { PlusCircleOutlined } from '@ant-design/icons'
import type { UploadProps, UploadChangeParam, UploadFile, RcFile } from 'antd/lib/upload/interface'
import { message, Upload } from 'antd'
import styled from '@emotion/styled'
import Paragraph from '@/Atom/Paragraph'
import { useState } from 'react'

const { Dragger } = Upload
const MB = 1048576


const props: UploadProps = {
	name: 'file',
	multiple: false,
	action: `${import.meta.env.VITE_BACKEND_API}/api/upload/example`,
	accept: 'image/png,image/jpg',
	showUploadList: false
}

const StyledDragger = styled(Dragger)`
  width: 100px !important;
  height: 100px !important;
  padding: 8px 10px !important;
  border: 1px dashed var(--gray500) !important;
`

const UploadHint = styled(Paragraph)`
  font-size: 12px;
  color: var(--gray800);
  width: 100%;
`

const Icon = styled.div`
  height: 21px;
  color: var(--primary500);
`

const handleUploadStatus = (info: UploadChangeParam<UploadFile<any>>, cb: (status: boolean, info: string) => void) => {
	const { status } = info.file
	if (status === 'done') {
		message.success(`${info.file.name} file uploaded successfully.`)
		cb(true, info.file.name)
	} else if (status === 'error') {
		message.error(`${info.file.name} file upload failed.`)
		cb(false, "")
	}
}

const handleBeforeUploadFile = (file: RcFile) => {
	const isImage = file.type === 'image/png' || file.type === 'image/jpg'
	const isExceedFileLimit = file.size <= 2 * MB
	if (!isImage) {
		message.error(`${file.name} is not a csv file.`);
	}
	if (!isExceedFileLimit) {
		message.error(`${file.name}'s size more than 2 MB.`);
	}
	return isImage || isExceedFileLimit || Upload.LIST_IGNORE;
}

export default ({ className }: { className: string }) => {
	const [uploadstatus, changeUploadStatus] = useState(false)
	const [fileName, changeFilename] = useState('')

	const chainFunction = (status: boolean, info: string) => {
		changeUploadStatus(status)
		changeFilename(info)
	}

	return (
		<StyledDragger {...props} className={className} onChange={(info) => handleUploadStatus(info, chainFunction)} beforeUpload={handleBeforeUploadFile}>
			<Icon>
				<PlusCircleOutlined />
			</Icon>
			{
				!uploadstatus && (<UploadHint>ตัวอย่างงาน <br/> (References) <br/> สูงสุด 2MB</UploadHint>)
			}
			{
				uploadstatus && (<UploadHint> {fileName} </UploadHint>)
			}
		</StyledDragger>
	)
}
