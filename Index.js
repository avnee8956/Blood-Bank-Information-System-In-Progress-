// Simple JavaScript to handle donor and receiver information

const donorDatabase = []; // In a real-world scenario, use a database

function saveDonorInfo() {
    const fullName = document.getElementById('fullName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const bloodType = document.getElementById('bloodType').value;
    const location = document.getElementById('location').value;

    if (fullName && contactNumber && bloodType && location) {
        const donorInfoList = document.getElementById('donorInfoList');
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${fullName}, Contact: ${contactNumber}, Blood Type: ${bloodType}, Location: ${location}`;
        donorInfoList.appendChild(listItem);

        // Save to the database (in-memory array in this case)
        donorDatabase.push({ fullName, contactNumber, bloodType, location });

        // Clear the form
        document.getElementById('donorInfoForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
}

function findDonor() {
    const requiredBloodType = document.getElementById('requiredBloodType').value;
    const matchedDonorList = document.getElementById('matchedDonorInfoList');
    matchedDonorList.innerHTML = ''; // Clear previous results

    if (requiredBloodType) {
        const matchedDonors = donorDatabase.filter(donor => donor.bloodType.toLowerCase() === requiredBloodType.toLowerCase());

        if (matchedDonors.length > 0) {
            matchedDonors.forEach(donor => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${donor.fullName}, Contact: ${donor.contactNumber}, Location: ${donor.location}`;
                matchedDonorList.appendChild(listItem);
            });
        } else {
            alert('No matching donors found.');
        }
    } else {
        alert('Please enter the required blood type.');
    }
}
