export default function Button({ buttonStyle, type, text, handleClick }) {
    const signInBtnSignInPage =
        "h-10  w-40 p-1 px-4 rounded-lg border-1 bg-pumpkin  text-md font-normal text-white shadow-sm";
    const forgotPasswordBtn =
        "h-10 w-40 p-1 rounded-lg border-2 border-pumpkin bg-transperant font-normal text-md text-pumpkin shadow-sm";
    const signUpBtnSignInPage =
        "h-10 w-36 mb-2 p-1 bg-pumpkin border-2 border-white font-normal text-white text-md rounded-lg ";
    const signInBtnSignUpPage =
        "h-9 w-36 m-1 p-1 rounded-lg border-2 bg-darkPurple font-light text-sm text-white shadow-sm";
    const signUpBtnSignUpPage =
        "h-10 w-40 m-1 p-1 rounded-lg border-2 bg-darkPurple font-light text-[15px] text-white shadow-sm";
    const listItemBtn =
        "h-12 w-72 md:h-14 md:w-80 lg:h-14 lg:w-96 m-1 p-1 rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm";
    const saveChangesBtn =
        "h-12 w-48 lg:h-14 lg:w-64 m-1 p-1 px-2 rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm";
    const allButtons = {
        orangeSignIn: signInBtnSignInPage,
        forgotPassword: forgotPasswordBtn,
        orangeSignUp: signUpBtnSignInPage,
        purpleSignIn: signInBtnSignUpPage,
        purpleSignUp: signUpBtnSignUpPage,
        listItem: listItemBtn,
        saveChanges: saveChangesBtn,
    };
    return (
        <button
            className={allButtons[buttonStyle]}
            onClick={handleClick}
            type={type}
        >
            {text}
        </button>
    );
}
