// ================= DATA =================

// 2025 Projects (18)
const projects2025 = [
    {
        title: "Pic-to-toon: Cartoonify your memories",
        description: "In today’s digital world, image transformation plays a crucial role in various applications, including entertainment, social media, and AI-driven enhancements. However, converting real images into cartoon-style visuals requires advanced techniques that balance artistic creativity with computational efficiency. Traditional methods often struggle to maintain key image details while simplifying colors and textures. This project aims to develop an automated cartoonization system that effectively transforms images while preserving essential features, making it suitable for creative and analytical purposes.",
        tech: "Python, TensorFlow, Cuda",
        flowchart: "Assets/Images/Projects/0/pictotoon_flowchart - Kiran K Kiran Kulal.jpg",
        image: "Assets/Images/Projects/0/Pic-to-Toon_project - Kiran K Kiran Kulal.jpg",
        circuit: "",
        github: "https://github.com/bhuvan2018/Pic-to-Toon.git"
    },
    {
        title: "Analyzing startup growth and investment trends",
        description: "The Startup Growth and Trend Analysis System is an innovative platform crafted with Python and Streamlit, designed to deliver real-time insights into the startup ecosystem in India. With the help of interactive data visualizations powered by libraries like Matplotlib, Seaborn, and Plotly, users can dive into various startups, track their growth trajectories, and scrutinize critical elements such as the top five funded startups, leading cities for funding, and popular investment types. Additionally, the system features role-based access, ensuring secure data viewing for investors and executives alike. This tool empowers stakeholders to make well-informed decisions by providing a comprehensive and visual understanding of startup trends and funding behaviors. By analyzing historical funding data, it delivers interactive charts and graphs that illuminate investments by industry, highlight active investors, detail funding rounds, and showcase regional distribution. Entrepreneurs, investors, and policymakers can leverage this platform to explore vital trends, pinpoint opportunities, and make informed choices. With its clear and engaging visualizations, the application transforms complex data into digestible insights, fostering a deeper understanding of the dynamics surrounding startup growth and funding in India.",
        tech: "Python, TensorFlow, Flask",
        flowchart: "Assets/Images/Projects/1/startup funding and analysis flow chart - krithi n.png",
        image: "Assets/Images/Projects/1/Analysing Startup Growths and Trends Project - krithi n.png",
        circuit: "",
        github: ""
    },
    {
        title: "Color Detection using OpenCV",
        description: "In today’s digital age, the ability to analyze and visualize data efficiently has become a critical skill. One of the most intriguing areas of data analysis is color detection and visualization, which has wide-ranging applications from digital art to web design and marketing. Addressing this need, the Color Detection application, developed using the Flask web framework, offers a seamless solution for detecting and analyzing colors from user uploaded images. The application allows users to upload images, which are then processed to identify the most prominent colors within the image. By using Python libraries like Pillow for image processing and Chart.js for data visualization, this project provides an interactive experience that detects color distribution and displays it through visually appealing charts and graphs. The application leverages PIL and NumPy to accurately analyze pixel data and identify dominant colors, ensuring reliable and meaningful results displayed in real-time. The system also supports both command-line and graphical user interfaces, making it suitable for different types of users. Additionally, it includes data visualization features such as bar and pie charts, enabling users to easily understand color distribution in images, making it useful for designers, artists, and visual content creators.",
        tech: "Python, Flask, OpenCV, NumPy, Pillow, Chart.js",
        flowchart: "Assets/Images/Projects/2/Color_Detection_and_Analysis_from_Images_flowchart - Nisha Ravi.png",
        image: "Assets/Images/Projects/2/Color_Detection_and_Analysis_from_Images - Nisha Ravi.png",
        circuit: "",
        github: ""
    },
    {
        title: "Student Performance Analysis",
        description: "The Student Performance Analysis System is a comprehensive and user-friendly platform designed to track, analyze, and visualize student academic performance. It replaces traditional manual methods with a structured, automated approach, ensuring improved transparency, accuracy, and efficiency. The system allows students to view their academic records—including semester marks, unit test scores, attendance rates, and technical skills (Java, Python, Web Technology, SQL)—through personalized dashboards. Teachers have secure access to update marks only for their respective subjects. Data visualization plays a central role, using bar charts, pie charts, and line graphs to clearly represent academic trends and performance metrics. Students can identify strengths and areas for improvement, while teachers can make data-informed decisions to support learning outcomes. Additional features include automated report generation, performance range analysis (score brackets such as 40-50, 30-40, etc.), and highlighting top scorers in unit tests. The system promotes secure access control and real-time data updates, ensuring data integrity. Overall, it supports structured academic monitoring and lays the foundation for future integration of predictive analytics and AI-driven insights.",
        tech: "Python, Matplotlib, NumPy, Pandas",
        flowchart: "Assets/Images/Projects/3/Student_Performance_Analysis_flowchart - Ramya K.jpeg",
        image: "Assets/Images/Projects/3/Student Performance Analysis_Project - Ramya K.PNG",
        circuit: "",
        github: "https://github.com/Vandya-mayya/student-performace-analysis.git"
    },
    {
        title: "Automated Toll Gate",
        description: "The Automatic Tollgate System is an advanced toll collection mechanism designed to improve efficiency, reduce congestion, and minimize manual intervention. The system utilizes an IR sensor to detect the arrival of a vehicle and an I2C module with an LCD display to notify the user. Payments are processed using an RFID-based system, ensuring a quick and seamless transaction. If the user has insufficient balance, the system provides an option to recharge the account using a 4x4 keypad, making it more convenient for travelers. By automating toll collection, this system enhances traffic flow, reduces delays, and improves the overall toll management process. The integration of these technologies results in a cost-effective, scalable, and efficient solution for modern toll plazas. Hardware components used include Arduino Uno, 16x2 LCD Display with I2C, RFID tag, 4x4 keypad, and breadboard with jumper wires. Software requirements include Arduino IDE and C++ programming language.",
        tech: "Arduino, C++, RFID, Embedded Systems",
        flowchart: "Assets/Images/Projects/4/automatic TollGate using RFID Tag_flowchart - Sharanya B.png",
        image: "Assets/Images/Projects/4/Automatic TollGate using RFID Tag_IoT Project - Sharanya B.jpg",
        circuit: "Assets/Images/Projects/4/Automatic TollGate using RFID Tag_circuit - Sharanya B.png",
        github: ""
    },
    {
        title: "Smart Obstacle Avoiding Vehicle",
        description: "An Obstacle Avoiding Vehicle is an autonomous robot designed to navigate through an environment while detecting and avoiding obstacles. This system uses an Arduino UNO as the central controller, which processes inputs from an Ultrasonic Sensor to measure the distance between the vehicle and nearby objects. When an obstacle is detected within a specified range, the vehicle automatically takes action such as stopping, moving backward, or turning left or right to avoid collisions. A servo motor is used to rotate the ultrasonic sensor, enabling the vehicle to scan surroundings in different directions. The L298N H-Bridge motor driver controls the movement of the vehicle's motors, allowing it to move forward, backward, or turn based on sensor input. This design ensures that the vehicle can autonomously navigate by continuously adjusting its path to avoid obstacles. Hardware components include Arduino Uno, Ultrasonic Sensor, Servo Motor, DC Motors, Motor Driver, breadboard with jumper wires, battery, and switches. Software requirements include Arduino IDE and C++ programming language.",
        tech: "Arduino, C++, Embedded Systems, IoT",
        flowchart: "Assets/Images/Projects/5/iot - Sarthak B.png",
        image: "Assets/Images/Projects/5/WhatsApp Image 2025-04-04 at 10.53.56_5aa3942f - Sarthak B.jpg",
        circuit: "Assets/Images/Projects/5/circuit - Sarthak B.jpeg",
        github: "https://github.com/Sarthak19042001/iot-mini.git"
    },
    {
        title: "Smart Parking",
        description: "The Smart Parking System is an IoT-based solution designed to automate and streamline the vehicle parking process using Arduino Uno, IR sensors, a servo motor, and an LCD display. The system detects the entry and exit of vehicles using infrared sensors placed at the entrance and exit of the parking area. When a vehicle is detected at the entrance, the system checks for available parking slots. If space is available, the servo motor automatically opens the gate, and the available slot count is updated and displayed on the LCD screen. Similarly, when a vehicle exits, the system updates the slot count accordingly. This project reduces manual intervention, prevents misuse of parking spaces, and provides real-time updates on availability. It enhances efficiency, reduces congestion, and improves user experience in crowded parking areas. The system can be implemented in malls, offices, and public parking areas, and can be further extended with cloud connectivity and mobile app integration. Hardware components include Arduino Uno, IR sensors, servo motor, LCD display with I2C, breadboard, and power supply. Software requirements include Arduino IDE and C++ programming language.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/6/Smart parking flowchart - sanath p v.png",
        image: "Assets/Images/Projects/6/Smart Parking Project - sanath p v.jpeg",
        circuit: "Assets/Images/Projects/6/Smart Parking circuit - sanath p v.png",
        github: "https://github.com/sanathpv/Smart-Parking-Iot"
    },
    {
        title: "Smart Fish Feeder",
        description: "This project presents the design and implementation of a smart fish feeder using IoT and embedded system technology. It automates the feeding process in home aquariums, addressing the issue of irregular feeding due to busy schedules. The system uses an Arduino Uno microcontroller to control a servo motor that dispenses fish food at preset intervals. The feeding schedule can be customized through serial communication based on different fish requirements. An LED indicator provides visual confirmation during feeding, while a manual ON/OFF switch ensures safe operation and prevents overfeeding. The setup is powered by an external power supply and battery, ensuring portability and uninterrupted operation during power outages. The system has been tested for reliability, efficiency, and accuracy, making it a practical solution for smart pet care. It can also be extended in the future to feed other pets like cats and dogs. Hardware components include Arduino Uno, DC motor, servo motor, motor driver, breadboard, jumper wires, and battery. Software requirements include Arduino IDE and C++ programming language.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/7/Smart_Fisher_Feeder_workflow - Shivani Rao.png",
        image: "Assets/Images/Projects/7/Smart_fish_feeder_project - Shivani Rao.jpg",
        circuit: "Assets/Images/Projects/7/smart_fish_feeder_Circuit - Shivani Rao.png",
        github: ""
    },
    {
        title: "Smart Juice Dispenser",
        description: "A Smart Dispenser is an automated device designed to dispense liquids, powders, or small solid items in a controlled and efficient manner. This project uses sensors and a microcontroller to detect user presence and dispense a predefined quantity without physical contact. It enhances hygiene, reduces waste, and improves convenience, making it suitable for healthcare, hospitality, and home environments. The system uses an Arduino Uno along with an ultrasonic sensor to detect proximity and activate a DC motor to dispense juice through a pipe mechanism. Hardware components include Arduino Uno, DC motor, ultrasonic sensor, pipe, breadboard, jumper wires, and switches. Software requirements include Arduino IDE and C++ programming language.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/8/Screenshot 2025-04-06 134115 - Ranjith shetty.png",
        image: "Assets/Images/Projects/8/Screenshot 2025-04-06 134217 - Ranjith shetty.png",
        circuit: "Assets/Images/Projects/8/Screenshot 2025-04-06 134258 - Ranjith shetty.png",
        github: ""
    },
    {
        title: "Rain Detection Alarm",
        description: "The Rain Detection Alarm is an IoT-based system designed to provide protection against unexpected rainfall. It uses a rain sensor, Arduino microcontroller, motorized shelter mechanism, and an alert system. When rain is detected, the sensor sends a signal to the controller, which activates the motor to close the shelter and triggers an alert. This ensures quick and automatic protection without manual intervention. The system supports real-time monitoring and can be integrated with mobile or cloud platforms for remote access. It is useful in balconies, parking areas, stadiums, and agricultural fields. Future improvements may include weather prediction integration and AI-based automation for proactive decision-making.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/9/Rain Detection Alarm flowchart - vibhashree bellare.png",
        image: "Assets/Images/Projects/9/Rain Detection Alarm project - vibhashree bellare.png",
        circuit: "Assets/Images/Projects/9/Rain Detection Alarm Circuit - vibhashree bellare.png",
        github: "https://github.com/Vibha608442/Rain-Detection-Alarm.git"
    },
    {
        title: "Smart Door System",
        description: "The Smart Door Lock System is an IoT-based security solution that replaces traditional keys with a password-based access system. It uses an Arduino UNO, 4x4 keypad for input, LCD display for feedback, and a servo motor to control the locking mechanism. When the correct password is entered, access is granted and the door unlocks; otherwise, access is denied. The system is low-cost, scalable, and suitable for homes and offices. Future enhancements may include biometric authentication and wireless control integration.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/10/smartdoorlock_flowchart - Lohith A.png",
        image: "Assets/Images/Projects/10/smartdoorlock_scrrenshot - Lohith A.jpg",
        circuit: "Assets/Images/Projects/10/smart door lock_cicuit diagram - Lohith A.png",
        github: ""
    },
    {
        title: "Smart Dustbin",
        description: "The Smart Dustbin is an IoT-based solution designed to promote hygiene through touch-free waste disposal. It uses an Arduino Uno, ultrasonic sensor, and servo motor to automatically open and close the lid when an object is detected. This reduces physical contact and minimizes the spread of germs. The system is simple, cost-effective, and suitable for indoor environments such as homes, offices, schools, and hospitals. It demonstrates how automation can improve everyday tasks and support a cleaner environment.",
        tech: "Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/11/Smart_dustbin_flowchart - AM YOUTUBER.jpg",
        image: "Assets/Images/Projects/11/smart_dustbin_project - AM YOUTUBER.jpg",
        circuit: "Assets/Images/Projects/11/Smart_dustbin_ circuit - AM YOUTUBER.jpg",
        github: ""
    },
    {
        title: "Real Time Object Detection with Description",
        description: "This project focuses on improving workplace safety using an IoT-based real-time detection system. It uses Arduino Uno and an ESP32 camera to capture live images and analyze them to detect whether workers are wearing personal protective equipment such as helmets and gloves. If any violation is detected, alerts are triggered immediately to notify supervisors. This automated system reduces human error, enhances safety compliance, and enables quick corrective action. It is a cost-effective solution for construction sites and industrial environments.",
        tech: "Arduino, C++, IoT, Computer Vision",
        flowchart: "Assets/Images/Projects/12/Real-Time PPE Detection using IoT_Flowchart - Latheesh K.png",
        image: "Assets/Images/Projects/12/Real-Time PPE Detection using IoT_project - Latheesh K.jpeg",
        circuit: "Assets/Images/Projects/12/Real-Time PPE Detection using IoT_circuit - Latheesh K.png",
        github: ""
    },
    {
        title: "Voice Assistant Smart Switch",
        description: "This project develops a cost-effective and energy-efficient smart home automation system using IoT. It integrates voice, web, and manual controls to enhance accessibility and convenience. The system uses a NodeMCU ESP8266 for Wi-Fi-based remote control, a Bluetooth module for local access, and a relay module to operate appliances. Voice commands are enabled through a mobile app, while manual switches ensure functionality during connectivity issues. It provides seamless and user-friendly smart home control.",
        tech: "NodeMCU, Arduino, C++, IoT, Embedded Systems",
        flowchart: "Assets/Images/Projects/13/IMG-20250405-WA0012 - Jenita dcosta.jpg",
        image: "Assets/Images/Projects/13/IMG-20250405-WA0014 - Jenita dcosta.jpg",
        circuit: "Assets/Images/Projects/13/IMG-20250405-WA0013 - Jenita dcosta.jpg",
        github: "https://github.com/hskrupa2025/Voice-Controlled-Smart-Home-System.git"
    },
    {
        title: "Smart Weather Forecasting",
        description: "This project presents an IoT-based weather monitoring system that provides real-time environmental data using sensors. It utilizes temperature, humidity, and rain sensors connected to a NodeMCU module to collect and transmit data to a central server. Users can monitor weather conditions remotely through cloud platforms. The system enables predictive analysis and helps in making informed decisions in areas like agriculture and disaster management.",
        tech: "NodeMCU, Arduino, C++, IoT",
        flowchart: "Assets/Images/Projects/14/1743857411795 - Sinchana Poojary.jpg",
        image: "Assets/Images/Projects/14/1743857596539 - Sinchana Poojary.jpg",
        circuit: "Assets/Images/Projects/14/1743857524721 - Sinchana Poojary.jpg",
        github: ""
    },
    {
        title: "Food Waste Management System",
        description: "The Food Waste Management System is an online platform that connects food donors with people in need. It allows users such as restaurants and individuals to donate excess food by providing details like type, quantity, and expiry time. NGOs and needy individuals can view and request available food. The system promotes efficient distribution, reduces food waste, and supports social responsibility with features like notifications and location-based access.",
        tech: "HTML, CSS, JavaScript, SQL, PHP",
        flowchart: "Assets/Images/Projects/15/Untitled Diagram1 - Varun M C.jpg",
        image: "Assets/Images/Projects/15/Screenshot 2025-04-05 220508 - Varun M C.png",
        circuit: "",
        github: "https://github.com/Varun601768/foodwaste.git"
    },
    {
        title: "SafeWalk: Ensuring Women Safety in Public Spaces",
        description: "SafeWalk is a technology-driven solution designed to improve women's safety in public spaces. It includes features like real-time reporting, SOS alerts, and safety zone identification. Built using modern technologies, the system integrates a mobile app with real-time insights and secure authentication. It empowers users with enhanced security, confidence, and accessibility while promoting safer environments.",
        tech: "TypeScript, Next.js, CSS, Firebase",
        flowchart: "Assets/Images/Projects/16/Safewalk_flowchart - Bhuvan Shetty.png",
        image: "Assets/Images/Projects/16/SafeWalk_project - Bhuvan Shetty.jpg",
        circuit: "",
        github: "https://github.com/bhuvan2018/safe_walk-App"
    },
    {
        title: "KSRTC Bus Notification System",
        description: "The KSRTC Bus Notification System is a web-based application that provides real-time updates on bus routes, schedules, and delays. It includes an admin module for managing routes and sending notifications, and a user module for viewing schedules and receiving alerts. With map integration, users can locate nearby bus stations easily. The system improves public transport efficiency and enhances passenger experience.",
        tech: "Java",
        flowchart: "Assets/Images/Projects/17/KSRTC_Rural_Bus _Notification_Flowchart - Vandya M.png",
        image: "Assets/Images/Projects/17/KSRTC_Rural_Bus_Notification_project - Vandya M.jpg",
        circuit: "",
        github: "https://github.com/Vandya-mayya/KSRTC_Rural_Notification_system.git"
    },
];

// 2026 Projects (29)
const projects2026 = [
    {
        title: "Your New Project",
        description: "Description here...",
        tech: "Tech stack",
        flowchart: "",
        image: "",
        circuit: "",
        github: ""
    },
    // Add remaining 28 projects here
];


// ================= LOAD PROJECTS =================

function loadProjects(year) {
    const container = document.getElementById("projectsContainer");
    container.innerHTML = "";

    const data = year === "2025" ? projects2025 : projects2026;

    data.forEach((project, index) => {
        const card = `
            <div class="project-card" onclick="openModal(${index}, '${year}')">
                <img src="${'Assets/Images/Logo.png'}">
                <h3>${project.title}</h3>
            </div>
        `;
        container.innerHTML += card;
    });
}


// ================= MODAL =================

function openModal(index, year) {
    const data = year === "2025" ? projects2025 : projects2026;
    const project = data[index];

    const modal = document.getElementById("projectModal");
    const content = document.getElementById("modalContent");

    content.innerHTML = `
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>${project.title}</h2>

        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Tech Stack:</strong> ${project.tech}</p>

        ${project.flowchart ? `<img src="${project.flowchart}" class="modal-image">` : ""}
        ${project.image ? `<img src="${project.image}" class="modal-image">` : ""}
        ${project.circuit ? `<img src="${project.circuit}" class="modal-image">` : ""}

        ${project.github ? `<p><strong>GitHub:</strong> <a href="${project.github}" target="_blank">View Code</a></p>` : ""}
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
}


// ================= EXTRA UX =================

// Close outside click
window.onclick = function (event) {
    const modal = document.getElementById("projectModal");
    if (event.target === modal) {
        closeModal();
    }
};

// ESC key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
});


// ================= DEFAULT LOAD =================
loadProjects("2025");

window.onload = function () {
    const isMobile = window.innerWidth <= 768;
    const loader = document.getElementById('loader');
    const desktopVideo = document.getElementById('desktop-loader');
    const mobileVideo = document.getElementById('mobile-loader');
    const mainContent = document.getElementById('main-content');

    if (isMobile) {
        mobileVideo.style.display = 'block';
    } else {
        desktopVideo.style.display = 'block';
    }

    // Hide loader after 5 seconds and show main content
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 5000); // 5 seconds
};

