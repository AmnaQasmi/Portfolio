import React from "react";
import { Badge, Indicator, Modal, Image, Group, Text, Button, ScrollArea, Divider } from "@mantine/core";
import { IconHexagonLetterA } from "@tabler/icons-react";
import "../index.css";

// Custom scrollbar styles for the modal
const modalScrollbarStyles = `
  .modal-scrollbar::-webkit-scrollbar {
    width: 6px;
    background-color: #112240;
  }
  
  .modal-scrollbar::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #112240;
  }
  
  .modal-scrollbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #64FFDA;
  }
  
  .modal-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #4FD1C7;
  }
  
  /* Hide other scrollbars in the modal */
  .mantine-Modal-content::-webkit-scrollbar,
  .mantine-Modal-body::-webkit-scrollbar {
    display: none;
  }
  
  .mantine-Modal-content,
  .mantine-Modal-body {
    overflow: hidden !important;
  }
`;

const FullProjectModal = (props: any) => {
  // Add custom scrollbar styles to document
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = modalScrollbarStyles;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const projectLinks = ["Overview", "Technologies", "Features", "Links"];
  
  const projectNavLinks = () => {
    return projectLinks.map((link, index) => {
      return (
        <a 
          key={index} 
          className="text-textColor hover:text-primaryColor text-sm md:text-lg transition-colors duration-300"
          href={`#${link.toLowerCase()}`}
        > 
          <span className="text-primaryColor">0{index + 1}. </span>{link}
        </a>
      );
    });
  };

  return (
  <Modal.Root size="95%" opened={props.opened} onClose={props.close} className="dm-mono-medium" radius="lg">
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl !bg-bgColor !overflow-hidden !border-2 !border-primaryColor" >
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-b-2 !rounded-tr-3xl !rounded-tl-3xl">
          <div className="flex items-center gap-4">
            <IconHexagonLetterA
              stroke={1.25}
              size={40}
              color="#64ffda"
              className="md:block hidden"
            />
            <Modal.Title data-autofocus className="text-white !text-2xl md:!text-3xl flex gap-3 items-center !font-bold">
              {props.title} 
              {props.live === true && (
                <Badge className="flex items-center gap-1" variant="outline" color="red" size="md" rightSection={<Indicator color="red" position="middle-end" size={8} processing></Indicator>}>
                  Live
                </Badge>
              )}
            </Modal.Title>
          </div>
          <Modal.CloseButton className="!bg-bgColor !text-red-600" size='md' iconSize='30px' />
        </Modal.Header>
        
        <div className="flex flex-col md:flex-row !overflow-hidden !border-t-0 !border-b-2 !border-primaryColor !rounded-br-3xl !rounded-bl-3xl">
          {/* Sidebar */}
          <div className="w-full md:w-64 !bg-bgColor md:!border-r-2 !border-primaryColor p-4 md:p-6 h-auto md:h-[70vh] !overflow-hidden">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="mb-4 md:mb-6">
                <h3 className="text-primaryColor text-base md:text-lg font-bold mb-3 md:mb-4">Navigation</h3>
                <Divider className="!border-primaryColor mb-3 md:mb-4" />
                <div className="flex flex-col gap-2 md:gap-3">
                  {projectNavLinks()}
                </div>
              </div>
              
              <div>
                <h3 className="text-primaryColor text-base md:text-lg font-bold mb-3 md:mb-4">Quick Info</h3>
                <Divider className="!border-primaryColor mb-3 md:mb-4" />
                <div className="space-y-2 md:space-y-3">
                  <div>
                    <span className="text-textColor text-xs md:text-sm">Status: </span>
                    <span className="text-primaryColor font-medium">
                      {props.live ? "Live" : "Development"}
                    </span>
                  </div>
                  <div>
                    <span className="text-textColor text-xs md:text-sm">Technologies: </span>
                    <span className="text-primaryColor font-medium">
                      {props.technologies.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-4 md:p-6 overflow-y-auto modal-scrollbar h-[50vh] md:h-[70vh]" style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#64FFDA #112240'
          }}>
            <Image
              className="!rounded-xl !shadow-[0_0_5px_0_#64ffda] mb-6"
              src={props.image}
              alt={props.image}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            
            <div id="overview" className="mb-6 md:mb-8">
              <h3 className="text-primaryColor text-lg md:text-xl font-bold mb-3 md:mb-4">Overview</h3>
              <Text size="md" c="dimmed" className="!text-justify">
                {props.desc}
              </Text>
            </div>
            
            <div id="technologies" className="mb-6 md:mb-8">
              <h3 className="text-primaryColor text-lg md:text-xl font-bold mb-3 md:mb-4">Technologies Used</h3>
              <Group mb="md" className="flex-wrap">
                {props.technologies.map((tech: string, index: number) => (
                  <Badge size="md" key={index} variant="light" color="#64ffda">
                    {tech}
                  </Badge>
                ))}
              </Group>
            </div>
            
            <div id="features" className="mb-6 md:mb-8">
              <h3 className="text-primaryColor text-lg md:text-xl font-bold mb-3 md:mb-4">Key Features</h3>
              <Text size="md" c="dimmed" className="!text-justify">
                This project showcases modern web development practices with responsive design, 
                interactive user interface, and seamless user experience.
              </Text>
            </div>
            
            <div id="links" className="mb-6 md:mb-8">
              <h3 className="text-primaryColor text-lg md:text-xl font-bold mb-3 md:mb-4">Project Links</h3>
              <Group justify="space-between" className="flex-col sm:flex-row">
                <a href={props.github} target="_blank" rel="noreferrer" className="w-full sm:w-[48%] mb-3 sm:mb-0">
                  <Button variant="outline" color="#64ffda" fullWidth mt="md" radius="md">
                    View Code
                  </Button>
                </a>
                <a href={props.link} target="_blank" rel="noreferrer" className="w-full sm:w-[48%]">
                  <Button className="!text-bgColor" variant="filled" color="#64ffda" fullWidth mt="md" radius="md">
                    View Live App
                  </Button>
                </a>
              </Group>
            </div>
          </div>
        </div>
      </Modal.Content>
    </Modal.Root>
  )
}

export default FullProjectModal;
