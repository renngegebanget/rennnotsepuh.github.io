import ProjectCard from '../components/ProjectCard'
import { datas } from '../data'
import rennHome from '/developer-activity.png'
import rennAbout from '/about.png'

const HomePage = () => {
  const projects = datas.projects
  const skills = datas.skills
  return (
    <div className='Homepage pb-10'>
      <div className='container mx-auto px-4'>
        <div className='hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32'>
          <div className='box'>
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-3'>I'm Jagad Renata</h1>
            <h1 className='md:text-xl text-md font-medium mb-4'>
              I'm an
              <span className='text-teal-600'> Front-End Developer</span>
            </h1>
            <p className='font-base/8 mb-7'>
              Hello, I'm Jagad Renata, a 14-year-old web designer and developer from Yogyakarta. I have expertise in front-end and back-end development, as well as an interest in design and
              technology.
            </p>
            <a href='#about' className='bg-teal-600 hover:bg-teal-500 transition-all py-2 px-4 text-white shadow rounded-full'>
              About
            </a>
          </div>
          <div className='box'>
            <img src={rennHome} alt='Jagad Renata' className='md:w-auto w-[400px] md:mx-0 mx-auto' />
          </div>
        </div>

        <div className='about grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32' id='about'>
          <div className='box'>
            <img src={rennAbout} alt='Jagad Renata' className='md:w-auto w-[400px] md:mx-0 mx-auto' />
          </div>
          <div className='box'>
            <h1 className='lg:text-5xl/tight text-3xl font-bold mb-7'>I'm Jagad Renata</h1>
            <p className='font-base/8 mb-7'>
              Hello, I'm Jagad Renata, a young 14-year-old web designer and developer, living in Yogyakarta. I have a great interest in the world of design and software development. My hobbies are
              traveling and coding, with expertise in front-end and back-end development. I am committed to continuously learning and improving my skills to create innovative and useful digital
              solutions.
            </p>
            <hr />
            <div className='mt-3 flex gap-2'>
              <a href='#' className='bg-teal-600 hover:bg-teal-700 transition-all pt-2 px-10 text-white rounded-full font-medium'>
                My CV
              </a>
              <a href='#' className='bg-white border-2 border-teal-600 hover:bg-teal-500 transition-all py-2 px-7 text-teal-600 rounded-full font-medium'>
                Hire Now
              </a>
            </div>
          </div>
        </div>

        <div className='skills p-4 lg:mt-36 mt-20' id='skills'>
          <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>My Skills</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {skills.map((skill, index) => (
              <div key={index} className='flex flex-col items-center'>
                {skill.icon}
                <p className='mt-2 font-medium text-gray-700'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='projects p-4 lg:mt-36 mt-20' id='projects'>
          <h1 className='text-3xl font-bold text-gray-800 text-center mb-6'>My Projects</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
