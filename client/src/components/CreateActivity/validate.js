const validate = (form) => {

    let errors = {};

    if (!form.name) { //Valida stado de los campos
        errors.name = "The name cannot be empty";
    }
    
    if (form.name.length < 4) {
        errors.name = "The name must have a minimum of 4 characters"
    }

    if (form.name.length > 35) {
        errors.name = "The name must have a maximum of 35 characters"
    }

    // if (form.difficulty.length) { //Valida stado de los campos
    //     errors.difficulty = "The difficulty cannot be empty";
    // }

    if (form.difficulty > 5 ) { //Valida stado de los campos
        errors.difficulty = "Difficulty cannot be higher than 5";
    }
    
    if (form.difficulty < 1 ) { //Valida stado de los campos
        errors.difficulty = "Difficulty cannot be less than 1";
    }

    if (!form.duration) { //Valida stado de los campos
        errors.duration = "The duration cannot be empty";
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