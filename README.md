# ui-visual-comparator
An application that estimates the differences in the UI of a web page by comparing the actual page against the updated page. In short, live page vs local page.




### How to run this ?

For demo purposes, the sample site in this [repo](https://github.com/srivallis/static-sample-site.git) has been used. The ui-visual comparator will compare the live
[static page](https://static-site-sample.herokuapp.com/) and the local version of the same. 

### Steps: 
- Clone the static sample [repo](https://github.com/srivallis/static-sample-site.git)
- `cd <directory-name>`
- `node app.js` - This will serve the static html page in local. The live static page is available in this [url](https://static-site-sample.herokuapp.com/)

- Clone the ui-visual-comparator(https://github.com/srivallis/ui-visual-comparator.git) repo
- `cd <directory-name>`
- `node app.js` - This script will capture screenshots (in all screen resolutions like mobile, tablet, desktop etc) of both the live page and the local page and compare the screenshots to find any differences in the UI
and highlights them.
