This a startpage template with a defined style with some extra functionalities

# Installation
<ol>
  <li>
    Refer to <a href="https://stpg-tk.netlify.app/guides/firefox-startpage/">this guide for installing startpages</a>
    note that the cfg has become obsolote, so you should put the following instead:
    <pre>
let {classes:Cc,interfaces:Ci,utils:Cu} = Components;

try {
ChromeUtils.defineESModuleGetters(this, {
AboutNewTab: "resource:///modules/AboutNewTab.sys.mjs",
HomePage: "resource:///modules/HomePage.jsm",
});

let newTabURL = "file:///C:/Users/User/Documents/Startpages/u0/index.html";

AboutNewTab.newTabURL = newTabURL;

HomePage.safeSet(newTabURL);
} catch(e){Cu.reportError(e);} // report errors in the Browser Console</pre>
  update the newTabURL to the actual directory you have installed this startpage
  </li>
  <li>
    If you don't want the left bar at all you could use the index-nobar.html as a newTabURL destination instead.
    <br />
    Otherwise you can continue with adding the extension to your browser, this extension is not signed by mozilla so you can only get it in the <code>about:debugging</code> page.
  </li>
  <li>
    The files that the extension generates are directed to your downloads folder, this repository contains a bash file that automatically puts these files in the startpage directory to be read, adjust the bash file to your settings. (you need the dunstify program for notifications to get added to your startpage)
  </li>
</ol>
