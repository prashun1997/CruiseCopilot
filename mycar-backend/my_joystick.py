
from donkeycar.parts.controller import Joystick, JoystickController


class MyJoystick(Joystick):
    #An interface to a physical joystick available at /dev/input/js0
    def __init__(self, *args, **kwargs):
        super(MyJoystick, self).__init__(*args, **kwargs)

            
        self.button_names = {
            0x136 : 'Forward',
            0x138 : 'Backword',
            0x131 : 'right',
            0x133 : 'left',
        }


        self.axis_names = {
            0x1 : 'F',
            0x2 : 'R',
        }



class MyJoystickController(JoystickController):
    #A Controller object that maps inputs to actions
    def __init__(self, *args, **kwargs):
        super(MyJoystickController, self).__init__(*args, **kwargs)


    def init_js(self):
        #attempt to init joystick
        try:
            self.js = MyJoystick(self.dev_fn)
            self.js.init()
        except FileNotFoundError:
            print(self.dev_fn, "not found.")
            self.js = None
        return self.js is not None


    def init_trigger_maps(self):
        #init set of mapping from buttons to function calls
            
        self.button_down_trigger_map = {
            'Forward' : self.increase_max_throttle,
            'unknown(0x137)' : self.decrease_max_throttle,
        }


        self.axis_trigger_map = {
            'R' : self.set_steering,
            'F' : self.set_throttle,
        }


