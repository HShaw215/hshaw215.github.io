import React, {lazy, Suspense} from 'react';
import '../stylesheet/styles.css';

const Component1 = lazy(() => import(
   '../components/LazyImage'
))

const Main = () => {
    return (
         <main class="main">
            <hr class='line'></hr>
            <section class='text'>
                <Suspense fallback = 
                {<div>Photo loading please wait...</div>}>
                    <Component1 />
                </Suspense>
                {/* <img src={hunter} class="pic" alt="Hunter Shaw"></img> */}
                <body class="bio">
                    <p>
                        Hello, I'm Hunter. I am a software engineer living in New York. Currently I work at 
                        <a class='project' href='https://rekuberate.org'> ReKuberate</a>
                        , a Kubernetes cluster monitoring tool with visualization capabilities.
                    </p>
                    <p>
                        Before ReKuberate, I worked as a software engineer at  
                        <a class='project' href='https://www.brooklyngrid.com/'> Brooklyn Grid </a>
                         designing and building various fullstack applications to track rentals and
                         violations.
                    </p>
                    <p>
                        Projects that I have recently worked on include 
                        <a class='project' href='https://conquest-7ffadf4c2da1.herokuapp.com/'> Conquest</a>
                        , a test tracking tool, and a website for the rental company 
                        <a class='project' href='https://bestopllc.com/'> Bestop</a>.
                    </p>
                    <p>
                        Outside of coding I am passionate about hockey, reading, skiing, and DJing. If you want to talk more about
                        coding or any of my hobbies, feel free to reach out to me via email or on LinkedIn.
                    </p>
                </body>
            </section>
        </main> 
    )
}

export default Main;