import { useState } from "react"
import FloatingInput from "./FloatingInput"
import { IconArrowRight, IconTopologyStar3 } from "@tabler/icons-react";
import { Button, useMatches } from "@mantine/core";
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase";
import toast from "react-hot-toast";

const Contact = () => {

    const form = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }
    const [formData, setFormData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);

    const handleChange = (id: string, value: string) => {
        setFormData({ ...formData, [id]: value });
        setFormError({ ...formError, [id]: validateForm(id, value) })
    }
    const handleSubmit=async()=>{
        let valid=true;
        let newFormError:{[key:string]:string}={};
        for(let key in formData){
            const error=validateForm(key, formData[key]);
            if(error.length>0){
                newFormError[key]=error;
                valid=false;
            }
        }
        setFormError(newFormError);
        if(valid){
            setFormData(form);
            toast.success('Submitted Successfully!', {duration:3000});
            await addDoc(collection(db, "portfolio"), formData);
        }
        else{
            toast.error('Some error occurred!', {duration:3000})
        }
    }

    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    })
    return (
        <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0 my-10  dm-mono-medium " id="Contact">
            <h1 className="text-4xl font-bold sm-mx:text-3xl xs-mx:text-2xl text-white mb-10 text-center">
                <span className="text-primaryColor">05.&nbsp;</span>Contact
            </h1>
            <div data-aos="flip-left" data-aos-duration="800" className=" w-[70%] lg-mx:w-full border m-auto border-primaryColor shadow-[0_0_10px_0_#64ffda50] rounded-3xl p-8 flex flex-col gap-6 sm-mx:p-4" >
                <div className="text-4xl font-semibold text-white flex sm-mx:text-2xl xs-mx:text-xl ">Let&#39;s Connect&nbsp;<IconTopologyStar3 size={40} className="text-primaryColor w-10 h-10 sm-mx:w-7 sm-mx:h-7 " />
                </div>
                <FloatingInput id="name" name="Name" value={formData.name} handleChange={handleChange} error={formError.name} />
                <FloatingInput id="email" name="Email" value={formData.email} handleChange={handleChange} error={formError.email} />
                <FloatingInput id="phone" name="Phone" value={formData.phone} handleChange={handleChange} error={formError.phone} />
                <FloatingInput id="message" name="Message" value={formData.message} handleChange={handleChange} error={formError.message} />
                <Button fullWidth onClick={handleSubmit} rightSection={<IconArrowRight size={20} />} variant="filled" size={btn} radius="lg" color="#64ffda" className="!text-bgColor !font-bold ">Send</Button>

            </div>
        </div>
    )
}

export default Contact
