// Central content file — edit facts, dates, and links here.
// TODO: replace the GitHub URL below with your real profile once you have one handy.

export const personal = {
  name: "Shamanth S Poojary",
  role: "Embedded Firmware Engineer",
  tagline: "BLE / BT Firmware · RTOS · Bare-Metal Systems",
  location: "Udupi, Karnataka, India",
  email: "shamanth25402@gmail.com",
  phone: "+91 91139 05491",
  linkedin: "https://www.linkedin.com/in/shamanth-poojary-3489631a0/",
  github: "https://github.com/shamanth-poojary", // TODO: verify/update
  summary:
    "Embedded systems engineer with hands-on experience across firmware development, low-level driver implementation, and embedded GUI design. Currently building BLE and Bluetooth Classic firmware for consumer devices at MIVI, with a background spanning STM32, ESP32, and Silicon Labs EFR32 wireless SoCs — from board bring-up and peripheral drivers to RTOS-based application firmware.",
};

export const stats = [
  { label: "Years in Embedded", value: "2+" },
  { label: "MCU Platforms", value: "8+" },
  { label: "Core Stack", value: "C / C++ / RTOS" },
];

export const experience = [
  {
    company: "MIVI",
    role: "Firmware Engineer",
    location: "India",
    start: "Jul 2025",
    end: "Present",
    current: true,
    stack: ["TWS", "BLE", "Bluetooth Classic", "Debugging", "C/C++"],
    bullets: [
      "Developing and maintaining firmware for MIVI's TWS (True Wireless Stereo) earbuds — BLE pairing, connection stability, and audio streaming behavior.",
      "Debugging firmware issues such as pairing failures, dropped connections, and audio dropouts using logic analyzers and serial/protocol traces.",
      "Working across Bluetooth SoC firmware to track down and fix BLE/Classic coexistence and connectivity issues reported from the field.",
      "Reproducing and root-causing TWS firmware defects with hardware and QA teams ahead of release.",
    ],
  },
  {
    company: "SpanIdea Systems Pvt. Ltd.",
    role: "Associate Software Engineer",
    location: "India",
    start: "Jun 2025",
    end: "Jul 2025",
    current: false,
    stack: ["Linux", "Yocto", "FreeRTOS", "PyQt", "STM32", "ESP32"],
    bullets: [
      "Completed hands-on training in Linux system programming and Linux device driver development on Raspberry Pi and BeagleV Ahead.",
      "Worked on bare-metal and FreeRTOS-based firmware across STM32, ESP32-LyraT Mini, and STM32-P107 boards.",
      "Built and customized embedded Linux distributions using the Yocto Project, including custom layers, recipes, and minimal target images.",
      "Developed a desktop GUI application in Python (PyQt) for configuring GNSS receivers and visualizing real-time navigation data over UART.",
      "Designed a C-based automated test framework for validation and performance evaluation of GNSS receiver modules.",
    ],
  },
  {
    company: "Zilliot Technologies",
    role: "Embedded Systems Engineer",
    location: "Mangalore, India",
    start: "Jul 2024",
    end: "Jun 2025",
    current: false,
    stack: ["ESP32", "STM32", "LVGL", "BLE Mesh", "EFR32"],
    bullets: [
      "Developed embedded firmware for ESP32-based systems covering Wi-Fi provisioning, RTC synchronization, and LVGL + FreeRTOS GUI development.",
      "Implemented low-level drivers and hardware abstraction layers for STM32 microcontrollers — GPIO, I2C, SPI, UART, EEPROM, and Flash.",
      "Designed and integrated embedded GUI systems with LVGL, including touchscreen interfacing and display driver development.",
      "Worked on Silicon Labs EFR32 platforms implementing BLE and BLE Mesh communication stacks and flash drivers.",
      "Performed board bring-up, debugging, and hardware validation with logic analyzers and oscilloscopes; ran unit testing to improve reliability.",
    ],
  },
  {
    company: "SpanIdea Systems Pvt. Ltd.",
    role: "Intern",
    location: "India",
    start: "Jul 2021",
    end: "Aug 2021",
    current: false,
    stack: ["MATLAB", "GNSS", "Signal Processing"],
    bullets: [
      "Analyzed intermediate-frequency (IF) signals for GNSS systems and evaluated signal acquisition techniques.",
      "Used MATLAB to analyze correlation properties of GPS C/A codes for positioning accuracy.",
      "Built foundational knowledge in satellite communication and GNSS signal processing.",
    ],
  },
];

export const education = {
  school: "N.M.A.M. Institute of Technology",
  degree: "B.E. in Electronics & Communication Engineering",
  start: "Oct 2020",
  end: "May 2024",
  gpa: "7.1",
  coursework: [
    "Embedded Systems",
    "Microcontrollers",
    "Real-Time Systems",
    "Digital Electronics",
    "Analog Electronics",
    "Communication Systems",
    "Internet of Things (IoT)",
    "Digital Signal Processing (DSP)",
  ],
};

export const skillGroups = [
  {
    label: "Languages",
    ref: "U1",
    items: ["C (Embedded C)", "C++", "Python", "DSA"],
  },
  {
    label: "RTOS & Firmware",
    ref: "U2",
    items: [
      "FreeRTOS",
      "Bare-Metal Programming",
      "Device Drivers",
      "Board Bring-up",
      "BSP",
      "ISR / Interrupt Handling",
    ],
  },
  {
    label: "Microcontrollers & SoCs",
    ref: "U3",
    items: [
      "STM32 (Cortex-M)",
      "ESP32 / ESP32-S3",
      "Silicon Labs EFR32BG24",
      "TI CC3200",
      "Raspberry Pi / Pico",
      "8051 / PIC",
      "Arduino UNO",
    ],
  },
  {
    label: "Wireless & Protocols",
    ref: "U4",
    items: [
      "BLE",
      "BLE Mesh",
      "Bluetooth Classic",
      "Wi-Fi (802.11)",
      "I2C",
      "SPI",
      "UART",
      "MQTT",
      "TCP/IP",
    ],
  },
  {
    label: "Linux & Systems",
    ref: "U5",
    items: [
      "Embedded Linux",
      "Yocto Project",
      "Kernel Cross-Compilation",
      "Multithreading",
      "IPC",
      "Shell Scripting",
    ],
  },
  {
    label: "Debug & Validation",
    ref: "U6",
    items: [
      "JTAG / SWD",
      "GDB",
      "Logic Analyzer",
      "Oscilloscope",
      "Unit / Integration Testing",
      "Static Analysis (Pylint)",
    ],
  },
  {
    label: "Embedded GUI",
    ref: "U7",
    items: ["LVGL", "SquareLine Studio", "Touchscreen (GT911)", "SPI/RGB Displays"],
  },
  {
    label: "Tools",
    ref: "U8",
    items: [
      "Git",
      "STM32CubeIDE",
      "PlatformIO",
      "Simplicity Studio",
      "CMake / Makefiles",
      "JIRA",
    ],
  },
];

export const projects = [
  {
    id: "gnss-tool",
    name: "GNSS Receiver Configuration Tool & Validation Testbench",
    org: "SpanIdea Systems",
    period: "Jun 2025 – Jan 2026",
    status: "completed",
    description:
      "Desktop GUI application for configuring GNSS receivers and visualizing real-time navigation data over UART, paired with a C-based automated testbench for validating multiple receiver modules.",
    bullets: [
      "Interactive satellite and positional-data visualization built with PyQt5.",
      "C-based automated testbench for validation and performance evaluation.",
      "Static analysis with Pylint to keep the codebase maintainable.",
    ],
    tech: ["C", "Python", "PyQt5", "UART", "Pylint"],
  },
  {
    id: "air-quality",
    name: "Air Quality Monitoring Device",
    org: "Zilliot Technologies",
    period: "Feb 2025 – Jun 2025",
    status: "shipped",
    description:
      "ESP32-based touchscreen air quality monitor pulling live environmental data from dual sensors, with a fully custom LVGL interface.",
    bullets: [
      "Integrated SEN66 over I2C and APC1 over UART for environmental sensing.",
      "Built the LVGL GUI in SquareLine Studio and handled touchscreen events.",
      "Wi-Fi connectivity for real-time RTC sync and device configuration.",
    ],
    tech: ["ESP32", "C/C++", "I2C", "UART", "LVGL", "FreeRTOS", "Wi-Fi"],
  },
  {
    id: "flow-meter",
    name: "Industrial Flow Meter Device",
    org: "Zilliot Technologies",
    period: "Aug 2024 – Dec 2024",
    status: "shipped",
    description:
      "STM32F1 firmware for a liquid flow measurement system, including custom display drivers and peripheral abstraction for on-device diagnostics.",
    bullets: [
      "Low-level drivers for display, EEPROM/Flash, and peripheral HAL (GPIO, I2C, SPI, UART).",
      "Customized display driver and bitmap assets for measurement units and branding.",
      "Real-time data acquisition, processing, and on-device measurement display.",
    ],
    tech: ["STM32", "C/C++", "FreeRTOS", "I2C", "SPI", "UART"],
  },
  {
    id: "cogniview",
    name: "CogniView — Resolution-Responsive Surveillance",
    org: "Personal / Academic",
    period: "Oct 2023 – Apr 2024",
    status: "archived",
    description:
      "Raspberry Pi surveillance system that scales video resolution (360p–1080p) on human detection, using OpenCV for detection and face recognition.",
    bullets: [
      "Automatic resolution scaling triggered by human detection.",
      "Face recognition for target tracking with adaptive resolution logic.",
      "Deployed and validated on Embedded Linux (Raspbian).",
    ],
    tech: ["Raspberry Pi", "Embedded Linux", "Python", "OpenCV"],
  },
  {
    id: "ns2-sim",
    name: "Network Simulation using NS-2",
    org: "Academic",
    period: "Aug 2023 – Oct 2023",
    status: "archived",
    description:
      "Simulated network topology and packet communication to analyze round-trip time behavior under varying link and queue configurations.",
    bullets: [
      "Designed topology and simulated packet flow with NS-2.",
      "Analyzed RTT behavior across link/queue configurations.",
      "Visualized and debugged packet flow using NAM.",
    ],
    tech: ["NS-2", "TCL", "NAM"],
  },
];
