f1=open("MathSocOpen2018.html",'wb')

f1.write("""
<html>
<head>
<title> Personal Groups - MathSoc Open 2018 </title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<style>
body{
	line-height:20px;
	}
</style>
</head>
<body>
<div class="container">
<h2> MathSoc Open 2018 - Groups </h2>
<h4> Please click on your name to see your groups </h4>""")
import glob

def makepropername(s):
	if "2017" in s:
		return "Rohan Gupta (2017GUPT01)"
	elif "Newcomer" in s:
		return "Rohan Gupta (Newcomer)"
	else:
		pos = [i for i,e in enumerate(s+'A') if e.isupper()]
		parts = [s[pos[j]:pos[j+1]] for j in xrange(len(pos)-1)]
		return " ".join(parts)
for myfile in sorted(glob.glob("MathSocOpen2018/*")):
	m1=myfile.split(".pdf")[0].split("/")[1]
	f1.write("""<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href=\""""+myfile+"""\">"""+makepropername(m1)+"""</a> </div>"""+"\n" )

f1.write("""<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href="skrra.html"> Kaustubh Varshney </a> </div>"""+"\n" )

f1.write("""</div> </body> </html>""")
f1.close()

