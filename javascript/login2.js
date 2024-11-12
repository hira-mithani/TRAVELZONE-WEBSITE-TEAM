function validateForm() {
    // Get form fields
    const fields = [
        { id: "firstName", label: "First Name" },
        { id: "lastName", label: "Last Name" },
        { id: "gender", label: "Gender" },
        { id: "dob", label: "Date of Birth" },
        { id: "phone", label: "Phone" },
        { id: "email", label: "Email" }
    ];
    
    let isValid = true;

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const value = inputElement.value.trim();

        
        
        if (!value || (field.id === "gender" && value === "")) {
            inputElement.classList.add("is-invalid");
            isValid = false;
        } else {
            inputElement.classList.remove("is-invalid");
        }
    });

    // Show success or error message
    if (isValid) {
        alert("Success! All Updates.");
    } else {
        alert("Please fill and Update.");
    }
}