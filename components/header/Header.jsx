// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
	window.addEventListener('scroll', function () {
		const header = this.document.querySelector('.header');
		if (this.scrollY >= 80) header.classList.add('scroll-header');
		else header.classList.remove('scroll-header');
	});

	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html ' className='nav__logo'>
					RMR
				</a>

				<div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a
								href='#home'
								onClick={() => setActiveNav('#home')}
								className={
									activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil'>Home</i> 
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#projects'
								onClick={() => setActiveNav('#projects')}
								className={
									activeNav === '#projects'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil'>Projects</i> 
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#skills'
								onClick={() => setActiveNav('#skills')}
								className={
									activeNav === '#skills'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil'>Skills</i>
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#experience'
								onClick={() => setActiveNav('#experience')}
								className={
									activeNav === '#experience'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil'>Experience</i> 
							</a>
						</li>

						
						<li className='nav__item'>
							<a
								href='#qualification'
								onClick={() => setActiveNav('#qualification')}
								className={
									activeNav === '#qualification'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil'>Education</i> 
							</a>
						</li>


						<li className='nav__item'>
							<a
								href='#about'
								onClick={() => setActiveNav('#about')}
								className={
									activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil'>About</i>
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#contact'
								onClick={() => setActiveNav('#contact')}
								className={
									activeNav === '#contact'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil'>Contact</i> 
							</a>
						</li>

						<li className='nav__item theme-toggle-desktop'>
							<ThemeToggle />
						</li>
					</ul>
				</div>

				{!Toggle && (
          <div className='theme-toggle-mobile'>
            <ThemeToggle />
          </div>
        )}

				<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
				</div>
			</nav>
		</header>
	);
};

export default Header;
