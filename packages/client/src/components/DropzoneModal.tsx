import { useLanguage } from '@libs/hooks'
import { Anchor, Button, Group, Modal, ModalProps, Text } from '@mantine/core'
import { Dropzone, FileWithPath } from '@mantine/dropzone'
import { memo } from 'react'
import { IconHome } from './FontAwesomeIcons'

type DropzoneModalProps = {} & ModalProps

export default memo(({ opened, onClose }: DropzoneModalProps) => {
	const language = useLanguage()
	return (
		<Modal opened={opened} onClose={onClose} centered title="这是上传文件">
			<div className="mb-4">
				<Anchor className="pb-4">下载链接</Anchor>
			</div>

			<div className="">
				<Dropzone
					onDrop={function (files: FileWithPath[]): void {
						throw new Error('Function not implemented.')
					}}
				>
					<Dropzone.Accept>
						<IconHome />
					</Dropzone.Accept>

					<Dropzone.Idle>
						<IconHome />
					</Dropzone.Idle>

					<Text size="xl" inline>
						Drag images here or click to select files
					</Text>
					<Text size="sm" color="dimmed" inline mt={7}>
						Attach as many files as you like, each file should not exceed 5mb
					</Text>
				</Dropzone>
			</div>

			{/* button */}
			<Group position="right" className="mt-4">
				<Button size="xs" variant="outline" onClick={onClose}>
					{language.cancelButtonTip}
				</Button>
				<Button size="xs">{language.acceptButtonTip}</Button>
			</Group>
		</Modal>
	)
})
