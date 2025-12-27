# Adding or Updating Projects

Use this workflow to add new work items to the Projects section without touching the UI logic.

## 1. Add the preview image
1. Place your screenshot/thumbnail inside `src/Assets/Projects/`.
2. Keep the filename lowercase and without spaces, e.g. `myproject.png`.

## 2. Import the image in `projectsData.js`
Edit `src/components/Projects/projectsData.js` and add an import at the top:
```js
import myproject from "../../Assets/Projects/myproject.png";
```

## 3. Append a project object to the `projects` array
Inside the same file, add a new object inside `export const projects = [ ... ]`.
Fill only the fields you have:
```js
{
  imgPath: myproject,
  isBlog: false,
  title: "Project Name",
  description: "Short summary (1–2 sentences).",
  ghLink: "https://github.com/username/repo",      // optional
  demoLink: "https://live-demo.com",               // optional
  demoLabel: "Live Site",                          // optional label override
  caseLink: "https://behance.com/...",             // optional case study link
  caseLabel: "Case Study"                          // optional label override
}
```
- **GitHub only**: keep `ghLink` and remove other links.
- **Live site only**: use `demoLink` (and optional `demoLabel`).
- **Case study**: use `caseLink` + `caseLabel`.

## 4. Save and verify
1. Save `projectsData.js`.
2. Run the dev server or refresh the deployed site—your new project card shows automatically.

## Tips
- Keep descriptions concise and professional.
- Images should be similar dimensions for a consistent grid.
- You can reorder projects just by rearranging the objects in the array.
