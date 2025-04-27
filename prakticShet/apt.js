let Resturent = [
    { name: "Hussain Akhter", rollno: 1, class: "diploma", branch: "Computer Science" },
    { name: "Ayesha Khan", rollno: 2, class: "diploma", branch: "Electronics" },
    { name: "Sohail Raza", rollno: 3, class: "diploma", branch: "Mechanical Engineering" },
    { name: "Anika Sharma", rollno: 4, class: "diploma", branch: "Electrical Engineering" },
    { name: "Raj Kumar", rollno: 5, class: "diploma", branch: "Civil Engineering" },
    { name: "Priya Singh", rollno: 6, class: "diploma", branch: "Computer Science" },
    { name: "Vikram Gupta", rollno: 7, class: "diploma", branch: "Information Technology" },
    { name: "Sara Ali", rollno: 8, class: "diploma", branch: "Biomedical Engineering" },
    { name: "Ravi Yadav", rollno: 9, class: "diploma", branch: "Automobile Engineering" },
    { name: "Sania Mirza", rollno: 10, class: "diploma", branch: "Chemical Engineering" },
    { name: "Rohan Patil", rollno: 11, class: "diploma", branch: "Computer Science" },
    { name: "Meena Rao", rollno: 12, class: "diploma", branch: "Electronics" },
    { name: "Zahid Hussain", rollno: 13, class: "diploma", branch: "Civil Engineering" },
    { name: "Arjun Desai", rollno: 14, class: "diploma", branch: "Mechanical Engineering" },
    { name: "Fatima Sheikh", rollno: 15, class: "diploma", branch: "Computer Science" },
    { name: "Nikhil Jain", rollno: 16, class: "diploma", branch: "Electrical Engineering" },
    { name: "Pooja Verma", rollno: 17, class: "diploma", branch: "Computer Science" },
    { name: "Imran Siddiqui", rollno: 18, class: "diploma", branch: "Information Technology" },
    { name: "Sneha Patil", rollno: 19, class: "diploma", branch: "Civil Engineering" },
    { name: "Akash Sinha", rollno: 20, class: "diploma", branch: "Mechanical Engineering" },
    { name: "Kavita Joshi", rollno: 21, class: "diploma", branch: "Computer Science" },
    { name: "Faisal Khan", rollno: 22, class: "diploma", branch: "Electrical Engineering" },
    { name: "Ritika Singh", rollno: 23, class: "diploma", branch: "Biomedical Engineering" },
    { name: "Rahul Tripathi", rollno: 24, class: "diploma", branch: "Chemical Engineering" },
    { name: "Tanvi Mehta", rollno: 25, class: "diploma", branch: "Computer Science" },
    { name: "Karan Malhotra", rollno: 26, class: "diploma", branch: "Electronics" },
    { name: "Poonam Chauhan", rollno: 27, class: "diploma", branch: "Information Technology" },
    { name: "Vishal Bhardwaj", rollno: 28, class: "diploma", branch: "Civil Engineering" },
    { name: "Sakshi Aggarwal", rollno: 29, class: "diploma", branch: "Mechanical Engineering" },
    { name: "Aman Gupta", rollno: 30, class: "diploma", branch: "Computer Science" }
];

let ihtml = "";

for (let student of Details) {
    ihtml += `<div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="Student Image">
        <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">Roll Number: ${student.rollno}</p>
            <p class="card-text">Class: ${student.class}</p>
            <p class="card-text">Branch: ${student.branch}</p>
        </div>
    </div>`;
}

document.getElementById("cardContainer").innerHTML = ihtml;
