import {
	Button,
	Flex,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Comment from "../ProfilePage/Comment";
import useAddComment from "../../hooks/useAddComment";

const CommentsModal = ({ isOpen, onClose,post }) => {
    const cmtRef=useRef(null)
    const [comment,setComment]=useState("")
    const [clicked,setClick]=useState(false)
    const { addComment, isCommenting } = useAddComment();
    const handleSubmit = (e)=>{
        e.preventDefault()
        addComment(post.id,comment)
        setClick(true)
        setComment("")
    }
    useEffect(()=>{
        const Scroll=()=>{
            cmtRef.current.scrollTop= cmtRef.current.scrollHeight;
        }
        if(clicked)
        {
            setTimeout(Scroll,900)
            setClick(false)
        }
        },[post.comments.length])
    // console.log(post.comments)
	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
			<ModalOverlay />
			<ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
				<ModalHeader>Comments</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
					<Flex mb={4} gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"} ref={cmtRef}>
                        {post.comments.map((cmt,id)=>(
                            // console.log(cmt);
                            <Comment key={id} comment={cmt}/>
                        ))}
                    </Flex>
					<form style={{ marginTop: "2rem" }}>
						<Input placeholder='Comment' size={"sm"} value={comment} onChange={(e)=>{
                            setComment(e.target.value)
                        }}/>
						<Flex w={"full"} justifyContent={"flex-end"}>
							<Button onClick={handleSubmit} type='submit' ml={"auto"} size={"sm"} my={4}>
								Post
							</Button>
						</Flex>
					</form>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CommentsModal;