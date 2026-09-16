// Central content file — edit facts, dates, and links here.
// TODO: replace the GitHub URL below with your real profile once you have one handy.

export const personal = {
  name: "Shamanth S Poojary",
  role: "Embedded Firmware Engineer",
  tagline: "Bare-Metal & FreeRTOS · Peripheral Drivers · Embedded GUI",
  location: "Udupi, Karnataka, India",
  email: "shamanth25402@gmail.com",
  phone: "+91 91139 05491",
  linkedin: "https://www.linkedin.com/in/shamanth-poojary-3489631a0/",
  github: "https://github.com/shamanth-poojary", // TODO: verify/update
  summary:
    "Embedded Firmware Engineer specializing in bare-metal and FreeRTOS-based firmware development in Embedded C/C++ on ARM Cortex-M platforms, primarily STM32 and ESP32. Core work is low-level peripheral drivers and hardware abstraction layers across UART, SPI, I2C, GPIO, ADC and EEPROM/Flash, paired with embedded GUI development in LVGL and desktop tooling in Qt/C++. Owns board bring-up, firmware debugging and hardware validation end to end, using JTAG/SWD, GDB, logic analyzers and oscilloscopes.",
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
    start: "Jun 2026",
    end: "Present",
    current: true,
    stack: ["ARM Cortex-M", "RTX5", "Classic Bluetooth", "BLE", "TWS", "Audio Streaming"],
    bullets: [
      "Develop and debug TWS earbuds firmware in Embedded C on an RTX5 RTOS-based SoC platform, covering audio streaming, host connectivity, and data communication.",
      "Implemented an embedded audio pipeline for TWS earbuds, integrating SPP-based audio streaming for Android and GATT-based audio streaming for iOS to support both mobile platforms.",
      "Debug and resolve firmware and connectivity issues across the Bluetooth and audio data paths, isolating faults between protocol handling, audio streaming, and platform-specific behavior on Android and iOS.",
    ],
  },
  {
    company: "SpanIdea Systems Pvt. Ltd.",
    role: "Associate Software Engineer",
    location: "India",
    start: "Jun 2025",
    end: "May 2026",
    current: false,
    stack: ["Linux", "Yocto", "FreeRTOS", "Qt/C++", "STM32", "ESP32"],
    bullets: [
      "Developed Linux device drivers and Linux system-programming applications on Raspberry Pi and BeagleV Ahead platforms, working across the kernel and user-space boundary.",
      "Developed bare-metal and FreeRTOS-based firmware for STM32, STM32-P107, and ESP32-LyraT Mini boards, exercising on-chip peripherals and validating behavior on target hardware.",
      "Built and customized embedded Linux distributions with the Yocto Project, authoring layers and recipes and generating minimal images for target hardware.",
      "Developed GNSS receiver configuration and validation software in Qt/C++ and C.",
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
      "Developed ESP32 firmware under FreeRTOS for touchscreen-based connected devices, implementing Wi-Fi provisioning and RTC time synchronization.",
      "Implemented low-level peripheral drivers and hardware abstraction layers (HAL) for STM32 microcontrollers, covering GPIO, I2C, SPI, UART, EEPROM, and Flash memory.",
      "Designed and integrated LVGL-based embedded GUIs, including touchscreen interfacing and display driver development.",
      "Implemented BLE and BLE Mesh communication stacks and Flash drivers on Silicon Labs EFR32 wireless SoC platforms.",
      "Performed board bring-up, firmware debugging, and hardware validation using logic analyzers and oscilloscopes to isolate peripheral and signal-level issues.",
      "Conducted unit testing and firmware debugging across driver and application layers to improve system reliability and reduce defects.",
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
    label: "Firmware & RTOS",
    ref: "U2",
    items: [
      "Bare-Metal Programming",
      "FreeRTOS",
      "ARM Cortex-M Firmware Development",
      "Device Drivers",
      "Hardware Abstraction Layer (HAL)",
      "Board Bring-up",
      "BSP",
      "ISR / Interrupt Handling",
      "RTX5 RTOS",
      "Zephyr RTOS",
    ],
  },
  {
    label: "Interfaces & Buses",
    ref: "U3",
    items: [
      "UART",
      "SPI",
      "I2C",
      "GPIO",
      "ADC",
      "PWM",
      "USB",
      "EEPROM / Flash",
      "4-20mA Industrial Communication",
    ],
  },
  {
    label: "Embedded GUI",
    ref: "U4",
    items: [
      "LVGL",
      "SquareLine Studio",
      "Display Driver Integration",
      "Touchscreen (GT911)",
      "SPI/RGB Displays",
      "Qt / C++ Desktop Applications",
    ],
  },
  {
    label: "Microcontrollers & SoCs",
    ref: "U5",
    items: [
      "STM32 (STM32F1, STM32F4)",
      "ESP32 / ESP32-S3",
      "Nordic nRF5 Series",
      "Silicon Labs EFR32BG24",
      "TI CC3200",
      "Raspberry Pi / Pico",
      "BeagleV Ahead",
      "RP2040",
      "8051 / PIC",
      "Arduino (ATmega328P)",
      "MATLAB",
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
      "Firmware Debugging",
      "Hardware Validation",
      "Unit Testing",
      "Integration Testing",
      "Test Framework Development",
      "Code Review",
    ],
  },
  {
    label: "Linux & Systems",
    ref: "U7",
    items: [
      "Embedded Linux",
      "Yocto Project",
      "Kernel Cross-Compilation",
      "System Calls",
      "Multithreading",
      "IPC",
      "File Systems",
      "Shell Scripting",
    ],
  },
  {
    label: "Wireless & Connectivity",
    ref: "U8",
    items: [
      "BLE (GATT)",
      "BLE Mesh",
      "Classic Bluetooth (A2DP, HFP, SPP, RFCOMM, SDP)",
      "TWS (True Wireless Stereo) Systems",
      "Wi-Fi (802.11)",
      "MQTT",
      "TCP/IP",
    ],
  },
  {
    label: "Tools",
    ref: "U9",
    items: [
      "Git",
      "STM32CubeIDE",
      "PlatformIO",
      "Simplicity Studio",
      "Segger Embedded Studio",
      "VS Code",
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
      "Desktop GUI application built in Qt/C++ for configuring GNSS receivers over UART and rendering live navigation data, paired with a C-based automated testbench for validating multiple receiver modules.",
    bullets: [
      "Built a Qt/C++ desktop tool that configures GNSS receivers over UART and renders live navigation data, including satellite tracking, signal strength, and positional updates.",
      "Designed a C-based automated testbench for functional validation and performance evaluation of multiple GNSS receiver modules.",
      "Added feature enhancements and maintenance updates driven by results from validation runs.",
    ],
    tech: ["C", "C++", "Qt", "UART", "GNSS", "VS Code", "Segger Embedded Studio"],
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
    tech: ["ESP32", "C/C++", "FreeRTOS", "I2C", "UART", "LVGL", "SquareLine Studio", "Wi-Fi", "PlatformIO"],
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
    tech: ["STM32F1", "C/C++", "FreeRTOS", "I2C", "SPI", "UART", "EEPROM/Flash", "STM32CubeIDE"],
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
