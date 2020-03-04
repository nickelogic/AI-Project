import os
import subprocess
import shlex
import json

def fetchAnalyticsResults():
    
    apikey = os.environ.get('WATSON_API_KEY')
    apiurl = os.environ.get('WATSON_API_URL')
    filepath = "/Users/gwonlee/Desktop/LabCanHack_2020/AI-Project/sample_text/profile.txt"

    cmd = ["curl", "-X", "POST", "-u", "apikey:" + apikey, "--header", "Content-Type: text/plain;charset=utf-8", 
        "--header", "Accept: application/json", "--data-binary", "@" + filepath, apiurl]

    process = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    output = process.communicate()[0]

    print("*" * 200)

    parsed = json.loads(output)
    print(json.dumps(parsed, indent=4))

fetchAnalyticsResults()
