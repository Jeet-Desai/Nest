import React, { useState } from 'react'
import useShowToast from './useShowToast'

const useEditPic = () => {
    const showToast=useShowToast();
    const [selectedFile,setSelectedFile]=useState(null)
    const maxLim= 2*1024*1024
    const editPic = (e) =>{
        
        const selected = e.target.files[0]
        if(selected && selected.type.startsWith("image/"))
        {
            if(selected.size > maxLim)
            {
                showToast("Error","File size must be less than 2MB","error")
                return;
            }
            else
            {
                const reader= new FileReader();
                reader.onloadend = () =>{
                    setSelectedFile(reader.result);
                }

                reader.readAsDataURL(selected);
            }
        }
        else
        {
            showToast("Error","Please select an image file","error");
            setSelectedFile(null);
        }
        
    }
    
    return {editPic,selectedFile,setSelectedFile};
}

export default useEditPic