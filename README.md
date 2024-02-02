# WEBFLOW REACT TEMPLATE

The walkthrough below will demonstrate how to build and create CDN for a react project and integrate it in webflow.

This is a template for a lightweight react project for creating small components, referenced from [here](https://webflow.com/blog/react-components-in-webflow).

## Step 1: Replace default names

1. Title: Change the <title> inside `index.html`
2. Target ID: Change the div ID `react-target` inside `dist/index.html` and `src/index.js` to whatevere ID name you like


## Step 2: Write the react code

1. Inside `src/index` replace inside the `return()` to your code
2. Run `npm start` and check your app in `http://localhost:3000`
3. Run `npm run build` to build a bundle

## Step 3: Create CDN

1. Create a github repo and push all the files (bundle.js INCLUDED)
2. Get the URL of the `bundle.js` file inside of your github repo.
It should look similar to this
```
https://github.com/<YOUR_GITHUB_ACCOUNT>/<YOUR_REPO_NAME>/blob/main/dist/bundle.js
```
3. Go the website [https://www.jsdelivr.com/github](https://www.jsdelivr.com/github).
Paste the Github link above, and copy the jsDeliver link generated

## Step 4: Read the bundle file inside Webflow

1. Inside your webflow project, create a empty div and put the `target ID` name that you chose in Step 1.

2. Inside the page you created the empty div, click Settings button with the gear icon
<img src="public/webflow-screenshot-1.png" alt="Webflow designer screenshot" /><br />
3. Scroll down and find the `before </body> tag` section, and paste the jsDeliver link.
<img src="public/webflow-screenshot-2.png" alt="Webflow designer screenshot" /><br />

4. Publish and access the page you put your script.
5. The React app should be showing inside your webflow app.