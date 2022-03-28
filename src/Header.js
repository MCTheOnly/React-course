const Header = () => {
	return (
		<div className="header__wrapper">
			<h2>Site Logo</h2>
			<nav className="header__nav">
				<a href="/">About</a>
				<a href="/" style={
					{
						color: 'red',
						textDecoration: 'none'
					}
				}>Contact Us</a>
			</nav>
		</div>
	);
}

export default Header;
