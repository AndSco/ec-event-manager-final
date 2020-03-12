export const FORM_UPDATE = "FORM_UPDATE";
export const FORM_RESET = "FORM_RESET";

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      const updatedValues = {
        ...state.inputValues,
        [action.identifier]: action.value
      };

      const updatedValidities = {
        ...state.inputValidities,
        [action.identifier]: action.isValid
      };

      let updatedFormValidity = true;
      for (const key in updatedValidities) {
        updatedFormValidity = updatedFormValidity && updatedValidities[key];
      }

      return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        isFormValid: updatedFormValidity
      };

    case FORM_RESET: {
      const { initialState } = action;
      return initialState;
    }

    default:
      return state;
  }
};


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputValidator = (input) => {
  switch (input.type) {
    case "email":
      return emailRegex.test(input.text.toLowerCase());

    case "required": 
      return input.text.trim().length > 0;
      
    case "minLength":
      return input.text.length > input.minLength; 

    default:
      return;
  }
}

