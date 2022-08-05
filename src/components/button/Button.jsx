export default function Button({ buttonStyle, type, text, handleClick }) {
    const signInBtnSignInPage =
        "h-10 w-40 m-1 p-1 px-4 rounded-lg border-2 bg-pumpkin font-extralight text-[15px] text-white shadow-md";
    const forgotPasswordBtn =
        "h-10 w-40 m-1 p-1 px-2 rounded-lg border-2 bg-white font-extralight text-[15px] text-pumpkin shadow-md";
    const signUpBtnSignInPage =
        "h-9 w-36 m-1 p-1 rounded-lg border-2 bg-pumpkin font-extralight text-white text-sm shadow-sm";
    const signInBtnSignUpPage =
        "h-9 w-36 m-1 p-1 rounded-lg border-2 bg-darkPurple font-extralight text-sm text-white shadow-sm";
    const signUpBtnSignUpPage =
        "h-10 w-40 m-1 p-1 rounded-lg border-2 bg-darkPurple font-extralight text-[15px] text-white shadow-sm";
    const listItemBtn =
        "h-12 w-72 md:h-14 md:w-80 lg:h-14 lg:w-96 m-1 p-1 rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm";
    const saveChangesBtn =
        "h-12 w-48 lg:h-14 lg:w-64 m-1 p-1 px-2 hover:bg-purple hover:shadow-lg rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm";
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
        <div className='p-1'>
            <button
                className={allButtons[buttonStyle]}
                onClick={handleClick}
                type={type}
            >
                {text}
            </button>
        </div>
    );
}
