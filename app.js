// ===================== LOGIN =====================
let loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        let isValid = true;
        let errors = document.getElementsByClassName("err");

        // Clear previous errors
        for (let i = 0; i < errors.length; i++) {
            errors[i].textContent = "";
        }

        // 1. Email or Phone Check
        let identifier = document.getElementById("identifier").value.trim();
        if (identifier === "") {
            errors[0].textContent = "Email or phone is required.";
            isValid = false;
        }

        // 2. Password Check
        let password = document.getElementById("password").value;
        if (password === "") {
            errors[1].textContent = "Password is required.";
            isValid = false;
        }

        // Stop submission if invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Login successful!");
        }
    });
}

// ===================== REGISTER =====================
let registerForm = document.getElementById("register-form");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        let isValid = true;
        let errors = document.getElementsByClassName("err");

        // Clear previous errors
        for (let i = 0; i < errors.length; i++) {
            errors[i].textContent = "";
        }

        // 1. Name Check
        let name = document.getElementById("fullName").value.trim();
        if (name === "") {
            errors[0].textContent = "Name is required.";
            isValid = false;
        }

        // 2. Email Check
        let email = document.getElementById("email").value.trim();
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            errors[1].textContent = "Valid email with '@' and '.' is required.";
            isValid = false;
        }

        // 3. Phone Check
        let phone = document.getElementById("phone").value.trim();
        if (phone.match(/^01[0-9]{9}$/) === null) {
            errors[2].textContent = "Phone must be 11 digits and start with 01.";
            isValid = false;
        }

        // 4. Gender Check
        let gender = document.getElementById("gender").value;
        if (gender === "") {
            errors[3].textContent = "Please select a gender.";
            isValid = false;
        }

        // 5. Date of Birth Check (18 or above)
        let dob = document.getElementById("dob").value;
        if (dob === "") {
            errors[4].textContent = "Date of birth is required.";
            isValid = false;
        } else {
            let birth = new Date(dob);
            let today = new Date();
            let age = today.getFullYear() - birth.getFullYear();
            let monthDiff = today.getMonth() - birth.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age = age - 1;
            }
            if (age < 18) {
                errors[4].textContent = "Age must be 18 or above.";
                isValid = false;
            }
        }

        // 6. NID Check
        let nid = document.getElementById("nid").value.trim();
        if (nid.match(/^[0-9]{10}$|^[0-9]{13}$|^[0-9]{17}$/) === null) {
            errors[5].textContent = "NID must be 10, 13 or 17 digits.";
            isValid = false;
        }

        // 7. Password Check
        let password = document.getElementById("password").value;
        if (password.length < 8) {
            errors[6].textContent = "Password must be at least 8 characters.";
            isValid = false;
        }

        // 8. Confirm Password Check
        let confirm = document.getElementById("confirm").value;
        if (confirm === "" || confirm !== password) {
            errors[7].textContent = "Passwords do not match.";
            isValid = false;
        }

        // Stop submission if invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Account created successfully!");
        }
    });
}

// ===================== PROVIDER =====================
let providerForm = document.getElementById("provider-form");
if (providerForm) {
    providerForm.addEventListener("submit", function (event) {
        let isValid = true;
        let errors = document.getElementsByClassName("err");

        // Clear previous errors
        for (let i = 0; i < errors.length; i++) {
            errors[i].textContent = "";
        }

        // 1. Business Name Check
        let businessName = document.getElementById("businessName").value.trim();
        if (businessName.length < 3) {
            errors[0].textContent = "Business or contact name must be at least 3 characters.";
            isValid = false;
        }

        // 2. Email Check
        let email = document.getElementById("email").value.trim();
        if (email === "" || !email.includes("@") || !email.includes(".")) {
            errors[1].textContent = "Valid email with '@' and '.' is required.";
            isValid = false;
        }

        // 3. Phone Check
        let phone = document.getElementById("phone").value.trim();
        if (phone.match(/^01[0-9]{9}$/) === null) {
            errors[2].textContent = "Phone must be 11 digits and start with 01.";
            isValid = false;
        }

        // 4. Password Check
        let password = document.getElementById("password").value;
        if (password.length < 8) {
            errors[3].textContent = "Password must be at least 8 characters.";
            isValid = false;
        }

        // Stop submission if invalid
        if (!isValid) {
            event.preventDefault();
        } else {
            alert("Provider application submitted!");
        }
    });
}

// ===================== TRANSPORT TABS =====================
let tabs = document.querySelectorAll(".tab");
if (tabs.length > 0) {
    let trips = document.querySelectorAll("#trip-list .item");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function () {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove("active");
            }
            tabs[i].classList.add("active");

            let mode = tabs[i].getAttribute("data-mode");
            for (let k = 0; k < trips.length; k++) {
                if (mode === "all" || trips[k].getAttribute("data-mode") === mode) {
                    trips[k].hidden = false;
                } else {
                    trips[k].hidden = true;
                }
            }
        });
    }
}

// ===================== HOTEL SEARCH =====================
let cityInput = document.getElementById("city");
if (cityInput) {
    cityInput.addEventListener("input", function () {
        let search = cityInput.value.trim().toLowerCase();
        let hotels = document.querySelectorAll("#hotel-list .hotel");
        let shown = 0;
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].getAttribute("data-city").includes(search)) {
                hotels[i].hidden = false;
                shown++;
            } else {
                hotels[i].hidden = true;
            }
        }
        if (shown === 0) {
            document.getElementById("no-hotels").style.display = "block";
        } else {
            document.getElementById("no-hotels").style.display = "none";
        }
    });
}