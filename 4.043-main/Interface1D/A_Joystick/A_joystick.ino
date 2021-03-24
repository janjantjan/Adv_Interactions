
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_LIS3DH.h>
#include <Adafruit_Sensor.h>
#include <Keyboard.h>
#include <RotaryEncoder.h>


#define LIS3DH_CLK 13
#define LIS3DH_MISO 12DDDDDCCCCCCCCDDDDD
#define LIS3DH_MOSI 11
#define LIS3DH_CS 10


Adafruit_LIS3DH lis = Adafruit_LIS3DH();

//Set-up variables
double recordX[] = {0,0,0,0,0};
bool hit = false;
int led = 7;
#define ON 1
#define OFF 0
bool keyA = OFF;

  
void setup(void) {
  Serial.begin(9600);
  while (!Serial) delay(10);     // will pause Zero, Leonardo, etc until serial console opens

  //Serial.println("LIS3DH test!");
  pinMode(led, OUTPUT);

  if (! lis.begin(0x18)) {   // change this to 0x19 for alternative i2c address
    Serial.println("Couldnt start");
    while (1) yield();
  }
  Serial.println("LIS3DH found!");

  
//set up the accelorometer
  Serial.print("Range = "); Serial.print(2 << lis.getRange());
  Serial.println("G");
  Serial.print("Data rate set to: ");
  switch (lis.getDataRate()) {
    case LIS3DH_DATARATE_1_HZ: Serial.println("1 Hz"); break;
    case LIS3DH_DATARATE_10_HZ: Serial.println("10 Hz"); break;
    case LIS3DH_DATARATE_25_HZ: Serial.println("25 Hz"); break;
    case LIS3DH_DATARATE_50_HZ: Serial.println("50 Hz"); break;
    case LIS3DH_DATARATE_100_HZ: Serial.println("100 Hz"); break;
    case LIS3DH_DATARATE_200_HZ: Serial.println("200 Hz"); break;
    case LIS3DH_DATARATE_400_HZ: Serial.println("400 Hz"); break;

    case LIS3DH_DATARATE_POWERDOWN: Serial.println("Powered Down"); break;
    case LIS3DH_DATARATE_LOWPOWER_5KHZ: Serial.println("5 Khz Low Power"); break;
    case LIS3DH_DATARATE_LOWPOWER_1K6HZ: Serial.println("16 Khz Low Power"); break;
  }

//set up keyboard
Keyboard.begin();
  
}





void loop() {
  lis.read();      // get X Y and Z data at once
  sensors_event_t event;
  lis.getEvent(&event);

  //take the average measurements over 0.1 second
  double averageX = 0;
  double averageY = 0;
  double averageZ = 0;
  for (int i=0; i < 10; i++) {
    averageX = averageX + event.acceleration.x;
    averageY = averageY + event.acceleration.y;
    averageZ = averageZ + event.acceleration.z;}
  averageX = averageX/10.0;
  averageY = averageY/10.0;
  averageZ = averageZ/10.0;

  //Binary indicator of hits tracked using an array
  recordX[4] = recordX[3];
  recordX[3] = recordX[2];
  recordX[2] = recordX[1];
  recordX[1] = recordX[0];
  recordX[0] = averageX;
  if ((recordX[0]-recordX[1])>=1.3){
    hit = true;
    //digitalWrite(led, HIGH);
  }else{
    hit = false;}
    //digitalWrite(led, LOW);

  //actions based on "hit"
  if (hit){
    Serial.print("BAM!   "); 
    Serial.print(recordX[0]); 
    digitalWrite(led, HIGH);
    Serial.println();
    delay(200);
  }
   digitalWrite(led, LOW);


 //Start keyboard code
  if (hit && keyA == OFF)
  {A
    keyA = ON;
    Keyboard.write(65);
  }AA
  if (hit==false)
  {
    keyA = OFF;
  }AAAA
 

  


}