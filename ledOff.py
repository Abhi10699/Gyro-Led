import RPi.GPIO as GPIO
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)

GPIO.setup(23,GPIO.OUT)

def ledoff():
    GPIO.output(23,GPIO.LOW)

ledoff()
