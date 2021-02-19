/*

// DON'T USE THIS DOC YET. IT'S NOT READY.

http://www.asciitable.com/

*/

#include <Keyboard.h>
#include <RotaryEncoder.h>

// Setup a RoraryEncoder for pins A2 and A3:
RotaryEncoder encoder(A0, A1);

#define OFF 0
#define ON 1

bool keyA = OFF;
bool keyB = OFF;
bool keyX = OFF;
bool keyY = OFF;

void setup()
{

  Serial.begin(57600);
  Serial.println("yo");

  // make pin 2 an input and turn on the
  // pullup resistor so it goes high unless
  // connected to ground:
  pinMode(2, INPUT_PULLUP);
  Keyboard.begin();
}

void loop()
{

  static int pos = 0;
  encoder.tick();

  int newPos = encoder.getPosition();
  if (pos != newPos)
  {
    Serial.print(newPos);
    Serial.println();

    if (newPos > pos)
    {
      Keyboard.write(69);
    }

    if (newPos < pos)
    {
      Keyboard.write(70);
    }

    pos = newPos;
  }

  if ((digitalRead(2) == HIGH) && keyA == OFF)
  {
    keyA = ON;
    Keyboard.write(65);
  }
  if (digitalRead(2) == LOW)
  {
    keyA = OFF;
  }

  if ((digitalRead(3) == HIGH) && keyB == OFF)
  {
    keyB = ON;
    Keyboard.write(68);
  }
  if (digitalRead(3) == LOW)
  {
    keyB = OFF;
  }

  if ((digitalRead(4) == HIGH) && keyX == OFF)
  {
    keyX = ON;
    Keyboard.write(67);
  }
  if (digitalRead(4) == LOW)
  {
    keyX = OFF;
  }

  if ((digitalRead(5) == HIGH) && keyY == OFF)
  {
    keyY = ON;
    Keyboard.write(68);
  }
  if (digitalRead(5) == LOW)
  {
    keyY = OFF;
  }
}
