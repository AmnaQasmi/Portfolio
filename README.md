# Getting Started Creating Responsive Portfolio with Amna Qasmi 📱 💻

This project was made to showcase your skills, working experience, and projects that you have been working on. In this project, you should install the Tailwind CSS package from the Tailwind website. And in this portfolio, I've got experience using such amazing AI libraries.
* TailwindCss
* Mantine Dev
* Tabler's Icon
* Flowbite
* npm [Toast, React-pdf, Typewriter-effect, Vanta.js, AOS]
* codepen.io [Css Scrollbars]
* Magic Ui [Vast Library]
* AOS (Animate On Scroll Library)
* Vantajs {lovely animated background (but not vast; only 5-6 backgrounds are available)}

## Key Points Must Do🙂 :
1. must double check the import.
2. must inject the theme in the app.tsx file.
3. must write.
4. must increase SEO optimization as I'm doing in my project.

In the tailwindConfig.js file, don't miss any of the file
If you miss, you can't get access to that type of file.

```
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"]
```

In the App.tsx file, you must inject a theme variable; otherwise, your breakpoints won't😌  work properly.
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

// I'm using React-helmet Library to optimaize it & to increase it's SEO.
// Trust me it's easier then ever.

 <Helmet>
        <title>Amna's Portfolio</title>
        <meta name="description" content="Amna's portfolio showcasing web development skills." />
        <meta property="og:title" content="Amna's Portfolio" />
        <meta property="og:description" content="Amna's portfolio showcasing web development skills." />
        <meta property="og:image" content="/path-to-image.jpg" />
        {/* Additional meta tags if needed */}
      </Helmet>
      
<HomePage />
</MantineProvider>
);
}
```


# Firebase console 
In this portfolio, I'm using Firebase Data Base as the backend to store data.

# Search Engine Optimization (SEO) 🔎
For SEO I'm using the react-helmet library & in this project I'll help you to know how to inject,use or implement React-Helmet in ReactJS framework
```bash
npm i react-helmet

npm i --save-dev @types/react-helmet
```

# Must Try These Libraries in Your Development; they are really helpful.

## What is Tabler?
Tabler is fully responsive and compatible with all modern browsers. You can also use it for their amazing icon library.

## What is Mantine Dev?
Mantine is a React components library focused on providing great user and developer experience. Mantine also has a massive icon library. You can use mantine in your favorite framework, such as:
Usage with Next.js
```bash
npx create-next-app@latest --typescript
```
Usage with Vite
```bash
npm create vite@latest
```
Remix, Gatsby, Typescript, Javascript, Jest, React, and so on.

## Installation

Use these UI component libraries, such as Tabler.io and Mantine.dev, to install an amazing UI component that will blow your mind.

```bash
Mantine components can easily be used once you create a Mantine project initially.
// There components can be just imported and used easily, much better than shadcn UI.
npm install @tabler/core
```

### `npm run build`
Please do build it's really good.
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!

# Deployment
In my case, I'm using Vercel because there was an ease in it. I've been using Vercel since my early days; it gives you a free domain, and I really like it a lot.
## VERCEL
* Connect your Vercel account to github.
* Which makes it easy to use and user-friendly.