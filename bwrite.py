import sys,os,base64
fp=sys.argv[1]
b64=sys.argv[2].strip()
b64+=" =\*(-len(b64)%4)
full=os.path.abspath(fp)
os.makedirs(os.path.dirname(full),exist_ok=True)
open(full,\wb\).write(base64.b64decode(b64))
print(\Wrote: \+fp)
