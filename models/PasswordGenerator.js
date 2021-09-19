const Validator = require("../Utils/Validator");
const { lowerAlphabets, upperAlphabets, numbers, symbols } = require("../constants");


/**
 * @Description Class that performs all the password generation and checkings of values
 * @author: Philane Msibi
 */

class PasswordGenerator {

    /**
     * @Description Function that assigns or defaults all values in the class to be used
     * @param: int, length, bool has_numbers, bool has_symbols, bool has_lowercase, bool has_uppercase
     * @author: Philane Msibi
     */
    constructor(length = 8, has_numbers = true, has_symbols = true, has_lowercase = true, has_uppercase = true) {
        this.password = "";
        this.allowedChars = "";
        this.setLength(length);
        this.include_numbers(has_numbers);
        this.include_symbols(has_symbols);
        this.include_lowercase(has_lowercase);
        this.include_uppercase(has_uppercase);
    }

    /**
     * @Description Function that check if the length is a integer and also assign the length to the class global
     * @param: int length
     * @author: Philane Msibi
     */
    setLength(length = 8) {

        if (Validator.is_length_valid(length)) {
            this.length = length;
        } else {
            this.length = 8;
        }
        
    }

    /**
     * @Description Function that check if the value is a boolean
     *              if when numbers have to be set removed from the global allowed chars var
     * @param: bool has_numbers
     * @author: Philane Msibi
     */
    include_numbers(has_numbers = true) {
        if (Validator.is_boolean(has_numbers, "has_numbers")) {
            this.has_numbers = has_numbers;
            if (has_numbers && !this.allowedChars.includes(numbers)) {
                this.allowedChars += numbers;
            }  else {
                if (!has_numbers && this.allowedChars.includes(numbers)) {
                    this.allowedChars = this.allowedChars.replace(numbers, "");
                }
            }
        }
            
    }

    /**
     * @Description Function that check if the value is a boolean
     *              if when numbers have to be set removed from the global allowed chars var
     * @param: bool has_numbers
     * @author: Philane Msibi
     */
    include_symbols(has_symbols = true) {
        
        if (Validator.is_boolean(has_symbols, "has_symbols")) {
            this.has_symbols = has_symbols;
            if (this.has_symbols && !this.allowedChars.includes(symbols)) {
                this.allowedChars += symbols;
            } else {
                if (!this.has_symbols && this.allowedChars.includes(symbols)) {
                    this.allowedChars = this.allowedChars.replace(symbols, "");
                }
            }
        }
            
    }

    /**
     * @Description Function that check if the value is a boolean
     *              if when numbers have to be set removed from the global allowed chars var
     * @param: bool has_numbers
     * @author: Philane Msibi
     */
    include_uppercase(has_uppercase = true) {
        
        if (Validator.is_boolean(has_uppercase, "has_uppercase")) {
            this.has_uppercase = has_uppercase;
            if (this.has_uppercase && !this.allowedChars.includes(upperAlphabets)) {
                this.allowedChars += upperAlphabets;
            } else {
                if (!this.has_uppercase && this.allowedChars.includes(upperAlphabets)) {
                    this.allowedChars = this.allowedChars.replace(upperAlphabets, "");
                }
            }
        }
    }

    /**
     * @Description Function that check if the value is a boolean
     *              if when numbers have to be set removed from the global allowed chars var
     * @param: bool has_numbers
     * @author: Philane Msibi
     */
    include_lowercase(has_lowercase = true) {
        
        if (Validator.is_boolean(has_lowercase, "has_lowercase")) {
            this.has_lowercase = has_lowercase;
            if (this.has_lowercase && !this.allowedChars.includes(lowerAlphabets)) {
                this.allowedChars += lowerAlphabets;
            } else {
                if (!this.has_lowercase && this.allowedChars.includes(lowerAlphabets)) {
                    this.allowedChars = this.allowedChars.replace(lowerAlphabets, "");
                }
            }
        }
            
    }

    /**
     * @Description Function that resets globals to recent states and generate a length-based password
     * @param: void
     * @author: Philane Msibi
     */
    generate() {

        this.allowedChars = '';
        this.setLength(this.length);
        this.include_numbers(this.has_numbers);
        this.include_symbols(this.has_symbols);
        this.include_uppercase(this.has_uppercase);
        this.include_lowercase(this.has_lowercase);

        if (this.allowedChars !== "") {
            for (let index = 0; index < this.length; index++) {
            
                this.password += this.allowedChars[Math.floor(Math.random() * this.allowedChars.length)];
                
            }
        }

        return this.password;
    }

}

module.exports = PasswordGenerator;