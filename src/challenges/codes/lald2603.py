import sys
import math

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

n = int(raw_input()) # Number of elements which make up the association table.
q = int(raw_input()) # Number Q of file names to be analyzed.
mimes = {}
list = []
lowKeys = []

for i in xrange(n):
     # ext: file extension
     # mt: MIME type.
    ext, mt = raw_input().split()
    mimes[ext.lower()] = mt

for mime in mimes:
    lowKeys.append(mime.lower())

for i in xrange(q):
    fname = raw_input() # One file name per line.
    if (fname.split('.')[-1].lower() in lowKeys) and len(fname.split('.')) > 1:
        list.append(mimes[fname.split('.')[-1].lower()])
    else:
        list.append("UNKNOWN")
    
# Write an action using print
# To debug: print >> sys.stderr, "Debug messages..."
# For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
for file in list:
    print file