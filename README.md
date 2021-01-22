# volume_control_arduino
## Control system volume and brightness using arduino through Nodejs

Using Nodejs and Arduino we can control PC parameters such as loudness and speaker externally.
In our case we will be using potentiometer connected on Arduino (in my case Pro-Micro) though others will work similarly as well.
Data from analog input pin will be read and used in conjuction with npm libraries to change brightness and volume depending on position of potentiometer.

	Ensure Nodejs is installed.
Node –v
Also install johhny-five
npm i johnny-five

On Arduino IDE ensure firmata library is installed

•	Scroll down the > Examples, find StandardFirmataPlus and click on it.
•	Click on Upload.
