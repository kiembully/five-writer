import UserEntry from "../components/UserEntry";

const Register = () => {
    return (
        <>
            <UserEntry 
            title="Create Account"
            pitch="Create a greate platform for Freelance Writer"
            checkBox="I have read the "
            btnText="Register"
            optionText="Already have an account?"
            optionAction="Login"
            optionDestination="/login"
            />
        </>
    );
}

export default Register;