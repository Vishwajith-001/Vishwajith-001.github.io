// ================= PROJECT DATA =================
// Local photos live in assets/. Projects without their own photo use free Unsplash images.
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const CATEGORY_LABELS = {
  automation: "Automation",
  embedded: "Embedded & IoT",
  cadcam: "CAD/CAM",
  robotics: "Robotics",
  rnd: "R&D",
};

// Set hidden: true to hide a project, remove it or set false to show it again.
// A hidden project is left out of the cards, filters, popups, galleries and the project count.
const allProjects = [
  {
    title: "3-DOF Chair-Mounted Motion Simulator with VR Sync",
    // Card id, so other sections can link to it (#project-motion-simulator)
    id: "motion-simulator",
    featured: true,
    badge: "Flagship · Final-year research · Completed · 2026",
    categories: ["rnd", "robotics", "embedded", "cadcam"],
    cardTags: ["R&D", "Robotics", "Embedded & IoT", "CAD/CAM"],
    image: "images/projects/motion-simulator/01-simulator-vr-loaded.jpg",
    imageAlt: "Occupant of about 92 kg seated on the motion simulator wearing a Meta Quest 2 VR headset",
    short:
      "A real-scale chair-mounted platform that produces pitch, roll and yaw, synchronised with prerecorded 360° VR video.",
    stats: [
      { value: "3-DOF", label: "real-scale pitch, roll and yaw" },
      { value: "≈92 kg", label: "loaded test, no slip" },
      { value: "2 custom", label: "ball-screw actuators built" },
    ],
    // Click-to-load YouTube demo; vertical: true gives the tall 9:16 player for a Short
    video: {
      vertical: true,
      id: "LlLCTIAuMNQ",
      url: "https://youtube.com/shorts/LlLCTIAuMNQ?feature=share",
      title: "Demo video: 3-DOF chair-mounted motion simulator with VR sync",
    },
    gallery: [
      {
        src: "images/projects/motion-simulator/01-simulator-vr-loaded.jpg",
        caption: "With a ≈92 kg occupant wearing a Meta Quest 2",
        alt: "Occupant of about 92 kg seated on the motion simulator wearing a Meta Quest 2 VR headset",
      },
      {
        src: "images/projects/motion-simulator/02-simulator-unloaded.jpg",
        caption: "Prototype, unloaded",
        alt: "The motion simulator prototype without an occupant, showing the chair, the two vertical ball-screw actuators and the base frame",
      },
      {
        src: "images/projects/motion-simulator/03-mechanical-concept.jpg",
        caption: "Concept illustration of the mechanical layout (not the built prototype)",
        alt: "Labelled concept illustration of the simulator layout: operator chair, two lifting actuators, integrated electronics bay, power supply array, motion controller board, precision frame, and the pitch, roll and yaw motions",
      },
      {
        src: "images/projects/motion-simulator/04-system-architecture.jpg",
        caption: "Hardware and software architecture",
        alt: "Architecture diagram: Meta Quest 2 to laptop GUI over the local network, Wi-Fi TCP link to the ESP32 controller with limit switches and safety input, driving two actuator drivers and a yaw motor driver",
      },
      {
        src: "images/projects/motion-simulator/05-control-gui.jpg",
        caption: "Control GUI: motion dashboard",
        alt: "Quest Motion Dashboard on the laptop, showing ESP32 wireless motor commissioning, homing, jog and software-stop controls",
      },
      {
        src: "images/projects/motion-simulator/06-quest-vr-sync-gui.jpg",
        caption: "Quest VR synchronisation interface",
        alt: "Quest-side web interface showing platform status, align and arm controls, the 360° roller-coaster video player and live telemetry from the laptop",
      },
      {
        src: "images/projects/motion-simulator/07-actuator-solidworks.jpg",
        caption: "SolidWorks model of the custom ball-screw actuator",
        alt: "SolidWorks 3D model of the custom linear actuator: stepper motor, coupling housing, ball-screw tube and rod-end joints at both ends",
      },
      {
        src: "images/projects/motion-simulator/08-custom-ball-screw-actuator.jpg",
        caption: "Fabricated custom ball-screw actuator",
        alt: "The fabricated ball-screw linear actuator lying on the floor, with its NEMA 34 stepper motor, coupling frame and rod-end joints",
      },
      {
        src: "images/projects/motion-simulator/09-simulator-front-vr.jpg",
        caption: "Front view with Meta Quest 2",
        alt: "Front view of an occupant on the motion simulator wearing a Meta Quest 2 headset",
      },
      {
        src: "images/projects/motion-simulator/10-simulator-rear-vr.jpg",
        caption: "Rear view with Meta Quest 2, actuators visible",
        alt: "Rear view of an occupant wearing a Meta Quest 2 on the simulator, with both ball-screw actuators, the yaw drive and the electronics visible",
      },
    ],
    context: [
      { label: "Type", value: "Final-year research, Uva Wellassa University" },
      { label: "Supervisors", value: "Dr. A.R.P.C.C.J. Amarasinghe and Ms. R.M.T. Lakmali" },
      { label: "Team", value: "Individual project" },
      { label: "Status", value: "Completed" },
    ],
    features: [
      "Two custom NEMA 34 ball-screw linear actuators for pitch and roll (about 370 mm physical stroke), and a separate three-wheel rotating base for yaw.",
      "An ESP32 controller with calibration, two-stage homing, centre referencing and software travel limits.",
      "A Python laptop GUI with a time-based pitch-roll-yaw motion profile.",
      "Synchronisation to the actual Meta Quest 2 playback time and state, over Wi-Fi TCP.",
    ],
    results: [
      { metric: "Actuator displacement error", value: "0.44 mm (left) and 0.40 mm (right), mean absolute" },
      { metric: "Pitch / roll error", value: "0.28° / 0.33° mean absolute difference, within ±15°" },
      { metric: "Yaw error", value: "0.47° unloaded; 1.07° with a ≈92 kg occupant (30°, 60° and 90° commands)" },
      { metric: "Home / centre repeatability", value: "0.28 mm mean centre deviation over 5 trials" },
      { metric: "Loaded test", value: "About 10 minutes with a ≈92 kg occupant, with no observable yaw stall or mechanical slip" },
      { metric: "VR synchronisation", value: "5/5 timestamp checkpoints matched; 5/5 motion events produced the expected platform response" },
      { metric: "Integrated verification", value: "16/16 system elements passed" },
    ],
    challenge:
      "Two problems appeared during assembly and testing. First, the central ball joint allowed unwanted passive twisting of the chair, so I replaced it with a universal joint that keeps pitch and roll freedom but blocks relative yaw. Second, a separating load could pull the ball screw out of its jaw coupling, so I added a retaining nut and thrust bearing to carry the axial load separately. Repeated load checks afterwards showed no further pull-out.",
    limits:
      "Results apply to this prototype and its test conditions. The control is open-loop (no encoder feedback), so positions come from calibrated pulse counts and homing. Pitch and roll were evaluated within ±15°, yaw at 30°, 60° and 90°, and loaded operation was tested for about 10 minutes with one ≈92 kg occupant.",
    tags: ["SolidWorks", "ESP32", "NEMA 34", "Ball screw", "Python", "TCP/IP", "Meta Quest 2"],
    links: [],
  },
  {
    title: "Elephant–Train Collision Prevention: mmWave Radar Prototype",
    badge: "Ongoing",
    categories: ["rnd", "embedded"],
    image: "images/projects/elephant-radar/radar-pipeline-3d.jpg",
    imageAlt:
      "Live 3D radar display from an indoor test: a tracked person labelled Human-like 86% at 4 m range, with a red DETECTED banner and the radar at the origin",
    short:
      "Research prototype that uses a 77 GHz mmWave radar at a railway bend to detect and track moving objects, so an approaching train can be warned about elephants it cannot see around the curve.",
    gallery: [
      {
        src: "images/projects/elephant-radar/radar-pipeline-3d.jpg",
        caption:
          "My live 3D radar display during an indoor test: a walking person is tracked and flagged. People stand in for elephants in these tests.",
        alt: "Live 3D radar display from an indoor test: a tracked person labelled Human-like 86% at 4 m range, with a red DETECTED banner and the radar at the origin",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "A live radar pipeline in Python for a TI AWR2944P mmWave radar: a serial data reader, a frame parser, and record/replay tools so I can test without the hardware.",
          "Object detection using DBSCAN clustering and a multi-frame tracker, which together removed most false alarms and ghost targets.",
          "A \"human-like\" scoring system and live 2D and 3D visualisation (PyQtGraph), with automated tests.",
          "A reproducible workflow: Git/GitHub, documented data analysis and tuned radar configuration files.",
        ],
      },
      {
        title: "Results (indoor tests, with people as a stand-in for elephants)",
        items: [
          "False alarms in an empty room: about 20% of frames before, 0% after.",
          "Ghost detections with one person walking: 28% before, about 3% after.",
          "A person walking towards the radar: detected in about 91–93% of frames on new, unseen recordings.",
          "A person walking across the radar is harder: 41–73%, because radar measures speed only towards or away from itself.",
        ],
      },
      {
        title: "Key learning",
        items: [
          "The radar data was sparser than expected (about one point per person), so I used tracking and filtering instead of trusting height values.",
          "Clutter removal erases still objects, which is a risk if an elephant stops on the track.",
        ],
      },
      {
        title: "Limits and next steps",
        items: [
          "Tested indoors with people only, not on elephants or outdoors yet.",
          "Next: outdoor testing, an empty-scene map to catch stationary objects, and raw-signal (micro-Doppler) analysis to train an elephant classifier.",
        ],
      },
    ],
    tags: ["Python", "TI AWR2944P", "mmWave radar", "DBSCAN", "Object tracking", "PyQtGraph", "Git/GitHub"],
    links: [{ label: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/Vishwajith-001/elephant-radar" }],
  },
  {
    title: "STM32-Based Maze Solving Robot",
    categories: ["robotics", "embedded"],
    image: "images/projects/maze-robot/maze-robot.jpg",
    imageAlt:
      "Palm-sized maze-solving robot held in a hand, built on a custom STM32 PCB with an OLED display, motor driver, geared motors with encoders and distance sensors",
    short:
      "Autonomous maze-solving robot I designed and built around a custom STM32 PCB, using a flood-fill algorithm, distance sensors and encoder feedback.",
    gallery: [
      {
        src: "images/projects/maze-robot/maze-robot.jpg",
        caption: "The robot in my hand: custom STM32 PCB, motors with encoders, distance sensors and an OLED display.",
        alt: "Palm-sized maze-solving robot held in a hand, built on a custom STM32 PCB with an OLED display, motor driver, geared motors with encoders and distance sensors",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "Designed a custom PCB for the robot that integrates an STM32 microcontroller, a motor driver, distance sensors, wheel encoders and an IMU, with an OLED display and push buttons on the board.",
          "Wrote the embedded firmware for navigation, obstacle detection, motor control and maze solving, using a flood-fill algorithm.",
          "Designed and built the whole robot on my own.",
        ],
      },
      {
        title: "Result",
        items: ["The robot solved a real maze autonomously."],
      },
      {
        title: "What it demonstrates",
        items: [
          "Taking a robot from circuit design and PCB layout to working embedded firmware on one compact platform.",
          "Motor control, sensing and a maze-solving algorithm running on a small microcontroller board.",
        ],
      },
    ],
    tags: ["STM32", "Custom PCB", "Flood fill", "Motor driver", "Distance sensors", "Encoders", "IMU", "OLED display"],
    links: [],
  },
  {
    title: "Automated Label Dispenser (Arduino)",
    categories: ["embedded", "automation"],
    image: "images/projects/label-dispenser/label-dispenser.jpg",
    // Portrait photo: show it whole on the card, over a blurred copy of itself
    fit: "contain",
    imageAlt: "Arduino-controlled automated label dispenser prototype with a label strip, steel rollers and an IR sensor",
    short:
      "Arduino-based label dispenser: set the label length with a rotary encoder, and the stepper-driven feed dispenses it, then restarts when the IR sensor sees the label taken.",
    video: {
      vertical: true,
      id: "JuwjuSYofSc",
      url: "https://youtube.com/shorts/JuwjuSYofSc",
      title: "Demo video: Arduino automated label dispenser",
    },
    gallery: [
      {
        src: "images/projects/label-dispenser/label-dispenser.jpg",
        caption: "Prototype: label strip over rollers, with the IR sensor that detects when a label is taken.",
        alt: "Arduino-controlled automated label dispenser prototype with a label strip, steel rollers and an IR sensor",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "A working prototype that dispenses adhesive labels to a length the user sets, from 2 cm to 200 cm, using a rotary encoder with live feedback on a 20x4 LCD.",
          "Arduino code that converts the chosen length into stepper-motor steps and feeds the label strip.",
          "IR-sensor logic: the machine waits until the dispensed label is taken, then automatically dispenses the next one, with software debouncing on the encoder button and the sensor.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Manual label handling is slow and inconsistent. This shows how a low-cost controller can automate dispensing for packaging and garment labelling.",
        ],
      },
      {
        title: "Challenges and limits",
        items: [
          "Step length had to be calibrated for label thickness and grip; IR sensor placement affects pickup detection; an unstable power supply can cause timing problems.",
          "Prototype only: no label counter or safety enclosure yet, and not tested on a production line.",
          "Planned improvements: label counter, load-cell pickup detection, a safer enclosure, and wireless control.",
        ],
      },
    ],
    tags: ["Arduino UNO", "Stepper motor", "Rotary encoder", "IR sensor", "I2C LCD", "AccelStepper"],
    links: [],
  },
  {
    title: "PLC Sorting Conveyor (Ladder Logic & Pneumatics)",
    categories: ["automation"],
    image: "images/projects/plc-conveyor/conveyor-top-view.jpg",
    imageAlt:
      "Top view of the PLC sorting conveyor: XINJE PLC, belt with encoder, sensors, two pneumatic cylinders with solenoid valves, and two collection bins",
    short:
      "Ladder-logic programs for a PLC-controlled conveyor that sorts items by height, pushing each one into the right bin with pneumatic cylinders.",
    video: {
      vertical: true,
      id: "FATxpXNGuwQ",
      url: "https://youtube.com/shorts/FATxpXNGuwQ?feature=share",
      title: "Demo video: PLC sorting conveyor with ladder logic and pneumatics",
    },
    // Ladder screenshots, when added, go after the photo:
    // { src: "images/projects/plc-conveyor/plc-ladder-timers.png", caption: "", alt: "" },
    // { src: "images/projects/plc-conveyor/plc-ladder-counters.png", caption: "", alt: "" },
    gallery: [
      {
        src: "images/projects/plc-conveyor/conveyor-top-view.jpg",
        caption:
          "Training rig (top view): XINJE PLC, belt with encoder, sensors, pneumatic cylinders and sorting bins. I programmed the PLC.",
        alt: "Top view of the PLC sorting conveyor: XINJE PLC, belt with encoder, sensors, two pneumatic cylinders with solenoid valves, and two collection bins",
      },
    ],
    sections: [
      {
        title: "My part",
        items: [
          "I wrote the PLC programs (ladder logic) and ran them on an existing conveyor rig.",
        ],
      },
      {
        title: "What I programmed",
        items: [
          "A sorting sequence on a XINJE XC3-24 PLC: sensors detect the height of each item, and the PLC fires pneumatic cylinders to push it into the correct bin.",
          "Version 1, timer-based: timers set the delay between a sensor trigger and the cylinder push.",
          "Version 2, encoder-based: a counter reads encoder pulses to track the item's position along the belt, and the cylinder fires at set pulse counts.",
          "Latching (set/reset) memory relays to hold the sequence state, with inputs from three proximity sensors and an encoder.",
        ],
      },
      {
        title: "The rig",
        items: [
          "Three proximity sensors and an encoder feed the PLC. Its outputs drive a DC motor through a motor controller and two single-acting pneumatic cylinders through solenoid valves, with a flow-control valve and pressure regulator on the air line.",
        ],
      },
      {
        title: "What it demonstrates",
        items: [
          "Ladder-logic development, control sequencing and sensor interfacing.",
          "Two ways to time a sorting action: elapsed time vs. measured belt position.",
        ],
      },
      {
        title: "Context and limits",
        items: [
          "Small training rig: a learning demonstration, not a production line. I did not design or build the rig.",
          "Later, at ACCIMT, I worked hands-on with Siemens and Mitsubishi PLCs; this project used XINJE.",
        ],
      },
    ],
    tags: [
      "XINJE XC3-24 PLC",
      "XCP Pro",
      "Ladder logic",
      "Proximity sensors",
      "Encoder",
      "Pneumatic cylinders",
      "Solenoid valves",
      "Timers & counters",
    ],
    links: [],
  },
  {
    title: "ESP32-Based Wireless Nurse Calling System",
    categories: ["embedded"],
    image: "images/projects/nurse-calling/nurse-calling-system.jpg",
    imageAlt:
      "Three wall-mounted patient call units labelled Bed 01 to Bed 03, next to the nurse station unit with ten bed-labelled red indicator lights and a buzzer",
    short:
      "Designed and developed a wireless nurse calling system to improve communication between patients and nursing staff in healthcare environments.",
    video: {
      vertical: true,
      id: "AG4siW7aTn8",
      url: "https://youtube.com/shorts/AG4siW7aTn8?feature=share",
      title: "Demo video: ESP32-based wireless nurse calling system",
    },
    gallery: [
      {
        src: "images/projects/nurse-calling/nurse-calling-system.jpg",
        caption: "Patient units for Bed 01 to Bed 03, and the nurse station with a light for each bed and a buzzer.",
        alt: "Three wall-mounted patient call units labelled Bed 01 to Bed 03, next to the nurse station unit with ten bed-labelled red indicator lights and a buzzer",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "Designed and developed a wireless nurse calling system to improve communication between patients and nursing staff in healthcare environments.",
          "The system uses ESP32-based patient units, a centralized nurse station, and an ESP32-S3 operating as a standalone Wi-Fi Access Point and MQTT broker, eliminating the need for an external router or internet connection.",
        ],
      },
      {
        title: "Key features",
        items: [
          "<strong>Wireless Communication:</strong> Implemented MQTT-based communication between patient units and the nurse station.",
          "<strong>Patient Call System:</strong> Patients can request assistance using a push button, triggering bed-specific LED and buzzer alerts at the nurse station.",
          "<strong>Acknowledgement Feedback:</strong> Sends confirmation to the patient unit when the nurse station receives the call.",
          "<strong>Call Cancellation:</strong> Supports long-press cancellation and automatic Wi-Fi disconnection during idle periods.",
          "<strong>Multi-Bed Support:</strong> Designed a scalable architecture supporting multiple patient units with individual MQTT topics.",
          "<strong>Network Optimization:</strong> Implemented Wi-Fi reconnection, signal-strength testing, and transmission-power configuration to improve communication range and reliability.",
        ],
      },
      {
        title: "Result",
        items: [
          "Developed a functional, standalone wireless nurse calling prototype demonstrating practical applications of embedded systems, IoT communication, and healthcare automation.",
        ],
      },
    ],
    tags: ["ESP32", "ESP32-S3", "C/C++", "Wi-Fi", "MQTT", "Arduino IDE", "Embedded Systems"],
    links: [],
  },
  {
    title: "Two-Stage Scissor Lift Table",
    categories: ["cadcam"],
    image: "images/projects/scissor-lift/lift-table-full.jpg",
    // Portrait photo: show it whole on the card, over a blurred copy of itself
    fit: "contain",
    imageAlt: "Me standing beside the finished two-stage scissor lift table prototype with hazard-striped arms and four wheels",
    short: "Manually operated two-stage scissor lift table that I designed in SolidWorks, built and load-tested.",
    video: {
      vertical: true,
      id: "LQQdf_0frmU",
      url: "https://youtube.com/shorts/LQQdf_0frmU",
      title: "Demo video: two-stage scissor lift table",
    },
    gallery: [
      {
        src: "images/projects/scissor-lift/lift-table-full.jpg",
        caption: "The finished prototype next to me, for scale.",
        alt: "Me standing beside the finished two-stage scissor lift table prototype with hazard-striped arms and four wheels",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "Designed a manually operated two-stage scissor lift table in SolidWorks: 50 × 25 × 2 mm mild-steel box-bar frame and scissor arms, a 750 × 400 mm base and platform, M12 pivot bolts, four wheels, and a hand crank turning a 12 mm threaded rod.",
          "Fabricated and assembled the prototype myself, and load-tested it.",
          "Wrote a full design report with the force analysis: threaded-rod force, drive torque, handle effort, and bending and buckling checks on the arms.",
        ],
      },
      {
        title: "Design figures",
        items: [
          "Height range designed for about 320 to 1230 mm, with a 50 kg (500 N) design load.",
          "Calculated worst-case threaded-rod force about 600 N and handle effort about 6 N, from hand calculations with assumed friction and efficiency.",
        ],
      },
      {
        title: "Limits and next steps",
        items: [
          "Manual operation only, and the design figures come from hand calculations, not FEA.",
          "Planned improvements from my report: locking wheels, a wider base for stability at full height, a trapezoidal or ball screw for efficiency, and a motor with limit switches.",
        ],
      },
    ],
    tags: ["SolidWorks", "Mechanism design", "Mild steel", "M12 threaded rod", "Engineering calculations"],
    links: [],
  },
  {
    title: "Patient Number Display System",
    hidden: true,
    categories: ["embedded"],
    image: "images/projects/patient-display/patient-number-display.jpg",
    position: "center 35%",
    imageAlt:
      "Bench test of the patient number display: two large yellow seven-segment digits, the PIC16F877A controller board with a small two-digit display, a 4x4 keypad and a bench power supply",
    short:
      "Designed and developed a microcontroller-based patient number display system for Ragama Hospital to improve patient queue management.",
    gallery: [
      {
        src: "images/projects/patient-display/patient-number-display.jpg",
        caption: "Bench test: the large seven-segment display, the PIC16F877A controller board with its local two-digit display, and the 4×4 keypad.",
        alt: "Bench test of the patient number display: two large yellow seven-segment digits, the PIC16F877A controller board with a small two-digit display, a 4x4 keypad and a bench power supply",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "Designed and developed a microcontroller-based patient number display system for Ragama Hospital to improve patient queue management.",
          "The system uses a PIC16F877A microcontroller, a 4×4 matrix keypad, a local two-digit display, and large 6-inch seven-segment LED displays.",
          "Implemented non-volatile memory to retain the displayed number after power interruptions.",
        ],
      },
      {
        title: "How it works",
        items: [
          "Medical staff can enter, increase, or decrease patient numbers using the keypad and update the wall-mounted display by pressing ENTER.",
          "The system incorporates IRF540N MOSFET-based driver circuits to control the high-voltage LED segments using low-voltage microcontroller signals.",
        ],
      },
      {
        title: "Application",
        items: ["Hospital patient calling and queue management."],
      },
    ],
    tags: [
      "PIC16F877A",
      "Embedded C",
      "7-Segment Displays",
      "Matrix Keypad",
      "IRF540N MOSFETs",
      "PCB Design",
      "DC Power Regulation",
    ],
    links: [],
  },
  {
    title: "PCB Temperature-Controlled Fan",
    categories: ["embedded"],
    image: "images/projects/pcb-fan/pcb-fan.jpg",
    imageAlt:
      "PCB temperature-controlled fan prototype: circuit board with an op-amp, transistor, trimmer potentiometer and thermistor, wired to a small fan and a 9 V battery",
    short:
      "Analog fan controller I designed and built on a PCB: above an adjustable temperature threshold the fan starts, and its speed rises with temperature up to maximum.",
    video: {
      vertical: true,
      id: "SAXZJKW3OzQ",
      url: "https://youtube.com/shorts/SAXZJKW3OzQ",
      title: "Demo video: PCB temperature-controlled fan",
    },
    gallery: [
      {
        src: "images/projects/pcb-fan/pcb-fan.jpg",
        caption: "Working prototype on a PCB I designed: thermistor sensor, UA741 op-amp, TIP122 driver, trimmer potentiometer and fan.",
        alt: "PCB temperature-controlled fan prototype: circuit board with an op-amp, transistor, trimmer potentiometer and thermistor, wired to a small fan and a 9 V battery",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "A temperature-controlled fan circuit, designed, built and tested on my own. I started from an existing circuit concept and adapted it for PCB implementation.",
          "The full workflow: circuit design and simulation in Proteus, PCB layout with checked component placement and routing, then assembling and testing the working prototype.",
        ],
      },
      {
        title: "How it works",
        items: [
          "A thermistor senses the temperature and gives a changing voltage.",
          "A UA741 op-amp compares that signal with a threshold, which I can adjust with a trimmer potentiometer.",
          "Above the threshold, a TIP122 transistor drives the fan: it starts, its speed rises as the temperature rises, and it runs at maximum speed at higher temperatures.",
        ],
      },
      {
        title: "What it demonstrates",
        items: [
          "The complete path from schematic and simulation to a PCB and a working prototype.",
          "Analog electronics: sensing, comparison, adjustable set-point and power switching.",
        ],
      },
      {
        title: "Limits",
        items: ["A simple analog design built to practise the design-to-PCB workflow; not a commercial product."],
      },
    ],
    tags: ["Proteus", "PCB design", "Thermistor", "UA741 op-amp", "TIP122 transistor", "Analog electronics"],
    links: [],
  },
  {
    title: "Plant Phenotyping & Greenhouse Digital Twin",
    categories: ["rnd", "automation"],
    image: "images/projects/plant-phenotyping/greenhouse-digital-twin-dashboard.jpg",
    imageAlt:
      "Greenhouse digital twin dashboard: a replay of a simulated two-hour greenhouse run on a Raspberry Pi, with a run summary of final soil moisture 46.22%, air temperature 26.23 °C, 5 of 5 camera events and an OpenCV image result of 27.72%",
    short:
      "Developed a simulation-based smart greenhouse system integrating environmental monitoring, virtual automation, and plant phenotyping.",
    sections: [
      {
        title: "What I built",
        items: [
          "Developed a simulation-based smart greenhouse system integrating environmental monitoring, virtual automation, and plant phenotyping.",
          "The system features an interactive web dashboard for entering simulated temperature, humidity, soil moisture, and light conditions, with automatic rule-based irrigation and ventilation decisions.",
          "It supports experiment tracking, data logging, and visualization of validated results.",
          "OpenCV-based plant image analysis provides a foundation for future growth monitoring using manually uploaded, dated plant images.",
        ],
      },
      {
        title: "Key features",
        items: [
          "Greenhouse simulation",
          "Virtual irrigation and ventilation",
          "Interactive dashboard",
          "Experimental data logging",
          "OpenCV plant image analysis",
        ],
      },
    ],
    tags: ["Raspberry Pi", "Python", "OpenCV", "JavaScript", "HTML", "CSS", "Git"],
    links: [],
  },
  {
    title: "Front Suspension System Design (SolidWorks)",
    categories: ["cadcam"],
    image: "images/projects/suspension/suspension-solidworks-window.jpg",
    imageAlt:
      "SolidWorks window showing a front double-wishbone suspension assembly with coil-over shock absorbers and wheels, with the assembly feature tree on the left",
    short:
      "Front suspension assembly where I modelled every part in SolidWorks: upper and lower arms, coil-over shocks, hinges, fasteners and wheels, joined with assembly mates.",
    // Landscape screen recording of the CAD work, so the button says "Design process"
    video: {
      label: "Design process",
      id: "qG0aNpRTIg0",
      url: "https://youtu.be/qG0aNpRTIg0",
      title: "Design process: front suspension modelled and assembled in SolidWorks",
    },
    gallery: [
      {
        src: "images/projects/suspension/suspension-solidworks-window.jpg",
        caption: "The assembly in SolidWorks, with the component tree.",
        alt: "SolidWorks window showing a front double-wishbone suspension assembly with coil-over shock absorbers and wheels, with the assembly feature tree on the left",
      },
      {
        src: "images/projects/suspension/suspension-model.jpg",
        caption: "The front suspension model: upper and lower arms, coil-over shocks, hubs and wheels.",
        alt: "Rendered SolidWorks model of the front suspension with upper and lower arms, blue coil-over shock absorbers, hubs and two wheels",
      },
    ],
    sections: [
      {
        title: "What I built",
        items: [
          "A front suspension assembly in SolidWorks where I modelled every part myself: upper and lower arms, side plates, shock braces, coil-over shock absorbers, hinge pins, E-clips, fasteners, hubs and wheels.",
          "Assembled the parts with mates and joint relationships so the arms, hinges and shocks are connected as in a real suspension.",
          "Organised a large multi-part assembly with a clear component tree.",
        ],
      },
      {
        title: "Design process",
        items: ["The video is a screen recording of how I modelled and assembled it in SolidWorks."],
      },
      {
        title: "What it demonstrates",
        items: ["Part modelling, assembly mates and mechanism design in SolidWorks."],
      },
      {
        title: "Limits",
        items: [
          "A CAD design project: it was not physically built, and I do not show motion or load analysis results for it.",
        ],
      },
    ],
    tags: ["SolidWorks", "Part modelling", "Assembly mates", "Mechanism design"],
    links: [],
  },
  {
    title: "Line Following Robot",
    hidden: true,
    categories: ["robotics", "embedded"],
    image: unsplash("1553406830-ef2513450d76"),
    short: "Arduino-based autonomous robot tuned for stable path tracking through curves.",
    description:
      "A sensor-based autonomous robot that follows a line accurately. I optimised the control logic for motion stability and smooth curve navigation.",
    features: [
      "Integrated line-detection sensors with Arduino-based control",
      "Optimised the control logic for motion stability and curve navigation",
    ],
    outcome: "Stable line tracking with smooth curve navigation.",
    tags: ["Arduino", "Sensors", "Motor control"],
    links: [{ label: "Demo video", icon: "fa-circle-play", url: "https://drive.google.com/file/d/1MgDgV141FoKm8MG6WWyG3aH8d796jwgV/view?usp=sharing" }],
  },
  {
    title: "Rope-Operated Branch Cutter",
    hidden: true,
    categories: ["cadcam"],
    image: "assets/branch-cutter.webp",
    short: "Pulley-assisted manual cutter for safe, ground-level pruning in agriculture.",
    description:
      "A new product concept: a manual, rope-operated branch cutter that uses pulleys for mechanical advantage, so farmers can prune high branches safely from the ground.",
    features: [
      "Designed the cutting mechanism and pulley system in CAD",
      "Focused on mechanical advantage, user safety and a sustainable design",
    ],
    outcome: "A pulley-assisted design that lets farmers prune high branches safely from the ground.",
    tags: ["Mechanical design", "CAD", "Product development"],
    links: [{ label: "Project brief", icon: "fa-file-lines", url: "https://drive.google.com/file/d/1MFKkKaUOvJ6BbtNzD3f1YkndMwGEty7q/view?usp=sharing" }],
  },
];

// Everything below uses only the visible projects
const projects = allProjects.filter((p) => !p.hidden);

// Hero stat: "10+" while at least 10 projects are visible, otherwise the exact number
const projectCount = document.getElementById("projectCount");
if (projectCount) projectCount.textContent = projects.length >= 10 ? "10+" : String(projects.length);

const FALLBACK = unsplash("1592659762303-90081d34b277");

// ================= RENDER PROJECTS =================
const grid = document.getElementById("projectsGrid");

// icon is a solid icon name ("fa-file-lines") or a full class for other sets ("fa-brands fa-github")
const linkHTML = (l) =>
  `<a href="${l.url}" target="_blank" rel="noopener noreferrer"><i class="${l.icon.includes(" ") ? l.icon : `fa-solid ${l.icon}`}" aria-hidden="true"></i> ${l.label}</a>`;

// Gallery entries may be plain paths or { src, caption, alt } objects
const galleryOf = (p) =>
  (p.gallery || []).map((g) => (typeof g === "string" ? { src: g, caption: "", alt: p.title } : g));

grid.innerHTML = projects
  .map((p, i) => {
    const imgStyle = p.position ? `object-position:${p.position}` : "";
    const photos = galleryOf(p).length;
    return `
    <article${p.id ? ` id="project-${p.id}"` : ""} class="project-card reveal${p.featured ? " featured" : ""}" data-category="${p.categories.join(" ")}">
      <div class="card-img${p.fit === "contain" ? " card-img-contain" : ""}"${p.fit === "contain" ? ` style="--card-bg:url('${p.image}')"` : ""}>
        <button class="card-img-btn details-btn" data-index="${i}" data-view="photos" aria-label="View ${photos > 1 ? `${photos} photos` : "photo"} of ${p.title}">
          <img src="${p.image}" alt="${p.imageAlt || p.title}" loading="lazy" style="${imgStyle}" />
        </button>
        ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
        ${photos > 1 ? `<button class="card-photos details-btn" data-index="${i}" data-view="photos" aria-label="View ${photos} photos of ${p.title}"><i class="fa-regular fa-images" aria-hidden="true"></i> ${photos} photos</button>` : ""}
      </div>
      <div class="card-body">
        <p class="card-kicker">${p.categories.map((c) => CATEGORY_LABELS[c]).join(" · ")}</p>
        <h3>${p.title}</h3>
        <p>${p.short}</p>
        ${p.stats ? `<dl class="card-stats">${p.stats.map((s) => `<div><dt>${s.value}</dt><dd>${s.label}</dd></div>`).join("")}</dl>` : ""}
        ${p.outcome ? `<p class="card-outcome"><strong>Outcome:</strong> ${p.outcome}</p>` : ""}
        <div class="card-tags">${(p.cardTags || p.tags).map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="card-links">
          <button data-index="${i}" class="details-btn"><i class="fa-solid fa-circle-info"></i> Details</button>
          ${p.video ? `<button data-index="${i}" data-view="video" class="details-btn"><i class="fa-solid fa-circle-play" aria-hidden="true"></i> ${p.video.label || "Demo video"}</button>` : ""}
          ${p.links.map(linkHTML).join("")}
        </div>
      </div>
    </article>`;
  })
  .join("");

document.querySelectorAll("img").forEach((el) => {
  el.addEventListener("error", () => {
    if (el.src !== FALLBACK) el.src = FALLBACK;
  });
});

// ================= PROJECT FILTER =================
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.toggle("active", b === btn);
      b.setAttribute("aria-pressed", b === btn);
    });
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      const show = filter === "all" || card.dataset.category.split(" ").includes(filter);
      card.classList.toggle("hide", !show);
    });
  });
});

// Links to a project card (e.g. from Education): if a filter hides that card, show All first
document.querySelectorAll("[data-project-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const card = document.querySelector(link.getAttribute("href"));
    if (card && card.classList.contains("hide")) document.querySelector('.filter-btn[data-filter="all"]').click();
  });
});

// ================= PROJECT MODAL =================
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalThumbs = document.getElementById("modalThumbs");
// Everything behind the modal, made inert while it is open
const pageRegions = ["navbar", "main", "backToTop"].map((id) => document.getElementById(id));
pageRegions.push(document.querySelector(".footer"), document.querySelector(".skip-link"));
let lastFocused = null;

const large = (src) => src.replace("w=800", "w=1400");
const modalCaption = document.getElementById("modalCaption");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
let currentGallery = [];
let currentSlide = 0;

function showSlide(n) {
  if (!currentGallery.length) return;
  currentSlide = (n + currentGallery.length) % currentGallery.length;
  const g = currentGallery[currentSlide];
  modalImg.src = large(g.src);
  modalImg.alt = g.alt;
  const count = currentGallery.length > 1 ? `${currentSlide + 1} / ${currentGallery.length} · ` : "";
  modalCaption.textContent = g.caption ? count + g.caption : "";
  modalThumbs.querySelectorAll("button").forEach((b, i) => {
    b.classList.toggle("active", i === currentSlide);
    b.setAttribute("aria-current", i === currentSlide);
  });
}

// Builds the modal body; newer projects can add context, results, challenge and limits
function modalBodyHTML(p) {
  const list = (items) => `<ul>${items.map((f) => `<li>${f}</li>`).join("")}</ul>`;
  let html = "";
  if (p.context) {
    html += `<h4>Context</h4><dl class="modal-context">${p.context.map((c) => `<div><dt>${c.label}</dt><dd>${c.value}</dd></div>`).join("")}</dl>`;
  } else if (p.description) {
    html += `<p>${p.description}</p>`;
  }
  if (p.outcome) html += `<p class="modal-outcome"><strong>Outcome:</strong> ${p.outcome}</p>`;
  if (p.features) html += `<h4>${p.context ? "What I built" : "What I did"}</h4>${list(p.features)}`;
  if (p.results) {
    html += `<h4>Results</h4><div class="results-wrap"><table class="results-table"><thead><tr><th scope="col">Measure</th><th scope="col">Result</th></tr></thead><tbody>${p.results
      .map((r) => `<tr><th scope="row">${r.metric}</th><td>${r.value}</td></tr>`)
      .join("")}</tbody></table></div>`;
  }
  if (p.challenge) html += `<h4>Challenge I solved</h4><p>${p.challenge}</p>`;
  if (p.limits) html += `<h4>Limits</h4><p>${p.limits}</p>`;
  // Titled bullet sections ({ title, items }) for projects written that way
  if (p.sections) html += p.sections.map((s) => `<h4>${s.title}</h4>${list(s.items)}`).join("");
  if (p.context || p.sections) html += `<h4>Tech</h4>`;
  html += `<div class="card-tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>`;
  html += `<div class="modal-links">${p.links.map(linkHTML).join("")}</div>`;
  return html;
}

// Click-to-load YouTube player: only a thumbnail until the visitor presses play
const modalVideo = document.getElementById("modalVideo");

function loadVideo(v) {
  modalVideo.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&playsinline=1"
    title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function renderVideo(p) {
  modalVideo.hidden = !p.video;
  if (!p.video) return (modalVideo.innerHTML = "");
  modalVideo.innerHTML = `<button class="video-facade" aria-label="Play ${p.video.title}">
      <img src="https://i.ytimg.com/vi/${p.video.id}/hqdefault.jpg" alt="" />
      <span class="video-play" aria-hidden="true"><i class="fa-solid fa-play"></i></span>
    </button>`;
  modalVideo.querySelector(".video-facade").addEventListener("click", () => {
    loadVideo(p.video);
    modalVideo.querySelector("iframe").focus();
  });
}

// The popup shows one view at a time: "details" (text), "photos" (gallery) or "video"
const modalBox = modal.querySelector(".modal-box");
let currentView = "details";

function openModal(p, view = "details") {
  if (view === "video" && !p.video) view = "details";
  currentView = view;
  modalBox.dataset.view = view;
  modalBox.classList.toggle("video-vertical", !!(p.video && p.video.vertical));
  if (view === "video") renderVideo(p);
  else modalVideo.innerHTML = "";
  const gallery = galleryOf(p);
  currentGallery = gallery.length ? gallery : [{ src: p.image, caption: "", alt: p.imageAlt || p.title }];
  modalThumbs.innerHTML =
    gallery.length > 1
      ? gallery
          .map((g, i) => `<button data-slide="${i}" aria-label="Show photo ${i + 1}${g.caption ? `: ${g.caption}` : ""}"><img src="${g.src}" alt="" loading="lazy" /></button>`)
          .join("")
      : "";
  const multi = currentGallery.length > 1;
  modalPrev.hidden = !multi;
  modalNext.hidden = !multi;
  showSlide(0);

  document.getElementById("modalCat").textContent = p.categories.map((c) => CATEGORY_LABELS[c]).join(" · ");
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalContent").innerHTML = modalBodyHTML(p);

  lastFocused = document.activeElement;
  modalBox.scrollTop = 0;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  pageRegions.forEach((el) => (el.inert = true));
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}

function closeModal() {
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalVideo.innerHTML = ""; // stops playback
  pageRegions.forEach((el) => (el.inert = false));
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

// Keep Tab focus inside the open modal
modal.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  // Only the controls of the current view (hidden parts have no layout boxes)
  const focusable = [...modal.querySelectorAll("button, a[href], iframe")].filter((el) => el.getClientRects().length);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

modalThumbs.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (btn) showSlide(+btn.dataset.slide);
});
modalPrev.addEventListener("click", () => showSlide(currentSlide - 1));
modalNext.addEventListener("click", () => showSlide(currentSlide + 1));
modal.addEventListener("keydown", (e) => {
  if (currentView !== "photos" || currentGallery.length < 2) return;
  if (e.key === "ArrowLeft") showSlide(currentSlide - 1);
  if (e.key === "ArrowRight") showSlide(currentSlide + 1);
});

grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".details-btn");
  if (btn) openModal(projects[btn.dataset.index], btn.dataset.view || "details");
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// ================= TYPING EFFECT =================
const roles = [
  "industrial automation",
  "embedded systems",
  "IoT & wireless systems",
  "robotics",
  "CAD & machine design",
  "research & development",
];
const typedEl = document.getElementById("typed");
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = true;

function type() {
  const word = roles[roleIndex];
  typedEl.textContent = word.slice(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(type, 75);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 35);
  } else {
    deleting = !deleting;
    if (!deleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, deleting ? 2000 : 300);
  }
}
// Starts from the first role already in the HTML; stays static for reduced-motion visitors
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setTimeout(type, 2000);

// ================= NAVBAR: SCROLL, ACTIVE LINK, MOBILE MENU =================
const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section[id]");
const progress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
  navbar.classList.toggle("scrolled", y > 40);
  backToTop.classList.toggle("show", y > 600);

  let current = "home";
  sections.forEach((s) => {
    if (y >= s.offsetTop - 120) current = s.id;
  });
  // At the very bottom the short last section (Contact) may never reach the line above
  if (max > 0 && y >= max - 4) current = sections[sections.length - 1].id;
  navLinks.querySelectorAll("a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

function setMenu(open) {
  navLinks.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}" aria-hidden="true"></i>`;
}
menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("open")));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

backToTop.addEventListener("click", () => window.scrollTo({ top: 0 }));

// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("themeToggle");

function setTheme(light) {
  document.body.classList.toggle("light", light);
  themeToggle.innerHTML = `<i class="fa-solid fa-${light ? "moon" : "sun"}"></i>`;
  try {
    localStorage.setItem("theme", light ? "light" : "dark");
  } catch (_) {}
}

try {
  setTheme(localStorage.getItem("theme") === "light");
} catch (_) {}
themeToggle.addEventListener("click", () => setTheme(!document.body.classList.contains("light")));

// ================= SCROLL REVEAL =================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ================= EMAIL ME =================
// The mailto: link opens the visitor's email app. Computers with no email app set up do nothing,
// so the click also copies the address and says so.
const emailMe = document.getElementById("emailMe");
const emailNote = document.getElementById("emailNote");
if (emailMe && emailNote) {
  emailMe.addEventListener("click", () => {
    const address = emailMe.getAttribute("href").replace("mailto:", "");
    const say = (msg) => (emailNote.textContent = msg);
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(address)
        .then(() => say(`Email address copied: ${address}. If your email app didn't open, paste it into a new email.`))
        .catch(() => say(`If your email app didn't open, write to ${address}.`));
    } else {
      say(`If your email app didn't open, write to ${address}.`);
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
