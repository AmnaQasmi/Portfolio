# Getting Started Creating Responsive Portfolio with Amna Qasmi 📱 💻 

This project was made to show case your Skills, Working Experience, Projects that you have been work made. In this project you should install tailwindcss package from Tailwind website. And in this portfolio I've got experience using such an amazing ai libraries 
* TailwindCss
* Mantine Dev
* Tabler's Icon
* Flowbite
* npm [Toast, React-pdf, Typewriter-effect, Vanta.js, AOS]
* codepen.io [Css Scrollbars]
* Magic Ui [Vast Library ]
* AOS (Animate On Scroll Library)
* Vantajs {lovely animated background (but not vast only 5-6 backgrounds are available) }

## key points must do 🙂 :
1. must doulble check the import 
2. must inject the theme in the app.tsx file 
3. must write 

  In tailwindConfig.js file dont miss any of the file 
  if you miss you can't get access to that type of file.

```
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"] 
```

In App.tsx file must inject theme variable othewise you breakpoints won't😌  work properly.
```
const theme = createTheme({
  breakpoints: {
    'xs': '320px',
    'sm': '476px',
    'md': '640px',
    'bs': '768px',
    'lg': '900px',
    'xl': '1024',
    '2xl': '1280',
  },
});



  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}
```


# Firebase console  
in this portfolio I'm using firebase data base as backend to store data.

# Must Try These Libraries In your Development, they are really helpful :)

## What is Tabler ?
Tabler is fully responsive and compatible with all modern browsers. You can also use it for there amazing icons library.

## What is Mantine Dev ?
Mantine is a React components library focused on providing great user and developer experience, Mantine also have a massive Icon library. You can use mantine in your favrouite framework such as :
Usage with Next.js 
```bash
npx create-next-app@latest --typescript
```
Usage with Vite
```bash
npm create vite@latest
```
Remix, Gatsby, Typescript, Javascript, Jest, React and so on.

## Installation 

Use this UI Components Libraries such as Tabler.io, Mantine.dev to install an amazing ui component that will blow your mind.

```bash
// Mantine components can easily be use if once you create an Mantine project initially.
// there components can be just import and use easily much better than shadcn ui.
npm install  @tabler/core
```

### `npm run build`
Plz must do build it's really good.
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Deployment 
In my case I'm using vercel because there was an ease in it I'm using Vercel since my early days it gives you free domain, and I really like it alot.
## VERCEL
* Connect your Vercel account to github.
* Which makes it easy to use, and user friendly.