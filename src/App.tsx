import { DisclosureGroup, Link } from 'react-aria-components'
import Icon from './components/Icon'
import SkillBox from './components/SkillBox'
import Title from './components/Title'
import DisclosureBox from './components/DisclosureBox'
import { useState } from 'react'
import BulletList from './components/BulletList'
import { heroExperience, rubyExchangeExperience, tokenSightExperience } from './data/experience'
import { skills } from './data/skills'
import Button from './components/Button'
import CardWrapper from './components/CardWrapper'

function App() {
  const [expandedKeys, setExpandedKeys] = useState(['hero']);
  return (
    <div className="w-full min-h-dvh bg-no-repeat bg-fixed bg-cover bg-body-bg bg-[url('/wallpaper.jpg')]">
      <div className="w-full flex flex-col gap-6 sm:px-6 px-3 sm:py-6 py-4 max-w-[1440px] mx-auto">

        <div className='flex sm:justify-end justify-between items-center w-full gap-3 text-white'>
          <div className='flex items-center gap-3'>
            <Link href='https://github.com/ndim99?tab=overview&from=2025-08-01&to=2025-08-28' target='_blank' className='cursor-pointer'><Icon name='github' className='size-[25px]' /></Link>
            <Link href='https://gitlab.com/ndim99' target='_blank' className='cursor-pointer'>  <Icon name='gitlab' className='size-7' /></Link>
            <Link href='https://www.linkedin.com/in/ndim19/' target='_blank' className='cursor-pointer'><Icon name='linkedIn' /></Link>
            <Link href='https://t.me/username/@nd2452' target='_blank' className='cursor-pointer'><Icon name='telegram' /></Link>
          </div>
          <div className='flex items-center gap-3'>
            <Button text='Experience' scrollToId="experience" />
            <Button text='Skills' scrollToId="skills" />
          </div>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <Title icon='person' title='About me' />
          <CardWrapper>
            <p className='text-sm font-normal'>Hi, I’m Nikola, a <b>Frontend Engineer</b> passionate about building <b>scalable, user-focused web applications</b> and <b>browser extensions</b>. I have a strong background in the <b>crypto</b> and <b>Web3</b> space, working on <b>DEX platforms</b>, <b>decentralized applications</b>, and <b>browser-based tools</b> where I’ve tackled challenges related to <b>security, performance,</b> and <b>scalability.</b>
              <br /><br /> My expertise lies in crafting <b>intuitive, high-performance user interfaces</b> using modern <b>frontend frameworks</b>, while also leveraging a broad range of tools, including <b>Web3 technologies.</b> I am committed to writing <b>maintainable solutions</b> and staying up to date with <b>modern development practices.</b>  <br /><br />Driven by <b>curiosity</b> and <b>continuous learning</b>, I thrive in <b>collaborative, fast-paced environments</b>, especially <b>startups</b>, where I can contribute to products that users genuinely enjoy.</p>
          </CardWrapper>
        </div>

        <div className='flex flex-col gap-2 w-full' id="experience">
          <Title icon='experience' title='Experience' />
          <DisclosureGroup
            expandedKeys={expandedKeys}
            onExpandedChange={keys => setExpandedKeys(Array.from(keys).map(String))}
            className="flex flex-col gap-4 text-white"
          >
            <DisclosureBox id="hero" company="Hero" date="February 2025 - Present">
              <BulletList items={heroExperience} className='pb-3' />
            </DisclosureBox>
            <DisclosureBox id="tokensight" company="TokenSight" date="April 2023 - December 2024">
              <BulletList items={tokenSightExperience} className='pb-3' />
            </DisclosureBox>
            <DisclosureBox id="ruby.exchange" company="Ruby.Exchange" date="October 2021 - December 2023">
              <BulletList items={rubyExchangeExperience} className='pb-3' />
            </DisclosureBox>
          </DisclosureGroup>
        </div>

        <div className='flex flex-col gap-2 w-full' id="skills">
          <Title icon='skills' title='Skills' />
          <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full'>
            {skills.map((item, index) => <SkillBox key={index} title={item.title} description={item.description} skills={item.skills} />)}
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
