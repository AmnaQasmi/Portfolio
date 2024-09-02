import { Badge, Indicator, Modal, Image, Group, Text, Button, ScrollArea } from "@mantine/core";
import "../index.css";

const FullProjectModal = (props: any) => {
  return (
  <Modal.Root scrollAreaComponent={ScrollArea.Autosize}  size="70%" opened={props.opened} onClose={props.close} className="dm-mono-medium " radius="lg">
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl " >
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !rounded-tr-3xl !rounded-tl-3xl !border-b-0 ">
          <Modal.Title data-autofocus className="text-white !text-4xl flex gap-3 items-center !font-bold">{props.title} {props.live === true && <Badge className="flex items-center gap-1 " variant="outline" color="red" size="lg" rightSection={<Indicator color="red" position="middle-end" size={10} processing></Indicator>}>
            Live
          </Badge>}</Modal.Title>
          <Modal.CloseButton className="!bg-bgColor !text-red-600" size='md' iconSize='30px' />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !rounded-br-3xl !rounded-bl-3xl !border-t-0 ">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64ffda] "
            src={props.image}
            alt={props.image}
          />
          <Group mb="md" mt="md">
            {
              props.technologies.map((tech: string, index: number) => <Badge size="xl" key={index} variant="light" color="#64ffda">{tech}</Badge>
              )}
          </Group>
          <Text size="lg" c="dimmed" className="!text-justify ">
            {props.desc}
          </Text>
          <Group justify="space-between" mt='md' >
            <a href={props.github} target="_blank" rel="noreferrer" className="w-[48%]"><Button variant="outline" color="#64ffda" fullWidth mt="md" radius="md">
              View Code
            </Button></a>
            <a href={props.link} target="_blank" rel="noreferrer" className="w-[48%] "><Button className="!text-bgColor" variant="filled" color="#64ffda" fullWidth mt="md" radius="md">
              View Live App
            </Button></a>
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>

  )
}

export default FullProjectModal;
