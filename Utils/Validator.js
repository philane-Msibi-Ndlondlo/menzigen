
/**
 * Class that is a validator of the user input on the application
 * Author: Philane Msibi
 */

class Validator {

    constructor() {}

    
    /**
     * @Description Function that check if the length is an intenger and between 8-25 characters
     * @param: int value
     * @author: Philane Msibi
     */
    static is_length_valid(value) {

        try {

            if (Number.isInteger(value)) {
                
                if (value >= 8 && value <= 20) 
                    return true;
                else
                    throw Error("Password length must be between 8 to 25 characters");
            } else {
                throw Error("Password length must a valid number");
            }

        } catch (error) {
            console.log(error.message);
            return false;
        }

    }

    /**
     * @Description Function that check if the value is a boolean and also assign the error type message
     * @param: bool value, string error_message
     * @author: Philane Msibi
     */
    static is_boolean(value, error_message = "") {
        try {

            if (value === true || value === false)
                return true;
            else
                throw Error(`ERROR: Password ${error_message} must be true or false`);
                 
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

module.exports = Validator;