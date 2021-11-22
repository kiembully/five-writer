import UserEntry from "../components/UserEntry";

const forgot = () => {
    return (
        <>
            <UserEntry 
            title="Reset your Password"
            pitch="We are here to help you to recover your password. Enter the email address you used when you joined and we'll send you instructions to reset your password."
            btnText="Submit"
            optionText="Already have an account?"
            optionAction="Login"
            optionDestination="/login"
            />
        </>
    );
}

export default forgot;