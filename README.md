
# react-mouseflow
Implement the Mouseflow tracking snippet into your application

Installation
```
npm install react-mouseflow
```
Usage
```
import { mouseflow} from 'react-mouseflow';

mouseflow.initialize(mfid);

//Tag a recorded session
mouseflow.tag('tag', property);

// Add a variable to a recorded session
mouseflow.setVariable('setVariable', key, value);

// Update the current page path
mouseflow.newPageView('/my/page');

// Ensure Mouseflow is running before calling it's methods
if (Mouseflow .initialized()) {
  //your code here
}
```

*mfid*: Stands for Mouseflow Website ID. This is the ID which tells Mouseflow which project's recording script should be run. [Where is my website id?](https://help.mouseflow.com/en/articles/4279893-where-is-my-website-id)