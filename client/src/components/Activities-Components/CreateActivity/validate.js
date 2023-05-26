const validate = (form) => {

    let errors = {};

    if (!form.name) { //Valida stado de los campos
        errors.name = "The name cannot be empty";
    }
    
    if (form.name.length < 4 || form.name.length > 35) {
        errors.name = "The name must have between 4 and 35 characters"
    }

    if (!/^[A-Z]+$/i.test(form.name)) {
        errors.name = "The name must only have letters"
    }

    if (form.difficulty > 5 || form.difficulty < 1) { //Valida stado de los campos
        errors.difficulty = "Difficulty cannot be less than 1 or more than 5";
    }

    if (!/^[0-9]+$/.test(form.difficulty)) {
        errors.difficulty = "Difficulty must only have numbers"
    }

    if (!form.duration) { //Valida stado de los campos
        errors.duration = "The duration cannot be empty";
    }

    if (!/^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/.test(form.duration)) {
        errors.duration = `The duration must be in the format: "HH:MM:SS"`
    }

    if (!form.season) { //Valida stado de los campos
        errors.season = "The season cannot be empty";
    }

    if (form.countryId.length > 0) { //Valida stado de los campos
        errors.countryId = "";
    }else{
        errors.countryId = "The country cannot be empty"
    }

    return errors; //Cambia stado de los errores al terminar todas las validaciones
};

export default validate;