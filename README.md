# Improving The Pastry Box


The Pastry Box Project runs on Wordpress and uses [CurtainsUp](https://github.com/alexduloz/CurtainsUp) as a blueprint for its template.

You can pull requests for new features, design improvements, and whatever crosses your mind. 

There are some [limitations](https://github.com/alexduloz/pastrybox/blob/gh-pages/LIMITATIONS.md) to what you can use, but I'm sure it makes sense...


## Install


It is quite easy to get ready to improve the Pastry Box Project, but it may take some patience to get started:


* Download and Install Wordpress. As usual.
* In your adminCP, go to "Permalinks". Check "Custom Structure": `/%category%/%postname%/`
* In your adminCP, go to "Permalinks". Rename Category base to "baker"
* In your adminCP, Add __8__ new pages. They must all be __empty__ (nothing to add, just publish them with empty content). Here are the titles those 8 pages: Most Recent, About, Archives, Bakers, Disclaimer, Privacy Policy, Stream, Terms Of Services. 
* In your adminCP, create as many categories as you wish. Categories are named after Bakers (e.g. "Andy Clarke", "Bruce Lawson", "Emily Lewis" etc.). A list of all the guests participating in The Pastry Box Project is available at the following url: [http://the-pastry-box-project.net/bakers](http://the-pastry-box-project.net/bakers).
* In your adminCP, start creating posts: select a category, use a title which adheres to the following format: "1 January 2012, baked by Lea Verou", add some content, publish.
* In your adminCP, repeat previous step, but schedule the post (future post) instead of publishing it.
* In your adminCP, install the Pastry Box Theme (all the files you need are located in the "pastrybox" folder downloaded from Github), and select it as your current theme.

That's it. You're done.


## The _private Directory

You will see at times references to a "_private" folder (so far only in parts > head.php). This "_private" folder contains material that, for copyright reasons, cannot be shared. Therefore, it cannot be downloaded from Github. It is however very easy to recreate.

__If you don't want to recreate the "_private" directory, the Pastry Box template will still function properly (minus the fonts listed below)__

The "_private" folder contains two files and one folder:

* bakers
* remote-fonts.php
* ss-social.php

### The "bakers" folder

The "bakers" folder should have the following structure:


	bakers
		data
			[year] (e.g. "2012")
				bio
				portraits


The "bio" folder contains the texts displayed in "baker.php" (HTML format).
The "portraits" format contains the `.png` avatars: two per baker: 200px x 200px (named after the baker's slug) + 100px x 100px (baker's slug + "-small" suffix).

Here's an example:


	bakers
		data
			2012
				bio
					lea-verou.php
					ethan-marcotte.php
					...
				portraits
					lea-verou.png
					lea-verou-small.png
					ethan-marcotte.png
					ethan-marcotte-small.png
					...


Please make sure you read the [limitations](https://github.com/alexduloz/pastrybox/blob/gh-pages/LIMITATIONS.md) before using the material related to contributors.

### remote-fonts.php

This file contains the typical embed code from [Typekit](https://typekit.com/fonts):

	<script type="text/javascript" src="//use.typekit.net/YOURID.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

If you're using another service, change those lines to what suits your needs.

The Pastry Box project uses the following fonts: 

*  Adobe Garamond Pro by Adobe
*  Myriad Pro by Adobe 
*  Cooper Black Std by Adobe 

### ss-social.php

This file simply loads the SS Social set from [Symbolset](http://symbolset.com/)

	<link href="path/to/ss-social/ss-social.css" rel="stylesheet" />

Just set the path to your own SS Social set.

## Sending Pull Requests

There are two types of pull requests: 

1) Code refactoring, markup changes and any such other modifications which are not perceivable by users, or do not add new features (even "invisible" ones) to the Pastry Box Project.

2) Design alterations, UX improvements, new content architecture, new third-party connections and any other such modifications which either are perceivable by users or add new features (even "invisible" ones) to the Pastry Box Project.

__If your request falls in the first category__, just pull your request as usual. 

__If your request falls in the second category__, make sure you post a link to a *working page* which showcases your modifications. The best way to do this is to install Wordpress on a server and use the Pastry Box template with your modifications.

Please do not use texts published on the-pastry-box-project.net when showcasing your modifications (as it's copyrighted material).

Happy forking.
