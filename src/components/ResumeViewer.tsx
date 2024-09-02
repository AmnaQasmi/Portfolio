import { ActionIcon, Button, Modal, ScrollArea, Tooltip } from "@mantine/core";
import { IconAdjustments, IconArrowBigDownLinesFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { Info } from "../User";

const ResumeViewer = (props: any) => {

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }


    return <Modal.Root scrollAreaComponent={ScrollArea.Autosize} opened={props.opened} onClose={props.close} size="auto" className="dm-mono-medium">
        <Modal.Overlay />
        <Modal.Content className="!rounded-3xl " >
            <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !rounded-tr-3xl !rounded-tl-3xl !border-b-0 ">
                <Modal.Title data-autofocus className="text-white !text-4xl flex gap-3 items-center !font-bold">Resume
                    <Tooltip label="Download" className="!text-bgColor" color="#64ffda" position="right" offset={5}>

                        <ActionIcon className="!text-primaryColor" variant="outline" component="a" href="/Amna_Resume.pdf" size={25} download={Info.name} color="#64ffda">
                            <IconArrowBigDownLinesFilled />
                        </ActionIcon>
                    </Tooltip>

                </Modal.Title>
                <Modal.CloseButton className="!bg-bgColor !text-red-600" size='md' iconSize='30px' />
            </Modal.Header>
            <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !rounded-br-3xl !rounded-bl-3xl !border-t-0 ">
                {/* This is how you gonna add pdf file { npm i react-pdf } */}
                <Document file="/Amna_Resume.pdf" >
                    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
            </Modal.Body>
        </Modal.Content>
    </Modal.Root>

}

export default ResumeViewer
