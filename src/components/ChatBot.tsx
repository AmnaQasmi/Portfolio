import { useDisclosure } from '@mantine/hooks';
import { IconMessageDots } from '@tabler/icons-react';
import { useState } from 'react';

const ChatBot = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div className="fixed bottom-4 right-9 z-50 xs:block hidden">
                <IconMessageDots
                    size={65}
                    stroke={1.5}
                    onClick={toggle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className={`transition-transform duration-300 transform ${hovered ? 'hover:text-primaryColor scale-110' : 'text-textColor'
                        } ${opened ? '' : 'transform -scale-x-100'}`}
                />
                {opened && (
                    <div className="absolute bottom-14 right-0 w-[300px] h-[400px] bg-white shadow-lg rounded-lg overflow-hidden">
                        <iframe
                            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/11/01/20241011015618-EDJDBPD8.json"
                            title="ChatBot"
                            className="w-full h-full"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ChatBot;