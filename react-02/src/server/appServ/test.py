import os
import pprint
env = dict(os.environ)
print(env["FLASK_APP"])
pprint.pprint(dict(os.environ))