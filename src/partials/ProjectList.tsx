import { GradientText } from '@/components/GradientText';
import { Project } from '@/components/Project';
import { Section } from '@/components/Section';
import { ColorTags, Tags } from '@/components/Tags';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Summer Bod"
        description="A fitness tracker to monitor progress as you get into shape. 
        Currently allows for tracking of strength workouts, running and biking. 
        In the future it will also contain graphs to view progress, weight tracking 
        and strength workout progression."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Summer Bod App Image',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            <Tags color={ColorTags.STONE}>Express</Tags>
            <Tags color={ColorTags.CYAN}>React.js</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.INDIGO}>Redux</Tags>
            <Tags color={ColorTags.YELLOW}>Passport.js</Tags>
          </>
        }
      />
      <Project
        name="100D Budget"
        description="A simple budget and expense tracking app made following MVC 
        architecture best practices in the backend. Features full user 
        authentication."
        link="https://budget-tracker-100devs.herokuapp.com/"
        img={{
          src: '/assets/images/100D_Budgets.png',
          alt: '100D Budget App',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.EMERALD}>MongoDB</Tags>
            <Tags color={ColorTags.ROSE}>EJS</Tags>
            <Tags color={ColorTags.STONE}>Express</Tags>
            <Tags color={ColorTags.GREEN}>Node.js</Tags>
            <Tags color={ColorTags.RED}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>Passport.js</Tags>
          </>
        }
      />
      <Project
        name="Dream House Matcher"
        description="A simple project made to learn react and redux on the frontend. 
        Features the ability to match house designs with the lots they could 
        potentially be built in. Pulls in all data from an API and stores it in 
        the global state."
        link="/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Dream House Matcher Image',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Javascript</Tags>
            <Tags color={ColorTags.CYAN}>React.js</Tags>
            <Tags color={ColorTags.INDIGO}>Redux</Tags>
          </>
        }
      />
      <Project
        name="This Very Website!"
        description="A quick and responsive portfolio website built using all the 
        latest and greatest technologies."
        link="https://FitzHawke.com"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Image of this Portfolio',
        }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.ORANGE}>Astro.js</Tags>
            <Tags color={ColorTags.CYAN}>React.js</Tags>
            <Tags color={ColorTags.TEAL}>Tailwind.css</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };