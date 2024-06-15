import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import useEditPic from "../../hooks/useEditPic";
import useEditProfile from "../../hooks/useEditProfile";
import useShowToast from "../../hooks/useShowToast";

const EditProfile = ({ isOpen, onClose }) => {
	const [inputs,setInputs]=useState({
		userName:"",
		fullName:"",
		bio:""
		
	})
	

	const authUser=useAuthStore(state=>state.user);
	useEffect(() => {
		// Initialize inputs with authUser values when component mounts
		if (authUser) {
			setInputs({
				userName: authUser.userName || "",
				fullName: authUser.fullName || "",
				bio: authUser.bio || "",
			});
		}
	}, [authUser]);

	const {editPic,selectedFile,setSelectedFile} = useEditPic();

	/*DELTE LATER */
	const handleSubmit= ()=>{
		console.log(inputs);
	}

	const {editProfile,isUpdating} = useEditProfile();
	const showToast= useShowToast();

	const fileref = useRef(null);

	const handleEditProfile = async() =>{
		try
		{
		await editProfile(inputs,selectedFile);
		setSelectedFile(null)
		onClose();
		
		}catch(error)
		{
			showToast("Error",error.message,"error");
		}
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay className="overlay"/>
				<ModalContent bg={"black"} boxShadow={"xl"} border={"1px solid gray"} mx={3} className="modal-content">
					<ModalHeader className="modal-header"/>
					<ModalCloseButton />
					<ModalBody className="modal-body">
						{/* Container Flex */}
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"black"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6}>
										<Center>
											<Avatar size='xl' src={selectedFile || authUser.profilePicURL} border={"2px solid white "} />
										</Center>
										<Center w='full'>
											<Button w='full' onClick={()=>fileref.current.click()}>Edit Profile Picture</Button>
										</Center>
									</Stack>
									<Input type="file" hidden ref={fileref} onChange={editPic}/>
								</FormControl>

								<FormControl className="namefull">
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} placeholder={"Full Name"} size={"sm"} type={"text"} />
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input placeholder={"Username"} value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})} size={"sm"} type={"text"} />
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Bio</FormLabel>
									<Input placeholder={"Bio"} value={inputs.bio} onChange={(e)=>setInputs({...inputs,bio:e.target.value})} size={"sm"} type={"text"} />
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={()=>{
											setSelectedFile(null);
											onClose();
										}}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
										onClick={handleEditProfile}
										isLoading={isUpdating}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;