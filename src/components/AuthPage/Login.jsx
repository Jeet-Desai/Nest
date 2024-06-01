import React from 'react'

const Login = () => {
  return (
    <>
        <Input placeholder="Email" type="email" value={input.email} fontSize={17} onChange={(e)=>{
                setInput({...input,email:e.target.value})
            }}/>
            <Input placeholder="Password" type="password" value={input.password} fontSize={17} onChange={(e)=>{
                setInput({...input,password:e.target.value})}}/>
            {!isLogin ? (
              <Input placeholder="Confirm Password" type="password" value={input.cpassword} fontSize={17} onChange={(e)=>{
                setInput({...input,cpassword:e.target.value})}}/>
            ) : (
              "null"
            )}
            <Button colorScheme="blue" w={"full"}>
              {isLogin ? "Login" : "Sign Up"}
            </Button>
    </>
  )
}

export default Login