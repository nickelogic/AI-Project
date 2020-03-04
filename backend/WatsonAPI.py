import os
import subprocess

def fetchAnalyticsResults():
    
    apikey = os.environ.get('WATSON_API_KEY')
    apiurl = os.environ.get('WATSON_API_URL')
    filepath = "/Users/gwonlee/Desktop/LabCanHack_2020/AI-Project/sample_text/aif.txt"

    cmd = ["curl", "-X", "POST", "-u", "apikey:" + apikey, "--header", "Content-Type: text/plain;charset=utf-8", 
        "--header", "Accept: application/json", "--data-binary", "@" + filepath, apiurl]
    subprocess.call(cmd)

fetchAnalyticsResults()
