import React from "react"
import MojoAuth from "mojoauth-web-sdk"
import SendOtp from "./SendOtp"
import Otp from "./Otp"
import UserLogin from "../../components/UserLogin"

function Entry() {
  const [step, setStep] = React.useState(1)

  //  1 Initialize and show the form
  React.useEffect(() => {
    const mojoauth = new MojoAuth("Your MojoAuth API Key", {
      language: "language_code",
      redirect_url: "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/checkemail",
      source: [
        { type: "email", feature: "magiclink" },
        
      ],
    })
    mojoauth.signIn().then(step => {
      setStep(step)
    })
  }, [step])

  return (
    <div>
     
      <div id="mojoauth-passwordless-form" />
       <Otp/>
     <SendOtp/> 
     <UserLogin/> 
      <pre>{JSON.stringify(step, null, 4)}</pre>
    </div>
  )
}

export default Entry;