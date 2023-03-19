# Flux Based SCADA System in Factory

A project to assist small factories to improve the yield of small parts production. This project is used to remotely assist machines that do not have OPC UA (OPC Unified Architecture), so that factories can meet the standards of the Industrial Internet of Things.

This project conforms to the prototype of the SCADA (Supervisory Control And Data Acquisition) concept, and uses the FLUX architecture proposed by Facebook in the middle layer. All sensing data and machine commands are communicated with the database through a unified scheduler, and the data flow is unified into two directions, which is also convenient for management and expansion.