function handleSubmit() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Reset error messages
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
    document.getElementById('dobError').style.display = 'none';

    let isValid = true;

    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Validate DOB
    if (!dob) {
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
    } else {
        const today = new Date();
        const birthDate = new Date(dob);
        if (birthDate >= today) {
            document.getElementById('dobError').style.display = 'block';
            isValid = false;
        }
    }

    // If all validations pass, log the data (or send to server)
    if (isValid) {
        const formData = {
            name,
            email,
            password,
            dob
        };
        console.log('Form submitted successfully:', formData);
        alert('Registration successful!');
        // Optionally, reset the form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('dob').value = '';
    }
}