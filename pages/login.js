import UserEntry from "../components/UserEntry";

const login = () => {
    return (
        <>
            <UserEntry 
            title="It's good to have you back"
            pitch="Welcome back! Please login to your account."
            checkBox="Remember me"
            btnText="Login"
            optionText="Not Registered yet?"
            optionAction="Create an account"
            optionDestination="/register"
            />
        </>
    );
}

export default login;