// Get form and display elements
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var generateResumeBtn = document.getElementById('generate-resume');
// Function to generate resume based on form data
function generateResume() {
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Clear existing resume display
    resumeDisplay.innerHTML = '';
    // Create resume structure
    var nameElement = document.createElement('h2');
    nameElement.textContent = name;
    var contactElement = document.createElement('p');
    contactElement.innerHTML = "<strong>Email:</strong> ".concat(email, " | <strong>Phone:</strong> ").concat(phone);
    var educationElement = document.createElement('div');
    educationElement.innerHTML = "<h3>Education</h3><p>".concat(education, "</p>");
    var experienceElement = document.createElement('div');
    experienceElement.innerHTML = "<h3>Work Experience</h3><p>".concat(experience, "</p>");
    var skillsElement = document.createElement('div');
    skillsElement.innerHTML = '<h3>Skills</h3>';
    var skillsList = document.createElement('ul');
    skills.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill.trim();
        skillsList.appendChild(listItem);
    });
    skillsElement.appendChild(skillsList);
    // Append sections to resume display
    resumeDisplay.appendChild(nameElement);
    resumeDisplay.appendChild(contactElement);
    resumeDisplay.appendChild(educationElement);
    resumeDisplay.appendChild(experienceElement);
    resumeDisplay.appendChild(skillsElement);
}
// Event listener for the generate resume button
generateResumeBtn.addEventListener('click', generateResume);
